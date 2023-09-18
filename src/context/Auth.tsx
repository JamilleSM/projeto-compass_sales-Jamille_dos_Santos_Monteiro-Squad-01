import axios, {AxiosResponse} from 'axios';

const API_KEY = 'AIzaSyD2_xIXdZzIoSa3zLVBWJyH0YKYUl_FoiE';

interface AuthenticationResponse {
  idToken: string;
  email: string;
  kind: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

interface AuthData {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

async function authenticate(
  mode: 'signUp' | 'signInWithPassword',
  email: string,
  password: string,
): Promise<string> {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const data: AuthData = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  try {
    const response: AxiosResponse<AuthenticationResponse> = await axios.post(
      url,
      data,
    );
    const token = response.data.idToken;
    return token;
  } catch (error) {
    throw error;
  }
}

export function createUser(email: string, password: string): Promise<string> {
  return authenticate('signUp', email, password);
}

export function loginUser(email: string, password: string): Promise<string> {
  return authenticate('signInWithPassword', email, password);
}
