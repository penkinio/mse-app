export type ContactFormData = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  domain: string;
  subject: string;
  message: string;
};

export type ContactAttachment = {
  id: string;
  name: string;
  size: number;
  mimeType?: string;
  uri: string;
  /** Présent uniquement sur le web (voir expo-document-picker) — utilisé pour un envoi FormData correct côté navigateur. */
  file?: File;
};
