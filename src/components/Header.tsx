import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, shadows } from '../theme';
import { spacing } from '../theme/spacing';
import { primaryNavItems, expertiseRoutes, HEADER_HEIGHT } from '../constants/navigation';
import { ROUTES, type RouteName } from '../navigation/routes';
import { useResponsive } from '../hooks/useResponsive';

import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { ExpertiseDropdown } from './ExpertiseDropdown';
import { MobileMenu } from './MobileMenu';

/**
 * En-tête persistant de l'application, branché sur le Stack.Navigator via
 * `screenOptions.header` (voir AppNavigator) : un seul composant, configuré
 * une fois, cohérent sur tous les écrans. Bascule automatiquement entre nav
 * horizontale (desktop/tablette) et menu hamburger (mobile).
 */
export function Header({ navigation, route }: NativeStackHeaderProps) {
  const { isDesktop } = useResponsive();
  const insets = useSafeAreaInsets();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentRoute = route.name as RouteName;
  const isExpertiseActive = expertiseRoutes.includes(currentRoute);

  const goTo = (routeName: RouteName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={[styles.safeWrapper, { paddingTop: insets.top }]}>
      <View style={[styles.bar, shadows.card]}>
        <Pressable onPress={() => goTo(ROUTES.HOME)} accessibilityRole="link" accessibilityLabel="Accueil MSE CAD">
          <Logo />
        </Pressable>

        {isDesktop ? (
          <View style={styles.desktopNav}>
            <ExpertiseDropdown active={isExpertiseActive} onNavigate={goTo} />
            {primaryNavItems.map((item) => (
              <NavLink
                key={item.route}
                label={item.label}
                active={currentRoute === item.route}
                onPress={() => goTo(item.route)}
              />
            ))}
          </View>
        ) : (
          <Pressable
            onPress={() => setMobileMenuOpen(true)}
            style={styles.hamburger}
            accessibilityRole="button"
            accessibilityLabel="Ouvrir le menu"
          >
            <View style={styles.hamburgerLine} />
            <View style={styles.hamburgerLine} />
            <View style={styles.hamburgerLine} />
          </Pressable>
        )}
      </View>

      {!isDesktop && (
        <MobileMenu visible={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} onNavigate={goTo} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  safeWrapper: {
    backgroundColor: colors.primary,
  },
  bar: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
  },
  desktopNav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hamburger: {
    width: 28,
    height: 20,
    justifyContent: 'space-between',
  },
  hamburgerLine: {
    height: 2,
    borderRadius: 1,
    backgroundColor: colors.white,
  },
});
