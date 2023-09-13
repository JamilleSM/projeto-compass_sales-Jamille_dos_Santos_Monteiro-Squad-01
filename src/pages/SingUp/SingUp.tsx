import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import InputLogin from '../../components/InputLogin';
import ButtonLogin from '../../components/ButtonLogin';
import ButtonIcon from '../../components/ButtonIcon';

function SingUp() {
  return (
    <View style={styles.container}>
      <Text>Sing up</Text>
      <InputLogin />
      <ButtonLogin />
      <ButtonIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  /*  text: {
    color: '#222',
    top: 106,
    left: 14,
    fontSize: 34,
    fontFamily: 'Roboto',
    fontWeight: '700',
  }, */
});

export default SingUp;
