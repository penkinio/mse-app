import { Image, StyleSheet, View, type ImageSourcePropType } from 'react-native';
import { spacing } from '../theme';
import { CadCorners } from './CadCorners';

type ImageGalleryProps = {
  images: ImageSourcePropType[];
};

/**
 * Galerie responsive : les images s'enchaînent et passent à la ligne sur
 * petit écran, chacune encadrée par l'élément signature CadCorners.
 */
export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <View style={styles.row}>
      {images.map((source, index) => (
        <CadCorners key={index} style={styles.item}>
          <Image source={source} style={styles.image} resizeMode="cover" />
        </CadCorners>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    padding: spacing.xl,
    maxWidth: 720,
    width: '100%',
    alignSelf: 'center',
  },
  item: {
    flexGrow: 1,
    flexBasis: 220,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 4,
  },
});
