import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { colors, typography, spacing, radii } from '../theme';
import { projects } from '../constants/projects';
import { CtaButton } from '../components/CtaButton';
import { CadCorners } from '../components/CadCorners';
import { ROUTES, type RootStackParamList } from '../navigation/routes';

type Props = NativeStackScreenProps<RootStackParamList, 'ProjetDetail'>;

/**
 * Détail d'un projet, atteint depuis une carte de la page Projets.
 * `route.params.projectId` vient de l'URL (/projets/:projectId), ce qui
 * rend chaque projet directement partageable par lien.
 */
export function ProjetDetailScreen({ route, navigation }: Props) {
  const project = projects.find((p) => p.id === route.params.projectId);

  if (!project) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Projet introuvable.</Text>
        <CtaButton label="Retour aux projets" onPress={() => navigation.navigate(ROUTES.PROJETS)} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <Pressable onPress={() => navigation.navigate(ROUTES.PROJETS)} style={styles.backLink}>
        <Text style={styles.backLinkText}>← Retour aux projets</Text>
      </Pressable>

      {project.image && (
        <CadCorners style={styles.imageWrapper}>
          <Image source={project.image} style={styles.image} resizeMode="cover" />
        </CadCorners>
      )}

      <View style={styles.metaRow}>
        <Text style={styles.domain}>{project.domain}</Text>
        <Text style={styles.year}>{project.year}</Text>
      </View>
      <Text style={styles.title}>{project.title}</Text>
      {project.location && <Text style={styles.location}>{project.location}</Text>}
      <Text style={styles.description}>{project.description}</Text>

      <Text style={styles.techLabel}>Technologies utilisées</Text>
      <View style={styles.techRow}>
        {project.technologies.map((tech) => (
          <View key={tech} style={styles.techTag}>
            <Text style={styles.techTagText}>{tech}</Text>
          </View>
        ))}
      </View>

      <View style={styles.ctaWrapper}>
        <CtaButton label="Discuter d'un projet similaire" onPress={() => navigation.navigate(ROUTES.CONTACT)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.white },
  content: {
    padding: spacing.xl,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xxxl,
    maxWidth: 720,
    width: '100%',
    alignSelf: 'center',
  },
  backLink: { marginBottom: spacing.lg },
  backLinkText: { ...typography.bodyMedium, color: colors.primaryLight },
  imageWrapper: { marginBottom: spacing.xl },
  image: { width: '100%', height: 280, borderRadius: 4 },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.sm },
  domain: { ...typography.label, color: colors.primaryLight },
  year: { ...typography.label, color: colors.textSecondary },
  title: { ...typography.h1, color: colors.primary, marginBottom: spacing.xs },
  location: { ...typography.bodyMedium, color: colors.textSecondary, marginBottom: spacing.lg },
  description: { ...typography.bodyLarge, color: colors.textPrimary, marginBottom: spacing.xl },
  techLabel: { ...typography.label, color: colors.primary, marginBottom: spacing.sm },
  techRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginBottom: spacing.xxl },
  techTag: {
    backgroundColor: colors.surface,
    borderRadius: radii.pill,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  techTagText: { ...typography.body, color: colors.textPrimary },
  ctaWrapper: { alignItems: 'flex-start' },
  notFound: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing.xl, gap: spacing.lg },
  notFoundText: { ...typography.h3, color: colors.textPrimary },
});
