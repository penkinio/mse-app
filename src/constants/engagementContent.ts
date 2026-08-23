import type { IconName } from '../components/ValueCard';

export type ValueData = {
  icon: IconName;
  title: string;
  description: string;
};

/**
 * Les 5 valeurs listées dans le cahier des charges. Descriptions rédigées
 * pour rester génériques et vraies quel que soit le pôle d'expertise —
 * à affiner si vous avez des formulations "maison" à privilégier.
 */
export const values: ValueData[] = [
  {
    icon: 'ribbon-outline',
    title: 'Qualité',
    description: "Un niveau d'exigence constant, du premier plan à la livraison finale.",
  },
  {
    icon: 'shield-checkmark-outline',
    title: 'Sécurité',
    description: 'Le respect strict des normes sur chaque chantier et chaque installation.',
  },
  {
    icon: 'bulb-outline',
    title: 'Innovation',
    description: 'Des méthodes et des outils actuels au service de solutions techniques pertinentes.',
  },
  {
    icon: 'leaf-outline',
    title: 'Développement durable',
    description: "Des choix responsables, pensés pour limiter l'impact environnemental de nos réalisations.",
  },
  {
    icon: 'happy-outline',
    title: 'Satisfaction client',
    description: "Une relation de confiance construite sur l'écoute et le respect des engagements pris.",
  },
];
