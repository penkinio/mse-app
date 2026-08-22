import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View, type ImageSourcePropType } from 'react-native';
import { colors, spacing } from '../theme';
import { PageHero } from './PageHero';
import { InfoSection } from './InfoSection';
import { CtaButton } from './CtaButton';

type ExpertiseSectionData = { title: string; items: string[] };

type ExpertisePageTemplateProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage?: ImageSourcePropType;
  sections: ExpertiseSectionData[];
  /** Photo(s) via <ImageGallery /> ou bandeau décoratif via <AccentPanel /> selon le pôle. */
  illustrations: ReactNode;
  onContact: () => void;
  ctaLabel?: string;
};

/**
 * Gabarit commun aux trois pages Expertise : héro, sections d'information
 * (fonds alternés), illustrations, et appel à l'action final vers le
 * formulaire de contact. Les trois écrans Génie Civil / Électrique /
 * Informatique ne sont que des appels à ce gabarit avec leur contenu propre.
 */
export function ExpertisePageTemplate({
  eyebrow,
  title,
  subtitle,
  heroImage,
  sections,
  illustrations,
  onContact,
  ctaLabel = 'Nous contacter',
}: ExpertisePageTemplateProps) {
  return (
    <ScrollView style={styles.root}>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} image={heroImage} />

      {sections.map((section, index) => (
        <InfoSection
          key={section.title}
          title={section.title}
          items={section.items}
          tone={index % 2 === 1 ? 'surface' : 'light'}
        />
      ))}

      {illustrations}

      <View style={styles.ctaWrapper}>
        <CtaButton label={ctaLabel} onPress={onContact} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ctaWrapper: {
    padding: spacing.xl,
    paddingBottom: spacing.xxxl,
    maxWidth: 720,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
});
