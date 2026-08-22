import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, typography, spacing, radii } from '../theme';
import { primaryNavItems, expertiseItems } from '../constants/navigation';
import type { SimpleRouteName } from '../navigation/routes';

type MobileMenuProps = {
  visible: boolean;
  onClose: () => void;
  onNavigate: (route: SimpleRouteName) => void;
};

/**
 * Menu mobile (tablette portrait / téléphone) : feuille qui remonte du bas
 * de l'écran. EXPERTISE devient une section dépliable (pas de survol au
 * tactile), les autres items sont des liens directs.
 */
export function MobileMenu({ visible, onClose, onNavigate }: MobileMenuProps) {
  const [expertiseOpen, setExpertiseOpen] = useState(false);

  const handleSelect = (route: SimpleRouteName) => {
    onClose();
    onNavigate(route);
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.root}>
        <Pressable style={styles.backdrop} onPress={onClose} />
        <View style={styles.panel}>
          <ScrollView contentContainerStyle={styles.panelContent}>
            <Pressable
              onPress={onClose}
              style={styles.closeButton}
              accessibilityRole="button"
              accessibilityLabel="Fermer le menu"
            >
              <Text style={styles.closeLabel}>✕</Text>
            </Pressable>

            <Pressable style={styles.expertiseTrigger} onPress={() => setExpertiseOpen((o) => !o)}>
              <Text style={styles.itemLabel}>EXPERTISE</Text>
              <Text style={styles.chevron}>{expertiseOpen ? '▴' : '▾'}</Text>
            </Pressable>
            {expertiseOpen &&
              expertiseItems.map((item) => (
                <Pressable key={item.route} onPress={() => handleSelect(item.route)} style={styles.subItem}>
                  <Text style={styles.subItemLabel}>{item.label}</Text>
                </Pressable>
              ))}

            {primaryNavItems.map((item) => (
              <Pressable key={item.route} onPress={() => handleSelect(item.route)} style={styles.item}>
                <Text style={styles.itemLabel}>{item.label}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(11, 37, 64, 0.5)',
  },
  panel: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    maxHeight: '80%',
    backgroundColor: colors.primary,
    borderTopLeftRadius: radii.lg,
    borderTopRightRadius: radii.lg,
  },
  panelContent: {
    padding: spacing.xl,
    paddingTop: spacing.lg,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: spacing.sm,
    marginBottom: spacing.md,
  },
  closeLabel: {
    color: colors.white,
    fontSize: 20,
  },
  item: {
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  expertiseTrigger: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  itemLabel: {
    ...typography.h3,
    color: colors.white,
  },
  chevron: {
    color: colors.accent,
    fontSize: 18,
  },
  subItem: {
    paddingVertical: spacing.sm,
    paddingLeft: spacing.md,
  },
  subItemLabel: {
    ...typography.bodyMedium,
    color: colors.textOnDarkSecondary,
  },
});
