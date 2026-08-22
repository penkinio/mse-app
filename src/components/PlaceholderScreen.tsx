import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, typography, spacing, radii } from '../theme';

type PlaceholderScreenProps = {
  eyebrow: string;
  title: string;
  description: string;
  upcoming: string[];
};

/**
 * Coquille commune aux écrans placeholder : structure et style cohérents
 * en attendant le contenu détaillé de chaque page (prochaines étapes).
 * Chaque écran liste ici ce qui viendra, directement depuis le cahier
 * des charges, pour que la navigation soit testable dès maintenant.
 */
export function PlaceholderScreen({ eyebrow, title, description, upcoming }: PlaceholderScreenProps) {
  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Contenu à venir sur cette page</Text>
        {upcoming.map((line) => (
          <View key={line} style={styles.bulletRow}>
            <View style={styles.bullet} />
            <Text style={styles.bulletText}>{line}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: spacing.xl,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xxxl,
    maxWidth: 720,
    width: '100%',
    alignSelf: 'center',
  },
  eyebrow: {
    ...typography.label,
    color: colors.primaryLight,
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.h1,
    color: colors.primary,
    marginBottom: spacing.md,
  },
  description: {
    ...typography.bodyLarge,
    color: colors.textPrimary,
    marginBottom: spacing.xl,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    padding: spacing.lg,
  },
  cardTitle: {
    ...typography.h3,
    color: colors.primary,
    marginBottom: spacing.md,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.accent,
    marginTop: 8,
    marginRight: spacing.sm,
  },
  bulletText: {
    ...typography.body,
    color: colors.textPrimary,
    flex: 1,
  },
});
