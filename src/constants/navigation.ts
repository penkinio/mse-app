import { ROUTES, type SimpleRouteName } from '../navigation/routes';

export type NavItem = {
  label: string;
  route: SimpleRouteName;
};

export const HEADER_HEIGHT = 72;

/**
 * Éléments de la barre de navigation principale, affichés après EXPERTISE
 * (menu déroulant géré séparément — voir ExpertiseDropdown et
 * `expertiseItems` ci-dessous).
 */
export const primaryNavItems: NavItem[] = [
  { label: 'PROJETS', route: ROUTES.PROJETS },
  { label: 'ENGAGEMENT', route: ROUTES.ENGAGEMENT },
  { label: 'CONTACT', route: ROUTES.CONTACT },
];

export const expertiseItems: NavItem[] = [
  { label: 'Génie Civil', route: ROUTES.GENIE_CIVIL },
  { label: 'Génie Électrique', route: ROUTES.GENIE_ELECTRIQUE },
  { label: 'Génie Informatique', route: ROUTES.GENIE_INFORMATIQUE },
];

export const expertiseRoutes: SimpleRouteName[] = expertiseItems.map((item) => item.route);
