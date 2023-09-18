import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from './src/pages/LoginPage/LoginPage';
import SignUp from './src/pages/SingUp/SignUp';
import Home from './src/pages/Home/Home';
import ForgotPassword from './src/pages/ForgotPassword/ForgotPassword';
import AuthContextProvider, {AuthContext} from './src/context/Context';
import ButtonLogout from './src/components/ButtonLogout';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginPage"
        component={LoginPage}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ForgotPassword"
        component={ForgotPassword}
      />
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

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {backgroundColor: '#EEE'},
          headerRight: () => <ButtonLogout onpress={authCtx.logout} />,
        }}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
}

/* <ButtonIcon
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}/>*/

function App() {
  return (
    <>
      <AuthContextProvider>
        <StackNavigation />
      </AuthContextProvider>
    </>
  );
}

export default App;
