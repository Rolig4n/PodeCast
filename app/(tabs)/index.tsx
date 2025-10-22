import { View, StyleSheet } from "react-native";
// import Button from "@/components/Button";
// import ImageViewer from '@/components/ImageViewer';
import Podcasts from "@/components/PodcastCarousel";

// const PlaceholderImage = require('@/assets/images/placeholder.jpg');

export default function Index() {
  return (
    <View style={styles.container}
    >
      <Podcasts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});