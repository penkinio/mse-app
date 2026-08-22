import type { LinkingOptions } from '@react-navigation/native';
import { ROUTES, type RootStackParamList } from './routes';

/**
 * Fait correspondre chaque écran à une URL propre sur le web
 * (ex: /expertise/genie-civil), pour des liens partageables et un
 * bouton précédent/suivant du navigateur qui fonctionne correctement.
 *
 * `prefixes` reste vide pour l'instant (utile pour le deep-linking natif
 * iOS/Android — à renseigner via expo-linking quand ces builds seront
 * mis en place).
 */
export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [],
  config: {
    screens: {
      [ROUTES.HOME]: '',
      [ROUTES.GENIE_CIVIL]: 'expertise/genie-civil',
      [ROUTES.GENIE_ELECTRIQUE]: 'expertise/genie-electrique',
      [ROUTES.GENIE_INFORMATIQUE]: 'expertise/genie-informatique',
      [ROUTES.PROJETS]: 'projets',
      [ROUTES.PROJET_DETAIL]: 'projets/:projectId',
      [ROUTES.ENGAGEMENT]: 'engagement',
      [ROUTES.CONTACT]: 'contact',
    },
  },
};
