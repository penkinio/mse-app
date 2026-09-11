import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ExpertisePageTemplate } from '../components/ExpertisePageTemplate';
import { AccentPanel } from '../components/AccentPanel';
import { genieInformatiqueContent } from '../constants/expertiseContent';
import { ROUTES, type RootStackParamList } from '../navigation/routes';
import {ImageGallery} from "../components/ImageGallery";

export function GenieInformatiqueScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ExpertisePageTemplate
      {...genieInformatiqueContent}
      heroImage={require('../assets/images/bannier-genie-informatique.jpg')}
      illustrations={
          <ImageGallery
              images={[
                  require('../assets/images/illustration-informatique.jpg'),
                  require('../assets/images/bannier-genie-informatique.jpg')
              ]}
          />
      }
      onContact={() => navigation.navigate(ROUTES.CONTACT)}
    />
  );
}
