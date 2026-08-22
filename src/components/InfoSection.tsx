import { StyleSheet, Text, View } from 'react-native';
import { colors, typography, spacing } from '../theme';

type InfoSectionProps = {
  title: string;
  items: string[];
  tone?: 'light' | 'surface';
};

/**
 * Section titrée avec une liste à puces. `tone` alterne le fond
 * (blanc / gris brume) pour rythmer visuellement une page longue.
 */
export function InfoSection({ title, items, tone = 'light' }: InfoSectionProps) {
  return (
    <View style={[styles.section, tone === 'surface' && styles.surfaceTone]}>
      <View style={styles.inner}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.list}>
          {items.map((item) => (
            <View key={item} style={styles.row}>
              <View style={styles.bullet} />
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingVertical: spacing.xxl,
    paddingHorizontal: spacing.xl,
    backgroundColor: colors.white,
  },
  surfaceTone: {
    backgroundColor: colors.surface,
  },
  inner: {
    maxWidth: 720,
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    ...typography.h2,
    color: colors.primary,
    marginBottom: spacing.lg,
  },
  list: {
    gap: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.accent,
    marginTop: 9,
    marginRight: spacing.sm,
  },
  itemText: {
    ...typography.bodyLarge,
    color: colors.textPrimary,
    flex: 1,
  },
});
