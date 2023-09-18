/*import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import StackRouter from './Stack/StackRouter';
import AuthRouter from './Stack/AuthRouter';

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

function Router() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const onUser = auth().onAuthStateChanged(setUser);
    return onUser;
  }, []);
  return (
    <NavigationContainer>
      {user ? <StackRouter /> : <AuthRouter />}
    </NavigationContainer>
  );
}

export default Router;*/
