import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ExpertisePageTemplate } from '../components/ExpertisePageTemplate';
import { ImageGallery } from '../components/ImageGallery';
import { genieCivilContent } from '../constants/expertiseContent';
import { ROUTES, type RootStackParamList } from '../navigation/routes';

export function GenieCivilScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ExpertisePageTemplate
      {...genieCivilContent}
      heroImage={require('../assets/images/chantier-coucher-soleil.jpg')}
      illustrations={
        <ImageGallery
          images={[
            require('../assets/images/construction-residentiel-local.jpg'),
            require('../assets/images/plans-architecte-bureau.jpg'),
            require('../assets/images/casques-plans-skyline.jpg'),
          ]}
        />
      }
      onContact={() => navigation.navigate(ROUTES.CONTACT)}
    />
  );
}
