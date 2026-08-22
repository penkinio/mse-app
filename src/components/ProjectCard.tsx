import { Image, Pressable, StyleSheet, Text, View, type ImageSourcePropType } from 'react-native';
import { colors, typography, spacing, radii, shadows } from '../theme';
import { webTransition } from '../utils/webTransition';

type ProjectCardProps = {
  title: string;
  description: string;
  domain: string;
  technologies: string[];
  year: number;
  image?: ImageSourcePropType;
  onPress: () => void;
};

/**
 * Carte projet : image (ou repli navy si absente), domaine + année,
 * titre, description (2 lignes max), technologies en badges, et un lien
 * "Voir plus" — toute la carte est cliquable vers la page de détail.
 */
export function ProjectCard({ title, description, domain, technologies, year, image, onPress }: ProjectCardProps) {
  return (
    <Pressable onPress={onPress} style={styles.wrapper} accessibilityRole="button">
      {(state) => {
        const hovered = Boolean((state as { hovered?: boolean }).hovered);
        return (
          <View style={[styles.card, shadows.card, (hovered || state.pressed) ? shadows.raised : null]}>
            {image ? (
              <Image source={image} style={styles.image} resizeMode="cover" />
            ) : (
              <View style={[styles.image, styles.imageFallback]}>
                <Text style={styles.imageFallbackText}>{domain}</Text>
              </View>
            )}

            <View style={styles.body}>
              <View style={styles.metaRow}>
                <Text style={styles.domain}>{domain}</Text>
                <Text style={styles.year}>{year}</Text>
              </View>

              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description} numberOfLines={2}>
                {description}
              </Text>

              <View style={styles.techRow}>
                {technologies.map((tech) => (
                  <View key={tech} style={styles.techTag}>
                    <Text style={styles.techTagText}>{tech}</Text>
                  </View>
                ))}
              </View>

              <Text style={styles.link}>Voir plus →</Text>
            </View>
          </View>
        );
      }}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    flexBasis: 320,
    maxWidth: 400,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radii.lg,
    overflow: 'hidden',
    ...webTransition('box-shadow'),
  },
  image: {
    width: '100%',
    height: 180,
  },
  imageFallback: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageFallbackText: {
    ...typography.label,
    color: colors.accent,
  },
  body: {
    padding: spacing.lg,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  domain: {
    ...typography.label,
    color: colors.primaryLight,
  },
  year: {
    ...typography.label,
    color: colors.textSecondary,
  },
  title: {
    ...typography.h3,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  description: {
    ...typography.body,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginBottom: spacing.md,
  },
  techTag: {
    backgroundColor: colors.surface,
    borderRadius: radii.pill,
    paddingVertical: 4,
    paddingHorizontal: spacing.sm,
  },
  techTagText: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  link: {
    ...typography.button,
    color: colors.primaryLight,
  },
});
