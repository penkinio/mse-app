/**
 * Noms de routes centralisés — évite les chaînes "magiques" dispersées
 * dans le code et sert de source de vérité pour la navigation typée.
 */
export const ROUTES = {
  HOME: 'Home',
  GENIE_CIVIL: 'GenieCivil',
  GENIE_ELECTRIQUE: 'GenieElectrique',
  GENIE_INFORMATIQUE: 'GenieInformatique',
  PROJETS: 'Projets',
  ENGAGEMENT: 'Engagement',
  CONTACT: 'Contact',
} as const;

export type RouteName = (typeof ROUTES)[keyof typeof ROUTES];

/**
 * Aucun écran ne prend de paramètre pour l'instant (ex: un futur
 * ProjetDetail en prendrait un — le type est prêt à être étendu).
 */
export type RootStackParamList = {
  Home: undefined;
  GenieCivil: undefined;
  GenieElectrique: undefined;
  GenieInformatique: undefined;
  Projets: undefined;
  Engagement: undefined;
  Contact: undefined;
};
