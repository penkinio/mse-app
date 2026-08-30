import { Resend } from 'resend';
import { RESEND_API_KEY, MAIL_FROM, MAIL_TO } from '../config';

const resend = new Resend(RESEND_API_KEY);

type ContactEmailInput = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  domain: string;
  subject: string;
  message: string;
  attachments: { filename: string; content: Buffer }[];
};

/**
 * Envoie la demande de contact par email via Resend, avec pièces jointes.
 * `replyTo` est réglé sur l'email du visiteur : une simple "réponse" dans
 * la boîte mail de MSE répond directement au bon interlocuteur.
 */
export async function sendContactEmail(input: ContactEmailInput): Promise<void> {
  const { error } = await resend.emails.send({
    from: MAIL_FROM,
    to: MAIL_TO,
    replyTo: input.email,
    subject: `[Site MSE CAD] ${input.subject}`,
    html: buildHtml(input),
    attachments: input.attachments,
  });

  if (error) {
    throw new Error(`Resend: ${error.message}`);
  }
}

function buildHtml(input: ContactEmailInput): string {
  const row = (label: string, value: string) =>
    `<p style="margin:0 0 8px"><strong>${label} :</strong> ${escapeHtml(value) || '—'}</p>`;

  return `
    <div style="font-family: sans-serif; color: #1F2937;">
      <h2 style="color:#0B2540;">Nouvelle demande — ${escapeHtml(input.domain)}</h2>
      ${row('Nom complet', input.fullName)}
      ${row('Entreprise', input.company)}
      ${row('Email', input.email)}
      ${row('Téléphone', input.phone)}
      ${row('Objet', input.subject)}
      <p style="margin:16px 0 4px"><strong>Message :</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(input.message)}</p>
    </div>
  `;
}

/** Échappe le contenu saisi par les visiteurs avant de l'injecter dans le HTML de l'email. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
