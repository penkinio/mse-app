import { ImageBackground, StyleSheet, Text, View, type ImageSourcePropType } from 'react-native';
import { colors, typography, spacing } from '../theme';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: ImageSourcePropType;
};

/**
 * En-tête de page de contenu : sur une photo (avec voile navy pour la
 * lisibilité) si `image` est fourni, sinon sur un fond navy uni (ex: Génie
 * Informatique, pour lequel aucune photo de contenu n'est encore
 * disponible). Réutilisable pour Expertise, Projets, Engagement, Contact.
 */
export function PageHero({ eyebrow, title, subtitle, image }: PageHeroProps) {
  const content = (
    <View style={styles.overlay}>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );

  if (image) {
    return (
      <ImageBackground source={image} style={styles.hero} resizeMode="cover">
        <View style={styles.scrim} />
        {content}
      </ImageBackground>
    );
  }

  return <View style={[styles.hero, styles.heroSolid]}>{content}</View>;
}

const styles = StyleSheet.create({
  hero: {
    minHeight: 320,
    justifyContent: 'flex-end',
  },
  heroSolid: {
    backgroundColor: colors.primary,
  },
  scrim: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.overlay,
  },
  overlay: {
    padding: spacing.xl,
    paddingBottom: spacing.xxl,
    maxWidth: 720,
  },
  eyebrow: {
    ...typography.label,
    color: colors.accent,
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.hero,
    color: colors.white,
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.bodyLarge,
    color: colors.textOnDarkSecondary,
  },
});
