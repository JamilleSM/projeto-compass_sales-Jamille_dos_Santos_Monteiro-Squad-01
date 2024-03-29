import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD2_xIXdZzIoSa3zLVBWJyH0YKYUl_FoiE',
  authDomain: 'compasssales-95eda.firebaseapp.com',
  databaseURL: 'https://compasssales-95eda-default-rtdb.firebaseio.com',
  projectId: 'compasssales-95eda',
  storageBucket: 'compasssales-95eda.appspot.com',
  messagingSenderId: '894443237919',
  appId: '1:894443237919:web:179ed89b38c165beb45b2a',
  measurementId: 'G-VX4FL28S3D',
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
