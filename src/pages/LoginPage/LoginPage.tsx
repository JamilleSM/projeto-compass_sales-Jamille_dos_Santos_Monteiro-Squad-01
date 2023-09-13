import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import InputLogin from '../../components/InputLogin';
import ButtonLogin from '../../components/ButtonLogin';
import ButtonIcon from '../../components/ButtonIcon';

import {useNavigation} from '@react-navigation/native';

import Password from '../../components/Password';

const LoginPage: React.FC = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <InputLogin />
      <InputLogin />
      <Password onpress={() => navigation.navigate('ForgotPassword')}>
        Forgot your password?
      </Password>
      <ButtonLogin onpress={() => navigation.navigate('Home')}>
        Login
      </ButtonLogin>
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
