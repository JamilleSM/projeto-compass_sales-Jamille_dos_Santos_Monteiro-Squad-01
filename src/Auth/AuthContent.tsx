import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {AuthForm} from './AuthForm';
import {useNavigation} from '@react-navigation/native';
import Password from '../components/Password';

interface CredentialsInvalid {
  email: boolean;
  password: boolean;
}

interface AuthContentProps {
  isLogin: boolean;
  onAuthenticate: (credentials: {email: string; password: string}) => void;
}

export function AuthContent({isLogin, onAuthenticate}: AuthContentProps) {
  const navigation: any = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] =
    useState<CredentialsInvalid>({
      email: false,
      password: false,
    });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace('ForgotPassword');
    } else {
      navigation.replace('LoginPage');
    }
  }

  function submitHandler(credentials: {email: string; password: string}) {
    let {email, password} = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 4;

    if (!emailIsValid || !passwordIsValid) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
      });
      return;
    }
    onAuthenticate({email, password});
  }

  return (
    <View>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View>
        <Password onpress={switchAuthModeHandler}>
          {isLogin ? 'Forgot your password?' : 'Already have an account?'}
        </Password>
      </View>
    </View>
  );
}

export default AuthContent;
