import React, { JSX } from 'react';
import { StyleSheet, View, Text, FlatList, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  text: {
    color: '#fff',
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  podcast_box: {
    borderRadius: "12px"
  },
  title: {
    fontSize: 32,
  },
});

const DATA = [
    {
        id: '1',
        nome: 'Fabrica de Filmes',
        embed: <iframe data-testid="embed-iframe" style={styles.podcast_box} src="https://open.spotify.com/embed/show/3dAI13iP588c9GT1UoelDB?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    },
    {
        id: '2',
        nome: 'Frango Fino',
        embed: <iframe data-testid="embed-iframe" style={styles.podcast_box} src="https://open.spotify.com/embed/show/6eMairLQRdKPPKVbcoxSIV?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    },
    {
        id: '3',
        nome: 'Reinaldo Jaqueline',
        embed: <iframe data-testid="embed-iframe" style={styles.podcast_box} src="https://open.spotify.com/embed/show/2MsTGRXkgN5k0gBBRDV4ok?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    },
    {
        id: '4',
        nome: 'Vortex',
        embed: <iframe data-testid="embed-iframe" style={styles.podcast_box} src="https://open.spotify.com/embed/show/0zLUAET9wfl7hz23eXVtCd?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>,
    },
];

type ItemProps = {title: string, embed: JSX.Element};

const Item = ({title, embed}: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.text}>{title}</Text>
        <Text>{embed}</Text>
    </View>
);

export default function Podcasts() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.nome} embed={item.embed} />}
                keyExtractor={item => item.id}
            />
            </SafeAreaView>
        </SafeAreaProvider>
    );
};
