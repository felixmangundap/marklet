import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { addDoc, collection } from "firebase/firestore";

import { auth, firestore } from './firebase'

export const emailSignUp = (email: string, password: string, name: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async registeredUser => {
      try {
        const docRef = await addDoc(collection(firestore, "users"), {
          uid: registeredUser.user.uid,
          name,
          notes: [],
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    })
}

export const emailSignIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
}

export const signOut = () => {
  return auth.signOut();
}

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

export const signUpWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    .then(async registeredUser => {
      try {
        const docRef = await addDoc(collection(firestore, "users"), {
          uid: registeredUser.user.uid,
          notes: [],
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    })
}
