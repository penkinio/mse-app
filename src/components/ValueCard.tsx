import type { ComponentProps } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors, typography, spacing, radii, shadows } from '../theme';

export type IconName = ComponentProps<typeof Ionicons>['name'];

type ValueCardProps = {
  icon: IconName;
  title: string;
  description: string;
};

/**
 * Carte "valeur" : badge navy/or avec icône, titre, description.
 * Utilisée sur la page Engagement, une par valeur de l'entreprise.
 */
export function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <View style={[styles.card, shadows.card]}>
      <View style={styles.iconWrapper}>
        <Ionicons name={icon} size={26} color={colors.accent} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    flexBasis: 260,
    maxWidth: 320,
    backgroundColor: colors.white,
    borderRadius: radii.lg,
    padding: spacing.lg,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: radii.md,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  title: {
    ...typography.h3,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  description: {
    ...typography.body,
    color: colors.textPrimary,
  },
});
