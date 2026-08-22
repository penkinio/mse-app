import { PlaceholderScreen } from '../components/PlaceholderScreen';

export function EngagementScreen() {
  return (
    <PlaceholderScreen
      eyebrow="NOS VALEURS"
      title="Engagement"
      description="Les engagements de MSE CAD Engineering envers ses clients et ses équipes."
      upcoming={[
        'Qualité',
        'Sécurité',
        'Innovation',
        'Développement durable',
        'Satisfaction client',
      ]}
    />
  );
}
