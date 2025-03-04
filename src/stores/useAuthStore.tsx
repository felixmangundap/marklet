import { create } from 'zustand';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
  UserCredential,
} from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

import { auth, firestore } from '../server/firebase';

interface AuthState {
  currentUser: User | null;
  loading: boolean;
  setCurrentUser: (user: User | null) => void;
  emailLogin: (email: string, password: string) => Promise<void>;
  emailSignup: (email: string, password: string, name: string) => Promise<void>;
  googleLogin: () => Promise<UserCredential>;
  googleSignup: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  currentUser: null,
  loading: true,

  setCurrentUser: (user: any) => set({ currentUser: user, loading: false }),

  emailLogin: async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  },

  emailSignup: async (email: string, password: string, name: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async registeredUser => {
        try {
          const docRef = await addDoc(collection(firestore, 'users'), {
            uid: registeredUser.user.uid,
            name,
            notes: [],
          });

          console.log('Document written with ID: ', docRef.id);
        } catch (e) {
          console.error('Error adding document: ', e);
        }
      })
  },

  googleLogin: async () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  },
  
  googleSignup: async () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then(async registeredUser => {
        try {
          const docRef = await addDoc(collection(firestore, 'users'), {
            uid: registeredUser.user.uid,
            notes: [],
          });
  
          console.log('Document written with ID: ', docRef.id);
        } catch (e) {
          console.error('Error adding document: ', e);
        }
      })
  },

  logout: async () => {
    await auth.signOut();
  },
}));

onAuthStateChanged(auth, (user) => {
  useAuthStore.getState().setCurrentUser(user);
});

export default useAuthStore;