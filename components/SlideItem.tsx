import React, { JSX, useMemo } from "react";
import {
  ImageSourcePropType,
  type ImageStyle,
  type StyleProp,
  StyleSheet,
  Text,
  View,
  type ViewProps,
} from "react-native";
import type { AnimatedProps } from "react-native-reanimated";
import Animated from "react-native-reanimated";

// const PURPLE_IMAGES = [
//   require("@/assets/images/slide-images/purple-0.jpg"),
//   require("@/assets/images/slide-images/purple-1.jpg"),
//   require("@/assets/images/slide-images/purple-2.jpg"),
//   require("@/assets/images/slide-images/purple-3.jpg"),
//   require("@/assets/images/slide-images/purple-4.jpg"),
// ]

const PODCASTS = [
  {
    nome: 'Fabrica de Filmes',
    embed: <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/show/3dAI13iP588c9GT1UoelDB?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
  },
  // {
  //   nome: 'Frango Fino',
  //   embed: <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/show/6eMairLQRdKPPKVbcoxSIV?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
  // },
  // {
  //   nome: 'Reinaldo Jaqueline',
  //   embed: <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/show/2MsTGRXkgN5k0gBBRDV4ok?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
  // },
  // {
  //   nome: 'Vortex',
  //   embed: <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/show/0zLUAET9wfl7hz23eXVtCd?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
  // },
]

interface Props extends AnimatedProps<ViewProps> {
  style?: StyleProp<ImageStyle>;
  index?: number;
  rounded?: boolean;
  source?: ImageSourcePropType;
  nome?: string;
  embed?: JSX.Element;
  colorFill?: boolean;
}

export const SlideItem: React.FC<Props> = (props) => {
  const {
    style,
    index = 0,
    rounded = false,
    testID,
    colorFill = false,
    ...animatedViewProps
  } = props;

  // const source = useMemo(
  //   () => props.source || PURPLE_IMAGES[index % PURPLE_IMAGES.length],
  //   [index, props.source]
  // );

  const source = useMemo(
    () => props.source || PODCASTS[index % PODCASTS.length],
    [index, props.source]
  );

  return (
    <Animated.View testID={testID} style={{ flex: 1 }} {...animatedViewProps}>
      {!colorFill && (
        // <Animated.Image
        //   style={[style, styles.container, rounded && { borderRadius: 15 }]}
        //   source={source}
        //   resizeMode="cover"
        // />
        <Text style={[style, styles.container, rounded && { borderRadius: 15 }]}>
          {source.embed}
        </Text>
      )}
      {colorFill && <View style={[styles.colorFill, rounded && { borderRadius: 15 }]} />}
      <View style={styles.overlay}>
        <View style={styles.overlayTextContainer}>
          {/* <Text style={styles.overlayText}>{index}</Text> */}
          <Text style={styles.overlayText}>{source.nome}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#25292e',
  },
  overlay: {
    position: "absolute",
    // top: 0,
    left: 0,
    // right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  overlayTextContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
    minWidth: 40,
    minHeight: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  colorFill: {
    position: "absolute",
    // top: 0,
    left: 0,
    // right: 0,
    bottom: 0,
    backgroundColor: "gray",
  },
});