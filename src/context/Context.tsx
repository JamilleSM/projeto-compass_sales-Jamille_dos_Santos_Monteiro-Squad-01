import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, ReactNode, useEffect, useState} from 'react';

interface AuthContextData {
  token: string;
  isAuthenticated: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>({
  token: '',
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

function AuthContextProvider({children}: AuthContextProviderProps) {
  const [authToken, setAuthToken] = useState<string | null>('');

  useEffect(() => {
    async function featchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        setAuthToken(storedToken);
      }
    }

    featchToken();
  }, []);

  function authenticate(token: string) {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  }

  function logout() {
    setAuthToken('');
    AsyncStorage.removeItem('token');
  }

  const value: AuthContextData = {
    token: authToken || '',
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
