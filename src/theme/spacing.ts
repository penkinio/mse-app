/**
 * Échelle d'espacement — grille de 4px.
 * Toujours utiliser ces valeurs plutôt que des nombres "en dur" dans les styles.
 */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const;

export const radii = {
  sm: 4,
  md: 8,
  lg: 16,
  pill: 999,
} as const;

/**
 * Tokens pour l'élément signature du design : de petits repères d'angle
 * façon "viewport CAD" qui encadreront discrètement les images et les
 * cartes projets (composant à venir dans src/components).
 */
export const cadMarker = {
  strokeWidth: 2,
  size: 20,
  offset: -1,
} as const;
