import { PlaceholderScreen } from '../components/PlaceholderScreen';

export function ProjetsScreen() {
  return (
    <PlaceholderScreen
      eyebrow="RÉALISATIONS"
      title="Projets"
      description="Les projets réalisés seront affichés ici sous forme de cartes, ajoutées dynamiquement."
      upcoming={[
        'Carte par projet : image, titre, description',
        'Domaine et technologies utilisées',
        'Année de réalisation',
        'Bouton « Voir plus »',
      ]}
    />
  );
}
