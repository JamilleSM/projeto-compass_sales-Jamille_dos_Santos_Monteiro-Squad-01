import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import InputLogin from '../../components/InputLogin';
import ButtonLogin from '../../components/ButtonLogin';
import ButtonIcon from '../../components/ButtonIcon';

import {useNavigation} from '@react-navigation/native';
import Password from '../../components/Password';

// import {useForm, Controller} from 'react-hook-form';

const SignUp: React.FC = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <InputLogin
      // onChangText={onChange}
      // onBlur={onBlur}
      //value={value}
      //placeholder="compass@compass.com"
      //placeholderTextColor="#9B9B9B"
      />
      <InputLogin />
      <InputLogin />
      <Password onpress={() => navigation.navigate('LoginPage')}>
        Already have an account?
      </Password>
      <ButtonLogin onpress={() => navigation.navigate('LoginPage')}>
        Sign Up
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

export default SignUp;
