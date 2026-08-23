import { postContactForm } from '../api/contactApi';
import type { ContactFormData, ContactAttachment } from '../types/contact';

export type ContactSubmitResult = { success: true } | { success: false; message: string };

/**
 * Point d'entrée unique utilisé par l'écran Contact. Isole l'écran de la
 * mécanique réseau (src/api/contactApi.ts) : si demain on bascule vers un
 * SDK Resend/SendGrid ou une autre route, seuls ces deux fichiers changent,
 * pas l'écran ni le formulaire.
 */
export async function submitContactForm(
  data: ContactFormData,
  files: ContactAttachment[]
): Promise<ContactSubmitResult> {
  try {
    await postContactForm({ data, files });
    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Une erreur est survenue lors de l'envoi.",
    };
  }
}
