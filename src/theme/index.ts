import { colors } from './colors';
import { typography, fontFamily } from './typography';
import { spacing, radii, cadMarker } from './spacing';
import { shadows } from './shadows';

/**
 * Thème complet de l'application, prêt à consommer :
 *   import { theme } from '../theme';
 *   ...theme.typography.h1, color: theme.colors.primary
 *
 * Le chargement des polices (useFonts) se fait à part, voir
 * `fontsToLoad` exporté depuis ./typography et utilisé dans App.tsx.
 */
export const theme = {
  colors,
  typography,
  fontFamily,
  spacing,
  radii,
  shadows,
  cadMarker,
} as const;

export { colors, typography, fontFamily, spacing, radii, shadows, cadMarker };
export { fontsToLoad } from './typography';
