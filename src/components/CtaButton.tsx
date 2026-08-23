import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography, spacing, radii } from '../theme';
import { webTransition } from '../utils/webTransition';

type CtaButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

/** Bouton d'action principal ("Nous contacter", etc.), réutilisable. */
export function CtaButton({ label, onPress, disabled = false }: CtaButtonProps) {
  return (
    <Pressable onPress={disabled ? undefined : onPress} accessibilityRole="button" accessibilityState={{ disabled }}>
      {(state) => {
        const hovered = Boolean((state as { hovered?: boolean }).hovered);
        return (
          <View
            style={[
              styles.button,
              !disabled && (hovered || state.pressed) ? styles.buttonHovered : null,
              disabled ? styles.buttonDisabled : null,
            ]}
          >
            <Text style={[styles.label, disabled ? styles.labelDisabled : null]}>{label}</Text>
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
  buttonDisabled: {
    backgroundColor: colors.border,
  },
  label: {
    ...typography.button,
    color: colors.primary,
    letterSpacing: 0.6,
  },
  labelDisabled: {
    color: colors.textSecondary,
  },
});
