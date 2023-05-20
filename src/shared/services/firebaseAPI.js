import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { setUser } from '../../redux/auth/auth-slice';
import { auth } from './firebase-config';

const provider = new GoogleAuthProvider();

export const authSignInUser = async () => {
  const {
    user: { displayName: name, email, photoURL },
  } = await signInWithPopup(auth, provider);
  return { name, email, photoURL };
};

export const authRefreshUser = dispatch => {
  onAuthStateChanged(auth, user => {
    if (user) {
      dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }),
      );
    }
  });
};

export const authSignOutUser = async () => {
  await signOut(auth);
};
