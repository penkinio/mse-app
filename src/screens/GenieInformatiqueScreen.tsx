import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ExpertisePageTemplate } from '../components/ExpertisePageTemplate';
import { AccentPanel } from '../components/AccentPanel';
import { genieInformatiqueContent } from '../constants/expertiseContent';
import { ROUTES, type RootStackParamList } from '../navigation/routes';

export function GenieInformatiqueScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ExpertisePageTemplate
      {...genieInformatiqueContent}
      illustrations={
        <AccentPanel text="Une équipe qui combine développement logiciel, cloud et cybersécurité pour faire évoluer vos systèmes d'information en toute confiance." />
      }
      onContact={() => navigation.navigate(ROUTES.CONTACT)}
    />
  );
}
