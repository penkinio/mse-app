import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ROUTES, type RootStackParamList } from './routes';
import { linking } from './linking';
import { Header } from '../components/Header';

import { HomeScreen } from '../screens/HomeScreen';
import { GenieCivilScreen } from '../screens/GenieCivilScreen';
import { GenieElectriqueScreen } from '../screens/GenieElectriqueScreen';
import { GenieInformatiqueScreen } from '../screens/GenieInformatiqueScreen';
import { ProjetsScreen } from '../screens/ProjetsScreen';
import { ProjetDetailScreen } from '../screens/ProjetDetailScreen';
import { EngagementScreen } from '../screens/EngagementScreen';
import { ContactScreen } from '../screens/ContactScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Racine de navigation de l'application. Le header personnalisé est
 * configuré une seule fois via `screenOptions.header` : il reste visible
 * et cohérent sur tous les écrans sans être dupliqué dans chacun d'eux.
 */
export function AppNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer linking={linking}>
        <Stack.Navigator
          screenOptions={{
            header: (props) => <Header {...props} />,
            animation: 'fade',
          }}
        >
          <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
          <Stack.Screen name={ROUTES.GENIE_CIVIL} component={GenieCivilScreen} />
          <Stack.Screen name={ROUTES.GENIE_ELECTRIQUE} component={GenieElectriqueScreen} />
          <Stack.Screen name={ROUTES.GENIE_INFORMATIQUE} component={GenieInformatiqueScreen} />
          <Stack.Screen name={ROUTES.PROJETS} component={ProjetsScreen} />
          <Stack.Screen name={ROUTES.PROJET_DETAIL} component={ProjetDetailScreen} />
          <Stack.Screen name={ROUTES.ENGAGEMENT} component={EngagementScreen} />
          <Stack.Screen name={ROUTES.CONTACT} component={ContactScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
