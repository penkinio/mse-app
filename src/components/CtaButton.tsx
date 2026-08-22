import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography, spacing, radii } from '../theme';
import { webTransition } from '../utils/webTransition';

type CtaButtonProps = {
  label: string;
  onPress: () => void;
};

/** Bouton d'action principal ("Nous contacter", etc.), réutilisable. */
export function CtaButton({ label, onPress }: CtaButtonProps) {
  return (
    <Pressable onPress={onPress} accessibilityRole="button">
      {(state) => {
        const hovered = Boolean((state as { hovered?: boolean }).hovered);
        return (
          <View style={[styles.button, (hovered || state.pressed) && styles.buttonHovered]}>
            <Text style={styles.label}>{label}</Text>
          </View>
        );
      }}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    backgroundColor: colors.accent,
    borderRadius: radii.pill,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    ...webTransition('background-color'),
  },
  buttonHovered: {
    backgroundColor: colors.accentLight,
  },
  label: {
    ...typography.button,
    color: colors.primary,
    letterSpacing: 0.6,
  },
});
