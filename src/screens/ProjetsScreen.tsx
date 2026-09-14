import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, View } from 'react-native';

import { PageHero } from '../components/PageHero';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../constants/projects';
import { colors, spacing } from '../theme';
import { ROUTES, type RootStackParamList } from '../navigation/routes';

export function ProjetsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.root}>
      <PageHero
        eyebrow="RÉALISATIONS"
        title="Projets"
        subtitle="Un aperçu de nos réalisations à travers nos trois pôles d'expertise."
        image={require('../assets/images/projet-bis.jpg')}
      />

      <View style={styles.grid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            domain={project.domain}
            technologies={project.technologies}
            year={project.year}
            image={project.image}
            onPress={() => navigation.navigate(ROUTES.PROJET_DETAIL, { projectId: project.id })}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.white },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
    padding: spacing.xl,
    paddingBottom: spacing.xxxl,
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
  },
});
