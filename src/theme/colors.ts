/**
 * Palette de couleurs — MSE CAD Engineering
 * ------------------------------------------
 * Extraite directement du logo et de la plaquette de l'entreprise :
 * Navy Marine + Bleu Ingénierie viennent du logo, Or Signal reprend
 * l'accent doré du logo et rappelle le jaune des casques/gilets de
 * sécurité de chantier. Les neutres complètent pour les fonds et le texte.
 *
 * Ne pas utiliser de valeurs hexadécimales "en dur" ailleurs dans le code :
 * toujours passer par ces tokens pour garder la cohérence de la marque.
 */
export const colors = {
  // Couleurs de marque
  primary: '#0B2540', // Navy Marine — fonds foncés, header, footer, "CAD" du logo
  primaryDark: '#081B30', // Navy plus sombre — états pressed, dégradés
  primaryLight: '#2D6FDB', // Bleu Ingénierie — liens, CTA, accents, "MSE" du logo
  accent: '#E8A63D', // Or Signal — soulignés, bordures actives, repères (usage parcimonieux)
  accentLight: '#F4C878', // Variante claire de l'or — hover sur fond foncé

  // Neutres
  white: '#FFFFFF',
  surface: '#F3F5F7', // Gris Brume — fonds de sections alternées
  surfaceAlt: '#E9EDF1',
  border: '#E1E5EA',
  textPrimary: '#3A4552', // Gris Ardoise — texte de contenu sur fond clair
  textSecondary: '#6B7684',
  textOnDark: '#FFFFFF',
  textOnDarkSecondary: '#B8C4D1',

  // États (formulaire de contact, retours utilisateur)
  success: '#2E9E6B',
  warning: '#E8A63D',
  error: '#D64545',

  // Superposition sur photos (hero, cartes projets)
  overlay: 'rgba(11, 37, 64, 0.65)',
} as const;
