import {
  BigShoulders_700Bold,
  BigShoulders_800ExtraBold,
  BigShoulders_900Black,
} from '@expo-google-fonts/big-shoulders';
import {
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_700Bold,
} from '@expo-google-fonts/ibm-plex-sans';
import {
  IBMPlexMono_400Regular,
  IBMPlexMono_500Medium,
  IBMPlexMono_600SemiBold,
} from '@expo-google-fonts/ibm-plex-mono';

/**
 * Typographie — MSE CAD Engineering
 * ------------------------------------------
 * Trois rôles, choisis pour coller au nom de l'entreprise plutôt que
 * par défaut :
 *  - Big Shoulders (titres)   : dessinée d'après les gratte-ciels en acier
 *                               de Chicago — résonne avec le logo en forme
 *                               de skyline et le secteur du BTP.
 *  - IBM Plex Sans (texte)    : héritage technique/ingénierie, très lisible.
 *  - IBM Plex Mono (données)  : évoque les annotations d'un plan CAD, utilisé
 *                               pour les années, technologies, coordonnées.
 */

/** Objet à passer tel quel à useFonts() dans App.tsx */
export const fontsToLoad = {
  'BigShoulders-Bold': BigShoulders_700Bold,
  'BigShoulders-ExtraBold': BigShoulders_800ExtraBold,
  'BigShoulders-Black': BigShoulders_900Black,
  'PlexSans-Regular': IBMPlexSans_400Regular,
  'PlexSans-Medium': IBMPlexSans_500Medium,
  'PlexSans-SemiBold': IBMPlexSans_600SemiBold,
  'PlexSans-Bold': IBMPlexSans_700Bold,
  'PlexMono-Regular': IBMPlexMono_400Regular,
  'PlexMono-Medium': IBMPlexMono_500Medium,
  'PlexMono-SemiBold': IBMPlexMono_600SemiBold,
} as const;

export const fontFamily = {
  displayBlack: 'BigShoulders-Black',
  displayExtraBold: 'BigShoulders-ExtraBold',
  displayBold: 'BigShoulders-Bold',
  body: 'PlexSans-Regular',
  bodyMedium: 'PlexSans-Medium',
  bodySemiBold: 'PlexSans-SemiBold',
  bodyBold: 'PlexSans-Bold',
  mono: 'PlexMono-Regular',
  monoMedium: 'PlexMono-Medium',
  monoSemiBold: 'PlexMono-SemiBold',
} as const;

/**
 * Échelle typographique prête à l'emploi : `...typography.h1` dans un
 * StyleSheet.create(). hero/h1/h2/h3 utilisent Big Shoulders (bien en
 * majuscules avec un léger letterSpacing) ; body* utilise IBM Plex Sans ;
 * label/mono utilise IBM Plex Mono pour les métadonnées techniques.
 */
export const typography = {
  hero: {
    fontFamily: fontFamily.displayBlack,
    fontSize: 48,
    lineHeight: 52,
    letterSpacing: 0.5,
  },
  h1: {
    fontFamily: fontFamily.displayExtraBold,
    fontSize: 34,
    lineHeight: 38,
    letterSpacing: 0.3,
  },
  h2: {
    fontFamily: fontFamily.displayExtraBold,
    fontSize: 26,
    lineHeight: 30,
    letterSpacing: 0.3,
  },
  h3: {
    fontFamily: fontFamily.displayBold,
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: 0.2,
  },
  bodyLarge: {
    fontFamily: fontFamily.body,
    fontSize: 17,
    lineHeight: 26,
  },
  body: {
    fontFamily: fontFamily.body,
    fontSize: 15,
    lineHeight: 22,
  },
  bodyMedium: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 15,
    lineHeight: 22,
  },
  caption: {
    fontFamily: fontFamily.body,
    fontSize: 13,
    lineHeight: 18,
  },
  label: {
    fontFamily: fontFamily.monoMedium,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.6,
  },
  button: {
    fontFamily: fontFamily.bodySemiBold,
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
} as const;
