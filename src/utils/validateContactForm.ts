import type { ContactFormData } from '../types/contact';

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validation minimale côté client. Entreprise et téléphone restent
 * optionnels ; les autres champs sont requis.
 */
export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.fullName.trim()) errors.fullName = 'Le nom complet est requis.';

  if (!data.email.trim()) {
    errors.email = "L'email est requis.";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Format d'email invalide.";
  }

  if (!data.domain.trim()) errors.domain = 'Merci de choisir un domaine.';
  if (!data.subject.trim()) errors.subject = "L'objet est requis.";
  if (!data.message.trim()) errors.message = 'Merci de décrire votre besoin.';

  return errors;
}
