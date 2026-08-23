import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, View } from 'react-native';

import { PageHero } from '../components/PageHero';
import { ValueCard } from '../components/ValueCard';
import { CtaButton } from '../components/CtaButton';
import { values } from '../constants/engagementContent';
import { colors, spacing } from '../theme';
import { ROUTES, type RootStackParamList } from '../navigation/routes';

export function EngagementScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.root}>
      <PageHero
        eyebrow="NOS VALEURS"
        title="Engagement"
        subtitle="Les principes qui guident chacune de nos interventions, quel que soit le pôle d'expertise."
        image={require('../assets/images/plans-architecte-bureau.jpg')}
      />

      <View style={styles.grid}>
        {values.map((value) => (
          <ValueCard key={value.title} icon={value.icon} title={value.title} description={value.description} />
        ))}
      </View>

      <View style={styles.ctaWrapper}>
        <CtaButton label="Nous contacter" onPress={() => navigation.navigate(ROUTES.CONTACT)} />
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
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
  },
  ctaWrapper: {
    padding: spacing.xl,
    paddingBottom: spacing.xxxl,
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
});
