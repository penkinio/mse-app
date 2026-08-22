import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ExpertisePageTemplate } from '../components/ExpertisePageTemplate';
import { ImageGallery } from '../components/ImageGallery';
import { genieElectriqueContent } from '../constants/expertiseContent';
import { ROUTES, type RootStackParamList } from '../navigation/routes';

export function GenieElectriqueScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ExpertisePageTemplate
      {...genieElectriqueContent}
      heroImage={require('../assets/images/panneaux-solaires-aerien.jpg')}
      illustrations={<ImageGallery images={[require('../assets/images/casques-plans-skyline.jpg')]} />}
      onContact={() => navigation.navigate(ROUTES.CONTACT)}
    />
  );
}
