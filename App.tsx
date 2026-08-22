import { useCallback, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { theme, fontsToLoad } from './src/theme';
import { company } from './src/constants/company';

// Empêche le splash de disparaître tant que les polices ne sont pas prêtes.
SplashScreen.preventAutoHideAsync().catch(() => {
  // Sans effet sur le web si le splash est déjà masqué — sans danger.
});

/**
 * Point d'entrée temporaire de l'application.
 *
 * Ce composant n'est PAS l'écran d'accueil définitif : il sert à vérifier
 * que le thème (couleurs, typographie, espacements) est correctement câblé
 * avant de construire la navigation à l'étape suivante. Il sera remplacé par
 * <AppNavigator /> une fois le menu EXPERTISE / PROJETS / ENGAGEMENT /
 * CONTACT en place.
 */
export default function App() {
  const [fontsLoaded, fontError] = useFonts(fontsToLoad);

  const hideSplashWhenReady = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    hideSplashWhenReady();
  }, [hideSplashWhenReady]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const swatches = [
    { label: 'primary', value: theme.colors.primary },
    { label: 'primaryLight', value: theme.colors.primaryLight },
    { label: 'accent', value: theme.colors.accent },
    { label: 'surface', value: theme.colors.surface },
    { label: 'textPrimary', value: theme.colors.textPrimary },
  ] as const;

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>APERÇU DU THÈME — ÉTAPE 1</Text>
        <Text style={styles.hero}>{company.shortName}</Text>
        <Text style={styles.tagline}>{company.tagline}</Text>

        <View style={styles.swatchRow}>
          {swatches.map((item) => (
            <View key={item.label} style={styles.swatchItem}>
              <View style={[styles.swatch, { backgroundColor: item.value }]} />
              <Text style={styles.swatchLabel}>{item.label}</Text>
              <Text style={styles.swatchValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.h2}>Titre de section — Big Shoulders</Text>
        <Text style={styles.body}>
          Texte courant en IBM Plex Sans. La navigation et les pages
          Expertise, Projets, Engagement et Contact arrivent aux prochaines
          étapes.
        </Text>
        <Text style={styles.mono}>ANNÉE · 2026 · GÉNIE CIVIL</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xxxl,
  },
  eyebrow: {
    ...theme.typography.label,
    color: theme.colors.accent,
    marginBottom: theme.spacing.sm,
  },
  hero: {
    ...theme.typography.hero,
    color: theme.colors.white,
  },
  tagline: {
    ...theme.typography.bodyLarge,
    color: theme.colors.textOnDarkSecondary,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.xl,
  },
  swatchRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
  swatchItem: {
    width: 100,
  },
  swatch: {
    width: 100,
    height: 56,
    borderRadius: theme.radii.md,
    marginBottom: theme.spacing.xs,
  },
  swatchLabel: {
    ...theme.typography.caption,
    color: theme.colors.white,
  },
  swatchValue: {
    ...theme.typography.label,
    color: theme.colors.textOnDarkSecondary,
  },
  h2: {
    ...theme.typography.h2,
    color: theme.colors.white,
    marginBottom: theme.spacing.sm,
  },
  body: {
    ...theme.typography.body,
    color: theme.colors.textOnDarkSecondary,
    marginBottom: theme.spacing.lg,
  },
  mono: {
    ...theme.typography.label,
    color: theme.colors.accent,
  },
});
