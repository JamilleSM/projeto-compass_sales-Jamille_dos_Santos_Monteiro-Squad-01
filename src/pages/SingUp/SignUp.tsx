import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, Alert, TextInput} from 'react-native';

import ButtonIcon from '../../components/ButtonIcon';

import AuthContent from '../../Auth/AuthContent';
import {createUser} from '../../context/Auth';
import Loading from '../../components/Loading';
import {AuthContext} from '../../context/Context';
import Title from '../../components/Title';

const SignUp: React.FC = () => {
  const [authenticate, setAuthenticate] = useState(false);

  const authContext = useContext(AuthContext);

  async function signUpHandler({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    setAuthenticate(true);
    try {
      const token = await createUser(email, password);
      authContext.authenticate(token);
    } catch {
      Alert.alert(
        'Authentication falided',
        'Cloud not log you in. Please check your credentials!',
      );
    }
    setAuthenticate(false);
  }

  if (authenticate) {
    return <Loading message="Creating user..." />;
  }

  return (
    <View style={styles.container}>
      <Title>SignUp</Title>
      <View style={styles.containerInput}>
        <Text style={styles.textInput}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#9B9B9B"
          placeholder="Nome"
        />
      </View>
      <AuthContent isLogin={false} onAuthenticate={signUpHandler} />
      <ButtonIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput: {
    backgroundColor: '#FFF',
    marginBottom: 12,
  },
  input: {
    width: 343,
    height: 51,
    padding: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    color: '#000',
  },
  textInput: {
    color: '#9B9B9B',
    height: 19,
    fontSize: 11,
    fontFamily: 'Roboto',
    fontWeight: '400',
    left: 10,
    top: 6,
  },
});

export default SignUp;
