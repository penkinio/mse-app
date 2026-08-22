import { useWindowDimensions } from 'react-native';

/** Points de rupture pour le responsive (desktop / tablette / mobile). */
export const breakpoints = {
  mobile: 768,
  tablet: 1024,
} as const;

/**
 * Expose la largeur d'écran courante et des booléens pratiques pour
 * adapter la mise en page (ex: nav horizontale desktop vs menu hamburger).
 */
export function useResponsive() {
  const { width } = useWindowDimensions();

  return {
    width,
    isMobile: width < breakpoints.mobile,
    isTablet: width >= breakpoints.mobile && width < breakpoints.tablet,
    isDesktop: width >= breakpoints.tablet,
  };
}
