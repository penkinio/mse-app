import { Router } from 'express';
import multer from 'multer';
import { MAX_FILE_SIZE_BYTES, MAX_FILES } from '../config';
import { sendContactEmail } from '../services/emailService';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_FILE_SIZE_BYTES, files: MAX_FILES },
});

export const contactRouter = Router();

/**
 * Reçoit le formulaire de contact (multipart/form-data, champ `attachments`
 * pour les fichiers) et envoie l'email via Resend. La validation ici est un
 * filet de sécurité côté serveur : ne jamais se fier uniquement à la
 * validation du front, qui peut être contournée.
 */
contactRouter.post('/contact', upload.array('attachments', MAX_FILES), async (req, res) => {
  const { fullName, company, email, phone, domain, subject, message } = req.body as Record<
    string,
    string | undefined
  >;

  const missing: string[] = [];
  if (!fullName?.trim()) missing.push('nom complet');
  if (!email?.trim()) missing.push('email');
  if (!domain?.trim()) missing.push('domaine');
  if (!subject?.trim()) missing.push('objet');
  if (!message?.trim()) missing.push('message');

  if (missing.length > 0) {
    res.status(400).json({ success: false, message: `Champs manquants : ${missing.join(', ')}` });
    return;
  }

  const files = (req.files as Express.Multer.File[] | undefined) ?? [];

  // Une erreur ici est automatiquement transmise au middleware d'erreurs
  // (voir index.ts) grâce à la gestion native des rejets async d'Express 5.
  await sendContactEmail({
    fullName: fullName!.trim(),
    company: company?.trim() ?? '',
    email: email!.trim(),
    phone: phone?.trim() ?? '',
    domain: domain!.trim(),
    subject: subject!.trim(),
    message: message!.trim(),
    attachments: files.map((f) => ({ filename: f.originalname, content: f.buffer })),
  });

  res.status(200).json({ success: true });
});
