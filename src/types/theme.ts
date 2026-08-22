import type { theme } from '../theme';

/**
 * Types dérivés du thème. Le thème lui-même (valeurs) vit dans src/theme ;
 * ce fichier ne contient que les types TypeScript qui en découlent, pour
 * garder src/types comme point d'entrée unique des types partagés.
 */
export type Theme = typeof theme;
export type ColorToken = keyof Theme['colors'];
export type TypographyToken = keyof Theme['typography'];
export type SpacingToken = keyof Theme['spacing'];
export type RadiusToken = keyof Theme['radii'];
