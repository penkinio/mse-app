import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { PORT, ALLOWED_ORIGIN } from './config';
import { contactRouter } from './routes/contact';

const app = express();

app.use(cors({ origin: ALLOWED_ORIGIN }));
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api', contactRouter);

// Middleware d'erreurs centralisé — capte aussi bien les erreurs Multer
// (fichier trop volumineux, etc.) que les rejets des routes async.
app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (err instanceof multer.MulterError) {
    res.status(400).json({ success: false, message: `Erreur de fichier : ${err.message}` });
    return;
  }
  console.error('[server] Erreur non gérée :', err);
  res.status(500).json({ success: false, message: 'Erreur serveur interne.' });
});

app.listen(PORT, () => {
  console.log(`Serveur MSE CAD (contact) démarré sur http://localhost:${PORT}`);
});
