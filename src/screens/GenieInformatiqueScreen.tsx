import { PlaceholderScreen } from '../components/PlaceholderScreen';

export function GenieInformatiqueScreen() {
  return (
    <PlaceholderScreen
      eyebrow="EXPERTISE"
      title="Génie Informatique"
      description="Développement logiciel, web, mobile, intelligence artificielle, cloud, réseaux et cybersécurité."
      upcoming={[
        'Développement logiciel',
        'Développement Web & Mobile',
        'Intelligence Artificielle',
        'Cloud Computing',
        'Réseaux & Cybersécurité',
        'Maintenance informatique',
      ]}
    />
  );
}
