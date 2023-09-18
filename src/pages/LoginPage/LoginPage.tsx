import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import ButtonIcon from '../../components/ButtonIcon';
import AuthContent from '../../Auth/AuthContent';
import Loading from '../../components/Loading';
import {loginUser} from '../../context/Auth';
import {AuthContext} from '../../context/Context';
import Title from '../../components/Title';

const LoginPage: React.FC = () => {
  const [authenticate, setAuthenticate] = useState(false);
  const authContext = useContext(AuthContext);

  async function signInHandler({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    setAuthenticate(true);
    try {
      const token = await loginUser(email, password);
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication falided',
        'Cloud not log you in. Please check your credentials!',
      );
    }
    setAuthenticate(false);
  }

  if (authenticate) {
    return <Loading message="Logging you in..." />;
  }

  return (
    <View style={styles.container}>
      <Title>Login</Title>
      <Text>Login</Text>
      <AuthContent isLogin={true} onAuthenticate={signInHandler} />
      <ButtonIcon />
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
    fontSize: 34,
    fontFamily: 'Roboto',
    fontWeight: '700',
  },
});

export default LoginPage;
