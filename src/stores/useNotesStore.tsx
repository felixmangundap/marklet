import { create } from 'zustand';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../server/firebase';

type Note = {
  id: string;
  uid: string;
  title: string;
  note: string;
  public: boolean;
};

type NotesStore = {
  notes: Note[];
  fetchNotes: (uid: string) => void;
};

export const useNotesStore = create<NotesStore>((set) => ({
  notes: [],
  fetchNotes: async (uid: string) => {

    try {
      const q = query(collection(firestore, 'notes'), where('uid', '==', uid))

      const snapshot = await getDocs(q);
      const notes = snapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title || 'Untitled Note',
      })) as Note[];

      set(() => ({ notes }));


      console.log('Notes fetched with ID');
    } catch (e) {
      console.error('Error Fetching Notes: ', e);
    }
  },
}));
