/**
 * Informations générales de l'entreprise, utilisées à travers l'application
 * (footer, page Contact, métadonnées de l'app, etc.). Contenu figé pour
 * l'instant — pourra être déplacé en configuration/CMS plus tard.
 */
export const company = {
  name: 'MSE CAD Engineering',
  shortName: 'MSE CAD',
  tagline: "Ensemble, construisons l'avenir",
  contactEmail: 'contact@mse.cm',
  domain: 'mse.cm',
  cities: ['Yaoundé', 'Douala'] as const,
  domains: ['Génie Civil', 'Génie Électrique', 'Génie Informatique'] as const,
} as const;
