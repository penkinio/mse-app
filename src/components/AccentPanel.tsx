import { StyleSheet, Text, View } from 'react-native';
import { colors, typography, spacing, radii } from '../theme';
import { CadCorners } from './CadCorners';

type AccentPanelProps = {
  text: string;
};

/**
 * Bandeau décoratif navy encadré par CadCorners — utilisé comme respiration
 * visuelle là où aucune photo de contenu n'est disponible (ex: Génie
 * Informatique), plutôt qu'une photo de stock générique de clavier/serveur.
 */
export function AccentPanel({ text }: AccentPanelProps) {
  return (
    <View style={styles.wrapper}>
      <CadCorners style={styles.panel}>
        <Text style={styles.text}>{text}</Text>
      </CadCorners>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: spacing.xl,
    maxWidth: 720,
    width: '100%',
    alignSelf: 'center',
  },
  panel: {
    backgroundColor: colors.primary,
    borderRadius: radii.lg,
    padding: spacing.xl,
  },
  text: {
    ...typography.h3,
    color: colors.white,
  },
});
