import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { setUser } from '../../redux/auth/auth-slice';
import { auth } from '../utils/firebase-config';

const provider = new GoogleAuthProvider();

export const authSignInUser = async () => {
  try {
    const {
      user: { displayName: name, email, photoURL },
    } = await signInWithPopup(auth, provider);
    return { name, email, photoURL };
  } catch (error) {
    const { code, message, customData } = error;
    return { code, message, email: customData?.email };
  }
};

export const authRefreshUser = dispatch => {
  try {
    onAuthStateChanged(auth, user => {
      console.log(user);
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
  } catch (error) {
    const { code, message, customData } = error;
    return { code, message, email: customData?.email };
  }
};

export const authSignOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    const { code, message, customData } = error;
    return { code, message, email: customData?.email };
  }
};
