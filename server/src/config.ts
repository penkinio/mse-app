import 'dotenv/config';

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Variable d'environnement manquante : ${name} (voir .env.example)`);
  }
  return value;
}

export const PORT = Number(process.env.PORT ?? 4000);

/** Origine autorisée pour les requêtes CORS — l'URL du site déployé en production. */
export const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? '*';

export const RESEND_API_KEY = required('RESEND_API_KEY');

/** Doit appartenir à un domaine vérifié dans Resend (sinon utiliser onboarding@resend.dev pour tester). */
export const MAIL_FROM = process.env.MAIL_FROM ?? 'MSE CAD Engineering <onboarding@resend.dev>';
export const MAIL_TO = process.env.MAIL_TO ?? 'contact@mse.cm';

/** À garder cohérent avec MAX_FILE_SIZE_MB côté app (src/constants/contactForm.ts). */
export const MAX_FILE_SIZE_MB = Number(process.env.MAX_FILE_SIZE_MB ?? 10);
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
export const MAX_FILES = Number(process.env.MAX_FILES ?? 10);
