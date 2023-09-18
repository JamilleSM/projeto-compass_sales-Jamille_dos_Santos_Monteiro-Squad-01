import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface TitlePorps {
  children: string;
}

const Title: React.FC<TitlePorps> = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    paddingTop: 60,
  },
  text: {
    fontSize: 34,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#222',
  },
});

export default Title;
