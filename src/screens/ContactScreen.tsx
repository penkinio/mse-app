import { PlaceholderScreen } from '../components/PlaceholderScreen';

export function ContactScreen() {
  return (
    <PlaceholderScreen
      eyebrow="PARLONS-EN"
      title="Contact"
      description="Coordonnées des trois pôles d'expertise et formulaire d'envoi de besoin, avec pièces jointes."
      upcoming={[
        'Coordonnées par expertise (responsable, téléphone, email)',
        'Formulaire complet (nom, entreprise, email, téléphone, besoin)',
        'Upload de plusieurs fichiers avec suppression avant envoi',
        'Envoi vers contact@mse.cm',
      ]}
    />
  );
}
