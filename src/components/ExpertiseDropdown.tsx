import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography, spacing, radii, shadows } from '../theme';
import { expertiseItems, HEADER_HEIGHT } from '../constants/navigation';
import type { SimpleRouteName } from '../navigation/routes';
import { webTransition } from '../utils/webTransition';

type ExpertiseDropdownProps = {
  active: boolean;
  onNavigate: (route: SimpleRouteName) => void;
};

/**
 * Menu déroulant "EXPERTISE" (desktop/tablette). S'ouvre et se ferme au
 * clic — volontairement pas au survol seul, pour rester utilisable au
 * tactile sur tablette. Un fond semi-transparent capte les clics extérieurs
 * pour fermer le menu.
 */
export function ExpertiseDropdown({ active, onNavigate }: ExpertiseDropdownProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (route: SimpleRouteName) => {
    setOpen(false);
    onNavigate(route);
  };

  return (
    <View>
      <Pressable
        onPress={() => setOpen((o) => !o)}
        style={styles.trigger}
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
      >
        {(state) => {
          // `hovered` n'existe que sur react-native-web ; absent des types
          // RN partagés, on le lit via un cast ciblé plutôt que d'annoter
          // tout le callback (ce qui casserait le typage de `pressed`).
          const hovered = Boolean((state as { hovered?: boolean }).hovered);
          const highlighted = active || open || hovered || state.pressed;
          return (
            <>
              <Text style={[styles.triggerLabel, { color: highlighted ? colors.white : colors.textOnDarkSecondary }]}>
                EXPERTISE
              </Text>
              <Text style={styles.chevron}>{open ? '▴' : '▾'}</Text>
              <View style={[styles.underline, { opacity: active || open || hovered ? 1 : 0 }]} />
            </>
          );
        }}
      </Pressable>

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <View style={styles.modalRoot}>
          <Pressable style={styles.backdrop} onPress={() => setOpen(false)} />
          <View style={[styles.panel, shadows.raised]}>
            {expertiseItems.map((item) => (
              <Pressable
                key={item.route}
                onPress={() => handleSelect(item.route)}
                style={(state) => [
                  styles.panelItem,
                  (state as { hovered?: boolean }).hovered ? styles.panelItemHovered : null,
                ]}
              >
                <Text style={styles.panelItemText}>{item.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  triggerLabel: {
    ...typography.bodyMedium,
    letterSpacing: 0.4,
    ...webTransition('color'),
  },
  chevron: {
    color: colors.accent,
    marginLeft: 4,
    fontSize: 12,
  },
  underline: {
    position: 'absolute',
    left: spacing.md,
    right: spacing.md,
    bottom: 4,
    height: 2,
    borderRadius: 1,
    backgroundColor: colors.accent,
    ...webTransition('opacity'),
  },
  modalRoot: {
    flex: 1,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(11, 37, 64, 0.25)',
  },
  panel: {
    position: 'absolute',
    top: HEADER_HEIGHT + spacing.sm,
    left: spacing.xl,
    minWidth: 240,
    backgroundColor: colors.white,
    borderRadius: radii.md,
    paddingVertical: spacing.sm,
  },
  panelItem: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  panelItemHovered: {
    backgroundColor: colors.surface,
  },
  panelItemText: {
    ...typography.bodyMedium,
    color: colors.textPrimary,
  },
});
