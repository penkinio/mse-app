import { Platform } from 'react-native';
import type { ContactFormData, ContactAttachment } from '../types/contact';

/**
 * URL du backend d'envoi. Pas encore configurée : ce projet couvre le
 * front-end. Le service d'envoi d'email (Nodemailer / SendGrid / Resend /
 * SMTP) reste à implémenter côté serveur — voir cahier des charges,
 * section "Envoi du formulaire" — et son URL à fournir via cette variable
 * d'environnement une fois prêt.
 */
const CONTACT_ENDPOINT = process.env.EXPO_PUBLIC_CONTACT_API_URL ?? '';

export type SubmitContactPayload = {
  data: ContactFormData;
  files: ContactAttachment[];
};

export async function postContactForm({ data, files }: SubmitContactPayload): Promise<void> {
  if (!CONTACT_ENDPOINT) {
    console.warn(
      "[contactApi] EXPO_PUBLIC_CONTACT_API_URL n'est pas défini — le service d'envoi n'est pas encore branché."
    );
    throw new Error(
      "L'envoi automatique n'est pas encore actif. Merci de nous écrire directement à contact@mse.cm en attendant."
    );
  }

  const formData = new FormData();
  formData.append('fullName', data.fullName);
  formData.append('company', data.company);
  formData.append('email', data.email);
  formData.append('phone', data.phone);
  formData.append('domain', data.domain);
  formData.append('subject', data.subject);
  formData.append('message', data.message);

  files.forEach((file) => {
    if (Platform.OS === 'web' && file.file) {
      // Web : FormData attend un vrai Blob/File.
      formData.append('attachments', file.file, file.name);
    } else {
      // iOS/Android : React Native accepte {uri, name, type} pour un upload multipart natif.
      formData.append('attachments', {
        uri: file.uri,
        name: file.name,
        type: file.mimeType ?? 'application/octet-stream',
      } as unknown as Blob);
    }
  });

  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Échec de l'envoi (${response.status})`);
  }
}
