/**
 * Contenu des pages Expertise. Séparé des composants pour rester facile à
 * remplacer par un appel API le jour où ce contenu sera géré depuis un
 * back-office (voir "Fonctionnalités futures" du cahier des charges).
 */
export type ExpertiseSectionData = {
  title: string;
  items: string[];
};

export type ExpertiseContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  sections: ExpertiseSectionData[];
};

export const genieCivilContent: ExpertiseContent = {
  eyebrow: 'EXPERTISE',
  title: 'Génie Civil',
  subtitle: "Bâtiments, routes et ouvrages d'art — de l'étude à la réalisation.",
  sections: [
    {
      title: "Domaines d'intervention",
      items: ['Bâtiments résidentiels et tertiaires', 'Routes et voiries', "Ouvrages d'art"],
    },
    {
      title: 'Services proposés',
      items: [
        'Études',
        'Réalisation',
        'Contrôle & suivi de chantier',
        'Décoration intérieure',
        'Aménagement paysager',
      ],
    },
    {
      title: 'Compétences techniques',
      items: [
        'Expertise technique',
        'Dimensionnement et calcul de structures',
        'Suivi qualité et sécurité de chantier',
      ],
    },
  ],
};

export const genieElectriqueContent: ExpertiseContent = {
  eyebrow: 'EXPERTISE',
  title: 'Génie Électrique',
  subtitle: 'Installations électriques, énergies renouvelables et maintenance.',
  sections: [
    {
      title: "Domaines d'intervention",
      items: [
        'Bâtiments résidentiels et industriels',
        'Sites tertiaires et commerciaux',
        'Installations photovoltaïques',
      ],
    },
    {
      title: 'Prestations',
      items: [
        'Études électriques',
        'Installation et mise en service',
        'Énergies renouvelables (solaire)',
        'Maintenance préventive et corrective',
      ],
    },
    {
      title: 'Compétences',
      items: ['Dimensionnement de réseaux électriques', 'Normes de sécurité électrique', 'Efficacité énergétique'],
    },
  ],
};

export const genieInformatiqueContent: ExpertiseContent = {
  eyebrow: 'EXPERTISE',
  title: 'Génie Informatique',
  subtitle: 'Développement, cloud, réseaux et cybersécurité au service de vos projets.',
  sections: [
    {
      title: 'Développement',
      items: ['Développement logiciel', 'Développement Web', 'Développement Mobile'],
    },
    {
      title: 'Cloud & Infrastructure',
      items: ['Intelligence Artificielle', 'Cloud Computing', 'Réseaux'],
    },
    {
      title: 'Sécurité & Support',
      items: ['Cybersécurité', 'Maintenance informatique'],
    },
  ],
};
