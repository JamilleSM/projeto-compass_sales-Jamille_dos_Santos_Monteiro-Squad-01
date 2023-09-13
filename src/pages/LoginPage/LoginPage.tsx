import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import InputLogin from '../../components/InputLogin';
import ButtonLogin from '../../components/ButtonLogin';
import ButtonIcon from '../../components/ButtonIcon';

const LoginPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <InputLogin />
      <ButtonLogin />
      <ButtonIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  text: {
    top: 106,
    left: 14,
    fontSize: 34,
    fontFamily: 'Roboto',
    fontWeight: '700',
  },
});

export default LoginPage;
