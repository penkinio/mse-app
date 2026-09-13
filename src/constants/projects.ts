import type { Project } from '../types/project';

/**
 * ⚠️ DONNÉES D'EXEMPLE — à remplacer par les vrais projets de MSE CAD
 * Engineering. Sert à démontrer la grille de cartes et la page de détail ;
 * prévu pour être chargé dynamiquement plus tard (API / back-office), voir
 * "Fonctionnalités futures" dans le cahier des charges.
 */
export const projects: Project[] = [
  {
    id: 'residence-les-palmiers',
    title: 'Résidence Les Palmiers',
    description: "Immeuble résidentiel R+4 avec suivi complet, de l'étude de sol à la livraison.",
    domain: 'Génie Civil',
    technologies: ['Béton armé', 'AutoCAD', 'Suivi de chantier'],
    year: 2025,
    location: 'Yaoundé',
    image: require('../assets/images/construction-residentiel-local.jpg'),
  },
  {
    id: 'centrale-solaire-douala-nord',
    title: 'Centrale solaire Douala Nord',
    description: 'Installation photovoltaïque raccordée au réseau pour un site industriel.',
    domain: 'Génie Électrique',
    technologies: ['Photovoltaïque', 'Dimensionnement réseau', 'Mise en service'],
    year: 2024,
    location: 'Douala',
    image: require('../assets/images/panneaux-solaires-aerien.jpg'),
  },
  {
    id: 'rehabilitation-voirie-urbaine',
    title: 'Réhabilitation de voirie urbaine',
    description: "Étude et réalisation d'un tronçon routier avec ouvrages de drainage.",
    domain: 'Génie Civil',
    technologies: ['Terrassement', 'Ouvrages de drainage', 'Contrôle qualité'],
    year: 2023,
    location: 'Douala',
    image: require('../assets/images/chantier-coucher-soleil.jpg'),
  },
  {
    id: 'plateforme-gestion-chantier',
    title: 'Plateforme de gestion de chantier',
    description: "Application web interne de suivi d'avancement et de reporting pour les équipes terrain.",
    domain: 'Génie Informatique',
    technologies: ['React Native', 'Node.js', 'PostgreSQL'],
    year: 2025,
    location: 'Yaoundé',
    image: require('../assets/images/gestion-chantier-bis.jpg'),
  },
  {
    id: 'installation-electrique-complexe-commercial',
    title: 'Installation électrique — complexe commercial',
    description: "Conception et installation électrique complète d'un centre commercial.",
    domain: 'Génie Électrique',
    technologies: ['Tableaux électriques', 'Éclairage', 'Normes NF C 15-100'],
    year: 2023,
    location: 'Yaoundé',
    image: require('../assets/images/casques-plans-skyline.jpg'),
  },
  {
    id: 'systeme-videosurveillance-intelligent',
    title: 'Système de vidéosurveillance intelligent',
    description: "Déploiement réseau et solution de détection pour la sécurisation d'un site sensible.",
    domain: 'Génie Informatique',
    technologies: ['Réseaux', 'Cybersécurité', 'IA embarquée'],
    year: 2024,
    location: 'Douala',
    image: require('../assets/images/systeme-video-surveillance.jpeg'),
  },
];
