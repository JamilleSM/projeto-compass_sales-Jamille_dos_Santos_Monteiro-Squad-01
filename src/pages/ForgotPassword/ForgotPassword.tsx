import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';

import InputLogin from '../../components/InputLogin';
import ButtonLogin from '../../components/ButtonLogin';
import Title from '../../components/Title';

import {auth} from '../../firebase/firebaseConfig';
import {sendPasswordResetEmail} from 'firebase/auth';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  async function handlerForgotPassword() {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Email sent', 'I checked my email inbox');
    } catch {
      Alert.alert('Invalid Email', 'Double check Email');
    }
  }

  return (
    <View style={styles.container}>
      <Title>ForgotPassword</Title>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <InputLogin placeholder="compass@compass.com" onUpdateValue={setEmail}>
          Email
        </InputLogin>
      </View>
      <ButtonLogin onpress={handlerForgotPassword}>Send</ButtonLogin>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
  },
  text: {
    top: 106,
    left: 14,
    fontSize: 34,
    fontFamily: 'Roboto',
    fontWeight: '700',
  },
  textTitle: {
    color: '#000',
    fontSize: 11,
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
  titleContainer: {
    marginTop: 56,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    width: 343,
    height: 40,
  },
  inputContainer: {
    marginTop: 12,
  },
});

export default ForgotPassword;
