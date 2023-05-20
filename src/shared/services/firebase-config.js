import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'authproject-e0eaa.firebaseapp.com',
  projectId: 'authproject-e0eaa',
  storageBucket: 'authproject-e0eaa.appspot.com',
  messagingSenderId: '626715165936',
  appId: '1:626715165936:web:24a1516ef87a8be93fee35',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
