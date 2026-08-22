import { Platform } from 'react-native';

/**
 * Ombres portées pour les cartes et éléments surélevés.
 * Sur le web, on utilise `boxShadow` (chaîne CSS) ; sur iOS/Android, les
 * propriétés `shadow*` + `elevation` (Android) offrent un rendu équivalent.
 */
export const shadows = {
  card: Platform.select({
    web: { boxShadow: '0px 4px 16px rgba(11, 37, 64, 0.08)' },
    default: {
      shadowColor: '#0B2540',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 16,
      elevation: 3,
    },
  }),
  raised: Platform.select({
    web: { boxShadow: '0px 8px 24px rgba(11, 37, 64, 0.14)' },
    default: {
      shadowColor: '#0B2540',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.14,
      shadowRadius: 24,
      elevation: 6,
    },
  }),
} as const;
