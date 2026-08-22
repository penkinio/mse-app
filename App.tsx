import { useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { fontsToLoad } from './src/theme';
import { AppNavigator } from './src/navigation/AppNavigator';

// Empêche le splash de disparaître tant que les polices ne sont pas prêtes.
SplashScreen.preventAutoHideAsync().catch(() => {
  // Sans effet sur le web si le splash est déjà masqué — sans danger.
});

/**
 * Point d'entrée de l'application : charge les polices de la marque puis
 * monte la navigation (EXPERTISE / PROJETS / ENGAGEMENT / CONTACT).
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

  return (
    <>
      <StatusBar style="light" />
      <AppNavigator />
    </>
  );
}
