import { View, StyleSheet } from "react-native";
// import Button from "@/components/Button";
// import ImageViewer from '@/components/ImageViewer';
import Carousel from "@/components/Carousel";

// const PlaceholderImage = require('@/assets/images/placeholder.jpg');

export default function Index() {
  return (
    <View style={styles.container}
    >
      <Carousel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  }
})