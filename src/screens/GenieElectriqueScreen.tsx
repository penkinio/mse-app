import { PlaceholderScreen } from '../components/PlaceholderScreen';

export function GenieElectriqueScreen() {
  return (
    <PlaceholderScreen
      eyebrow="EXPERTISE"
      title="Génie Électrique"
      description="Installations électriques, énergies renouvelables et maintenance."
      upcoming={[
        'Prestations',
        'Compétences',
        "Domaines d'intervention",
        'Images de réalisations',
        'Bouton « Nous contacter »',
      ]}
    />
  );
}
