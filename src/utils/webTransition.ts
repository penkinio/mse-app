import { Platform } from 'react-native';

/**
 * Ajoute une transition CSS fluide sur le web (survol des liens, ouverture
 * du menu déroulant, etc.). Sans effet sur iOS/Android, qui n'ont pas
 * d'équivalent direct — les changements y restent instantanés.
 */
export function webTransition(properties: string, durationMs = 200) {
  return Platform.select({
    web: {
      transitionProperty: properties,
      transitionDuration: `${durationMs}ms`,
      transitionTimingFunction: 'ease',
    },
    default: {},
  });
}
