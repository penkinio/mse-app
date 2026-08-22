import type { ReactNode } from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import { colors, cadMarker } from '../theme';

type CadCornersProps = {
  children: ReactNode;
  style?: ViewStyle;
  color?: string;
};

const { size, strokeWidth, offset } = cadMarker;

/**
 * Élément signature du design : encadre son contenu de petits repères
 * d'angle façon "viewport CAD" (crochets de calage d'un plan technique).
 * À utiliser avec parcimonie — un par section/carte, pas partout.
 */
export function CadCorners({ children, style, color = colors.accent }: CadCornersProps) {
  return (
    <View style={[styles.wrapper, style]}>
      {children}
      <View pointerEvents="none" style={[styles.corner, styles.topLeft, { borderColor: color }]} />
      <View pointerEvents="none" style={[styles.corner, styles.topRight, { borderColor: color }]} />
      <View pointerEvents="none" style={[styles.corner, styles.bottomLeft, { borderColor: color }]} />
      <View pointerEvents="none" style={[styles.corner, styles.bottomRight, { borderColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  corner: {
    position: 'absolute',
    width: size,
    height: size,
  },
  topLeft: {
    top: offset,
    left: offset,
    borderTopWidth: strokeWidth,
    borderLeftWidth: strokeWidth,
  },
  topRight: {
    top: offset,
    right: offset,
    borderTopWidth: strokeWidth,
    borderRightWidth: strokeWidth,
  },
  bottomLeft: {
    bottom: offset,
    left: offset,
    borderBottomWidth: strokeWidth,
    borderLeftWidth: strokeWidth,
  },
  bottomRight: {
    bottom: offset,
    right: offset,
    borderBottomWidth: strokeWidth,
    borderRightWidth: strokeWidth,
  },
});
