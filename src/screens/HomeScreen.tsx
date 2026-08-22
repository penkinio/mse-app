import { PlaceholderScreen } from '../components/PlaceholderScreen';

export function HomeScreen() {
  return (
    <PlaceholderScreen
      eyebrow="MSE CAD ENGINEERING"
      title="Bienvenue"
      description="La page d'accueil détaillée (accroche, chiffres clés, réalisations mises en avant) sera construite quand le contenu de chaque section sera prêt. La navigation ci-dessus est déjà pleinement fonctionnelle."
      upcoming={[
        "Section héro avec accroche et visuel de chantier",
        "Aperçu des trois pôles d'expertise",
        'Projets phares et chiffres clés',
        'Appel à l\u2019action vers le formulaire de contact',
      ]}
    />
  );
}
