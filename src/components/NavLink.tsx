import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography, spacing } from '../theme';
import { webTransition } from '../utils/webTransition';

type NavLinkProps = {
  label: string;
  active?: boolean;
  onPress: () => void;
};

/**
 * Lien de navigation unique pour la barre desktop : soulignement doré animé
 * au survol/actif, texte qui s'éclaircit. La transition CSS est web-only
 * (voir webTransition) ; sur natif, le changement d'état reste instantané.
 */
export function NavLink({ label, active = false, onPress }: NavLinkProps) {
  return (
    <Pressable onPress={onPress} style={styles.wrapper} accessibilityRole="link">
      {(state) => {
        // `hovered` n'existe que sur react-native-web ; lu via un cast
        // ciblé pour ne pas casser le typage de `state.pressed`.
        const hovered = Boolean((state as { hovered?: boolean }).hovered);
        const highlighted = active || hovered || state.pressed;
        return (
          <>
            <Text style={[styles.label, { color: highlighted ? colors.white : colors.textOnDarkSecondary }]}>
              {label}
            </Text>
            <View style={[styles.underline, { opacity: active || hovered ? 1 : 0 }]} />
          </>
        );
      }}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  label: {
    ...typography.bodyMedium,
    letterSpacing: 0.4,
    ...webTransition('color'),
  },
  underline: {
    height: 2,
    marginTop: 4,
    borderRadius: 1,
    backgroundColor: colors.accent,
    ...webTransition('opacity'),
  },
});
