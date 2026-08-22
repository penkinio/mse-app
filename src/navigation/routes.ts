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
  PROJET_DETAIL: 'ProjetDetail',
  ENGAGEMENT: 'Engagement',
  CONTACT: 'Contact',
} as const;

export type RouteName = (typeof ROUTES)[keyof typeof ROUTES];

/**
 * Routes sans paramètre — celles que la navigation principale (Header,
 * menu mobile, dropdown Expertise) peut ouvrir directement par leur nom.
 * `ProjetDetail` en est exclu car il exige un `projectId`.
 */
export type SimpleRouteName = Exclude<RouteName, 'ProjetDetail'>;

/**
 * Aucun écran ne prend de paramètre pour l'instant, à l'exception de
 * ProjetDetail (identifiant du projet affiché).
 */
export type RootStackParamList = {
  Home: undefined;
  GenieCivil: undefined;
  GenieElectrique: undefined;
  GenieInformatique: undefined;
  Projets: undefined;
  ProjetDetail: { projectId: string };
  Engagement: undefined;
  Contact: undefined;
};
