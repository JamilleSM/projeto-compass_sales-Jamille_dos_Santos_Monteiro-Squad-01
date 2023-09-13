import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem Vindo!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});

export default Home;
