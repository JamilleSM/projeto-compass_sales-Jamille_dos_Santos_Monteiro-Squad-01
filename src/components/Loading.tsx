import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

interface LoadingProps {
  message: string;
}

const Loading: React.FC<LoadingProps> = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
    color: '#000',
  },
});

export default Loading;
/*import React, {useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from './src/pages/LoginPage/LoginPage';
import SignUp from './src/pages/SingUp/SignUp';
import Home from './src/pages/Home/Home';
import ForgotPassword from './src/pages/ForgotPassword/ForgotPassword';
import AuthContextProvider, {AuthContext} from './src/context/Context';
import IconButton from './src/components/ButtonLogout';
import AsyncStorage from '@react-native-async-storage/async-storage/lib/typescript/AsyncStorage';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

function StackNavigation() {
  const authContext = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authContext.isAuthenticated && <AuthStack />}
      {authContext.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{}} />
    </Stack.Navigator>
  );
}

export function Root() {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function featchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
    }

    featchToken();
  }, []);

  return <StackNavigation />;
}

function App() {
  return (
    <>
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}

export default App;*/

/*const authCtx = useContext(AuthContext);
  headerRight: {{tintColor}} => (
    <IconButton
    icon='exit'
    color={tintColor}
    onpress={authCtx.logout}
    />
  )*/
