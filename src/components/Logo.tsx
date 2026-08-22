import { StyleSheet, Text, View } from 'react-native';
import { colors, fontFamily } from '../theme';
import { CadCorners } from './CadCorners';

/**
 * Logotype temporaire en typographie, en attendant la version détourée
 * (fond transparent) du vrai logo — voir src/assets/images/README.md.
 * Encadré par CadCorners pour ancrer l'élément signature dès l'en-tête.
 */
export function Logo() {
  return (
    <CadCorners style={styles.wrapper}>
      <View style={styles.textRow}>
        <Text style={styles.mse}>MSE</Text>
        <Text style={styles.cad}> CAD</Text>
      </View>
    </CadCorners>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  mse: {
    fontFamily: fontFamily.displayBlack,
    fontSize: 22,
    letterSpacing: 0.5,
    color: colors.white,
  },
  cad: {
    fontFamily: fontFamily.displayBold,
    fontSize: 22,
    letterSpacing: 0.5,
    color: colors.accent,
  },
});
