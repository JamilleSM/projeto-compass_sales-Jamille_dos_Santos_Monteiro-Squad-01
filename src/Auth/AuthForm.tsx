import React, {useState} from 'react';
import {View} from 'react-native';

import InputLogin from '../components/InputLogin';
import ButtonLogin from '../components/ButtonLogin';

interface CredentialsInvalid {
  email: boolean;
  password: boolean;
}
interface AuthForm {
  isLogin: boolean;
  onSubmit: (credentials: {email: string; password: string}) => void;
  credentialsInvalid: CredentialsInvalid;
}

export function AuthForm({isLogin, onSubmit, credentialsInvalid}: AuthForm) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const {email: emailIsInvalid, password: passwordIsInvalid} =
    credentialsInvalid;

  function updateInputValueHandler(
    inputType: 'email' | 'password',
    enteredValue: string,
  ) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      password: enteredPassword,
    });
  }

  return (
    <View>
      <View>
        <InputLogin
          onUpdateValue={value => updateInputValueHandler('email', value)}
          placeholder="compass@compass.com"
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}>
          Email
        </InputLogin>

        <InputLogin
          onUpdateValue={value => updateInputValueHandler('password', value)}
          placeholder="Password"
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}>
          Password
        </InputLogin>
        <View>
          <ButtonLogin onpress={submitHandler}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </ButtonLogin>
        </View>
      </View>
    </View>
  );
}
