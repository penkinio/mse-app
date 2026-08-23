export type ExpertiseContact = {
  domain: string;
  responsable: string;
  telephone: string;
  email: string;
};

/**
 * ⚠️ DONNÉES D'EXEMPLE — à remplacer par les vraies coordonnées de chaque
 * pôle (nom du responsable, ligne directe, email dédié).
 */
export const expertiseContacts: ExpertiseContact[] = [
  { domain: 'Génie Civil', responsable: 'À compléter', telephone: '+237 6XX XX XX XX', email: 'civil@mse.cm' },
  { domain: 'Génie Électrique', responsable: 'À compléter', telephone: '+237 6XX XX XX XX', email: 'electrique@mse.cm' },
  { domain: 'Génie Informatique', responsable: 'À compléter', telephone: '+237 6XX XX XX XX', email: 'informatique@mse.cm' },
];
