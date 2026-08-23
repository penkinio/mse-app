/** Taille maximale par fichier — configurable ici, un seul endroit à changer. */
export const MAX_FILE_SIZE_MB = 10;
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
  'application/zip',
  'application/x-zip-compressed',
  'image/*',
];

export const ACCEPTED_FILE_TYPES_LABEL = 'PDF, DOCX, XLSX, ZIP, Images';

export const domainOptions = ['Génie Civil', 'Génie Électrique', 'Génie Informatique', 'Autre'] as const;
export type DomainOption = (typeof domainOptions)[number];
