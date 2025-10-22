import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}
    >
      <Text style={styles.text}>PODCASTs</Text>
      <Text style={styles.text}>
        <p>Fabrica de Filmes</p>
        <iframe data-testid="embed-iframe" style={styles.podcast_box} src="https://open.spotify.com/embed/show/3dAI13iP588c9GT1UoelDB?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </Text>
      <Text style={styles.text}>
        <p>Frango Fino</p>
        <iframe data-testid="embed-iframe" style={styles.podcast_box} src="https://open.spotify.com/embed/show/6eMairLQRdKPPKVbcoxSIV?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </Text>
      {/* <Text style={styles.text}>
        <p>Reinaldo Jaqueline</p>
        <iframe data-testid="embed-iframe" style={styles.podcast_box} src="https://open.spotify.com/embed/show/2MsTGRXkgN5k0gBBRDV4ok?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </Text> */}
      {/* <Text style={styles.text}>
        <p>Vortex</p>
        <iframe data-testid="embed-iframe" style={styles.podcast_box} src="https://open.spotify.com/embed/show/0zLUAET9wfl7hz23eXVtCd?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  podcast_box: {
    borderRadius: "12px"
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});