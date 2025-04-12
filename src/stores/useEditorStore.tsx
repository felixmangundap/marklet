import { create } from 'zustand';
import { addDoc, deleteDoc, collection, doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';

import { firestore } from '../server/firebase';

type EditorStore = {
  noteId: string;
  title: string;
  markdownNote: string;
  isPreview: boolean;
  isSplitView: boolean;
  createNote: (uid: string) => Promise<string | undefined>;
  fetchNote: (id: string) => void;
  deleteNote: (id: string) => void;
  saveNote: (id: string, note: string, title: string) => void;
  updateTitle: (id: string, title: string) => void;
  setMarkdownNote: (markdownNote: string) => void;
  setTitle: (title: string) => void;
  togglePreview: () => void;
  toggleView: () => void;
};

export const useEditorStore = create<EditorStore>((set) => ({
  noteId: '',
  markdownNote: '',
  title: '',
  isPreview: false,
  isSplitView: false,
  createNote: async (uid: string) => {
    try {
      const id = await addDoc(collection(firestore, 'notes'), {
        uid,
        note: '',
        title: '',
        public: false,
      }).then(async docRef => {
        try {
          await updateDoc(doc(firestore, 'users', uid), {
            notes: arrayUnion(docRef.id),
          });

          console.log('Document updated with notes ID: ', docRef.id);
          return docRef.id;
        } catch (e) {
          console.error('Error updating document: ', e);
        }
      });

      return id;
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  },
  fetchNote: async (id: string) => {
    try {
      const ref = doc(firestore, 'notes', id);

      getDoc(ref).then((snap) => {
        if (snap.exists()) {
          const noteObject = snap.data();
          const { title, note } = noteObject;
          const noteId = snap.id;

          set(() => ({
            noteId,
            title,
            markdownNote: note,
          }));
        }
      });

      console.log('Document fetched with ID: ', id);
    } catch (e) {
      console.error('Error deleting document: ', e);
    }
  },
  deleteNote: async (id: string) => {
    try {
      await deleteDoc(doc(firestore, 'notes', id));

      console.log('Document deleted with ID: ');
    } catch (e) {
      console.error('Error deleting document: ', e);
    }
  },
  saveNote: async (id: string, note: string, title: string) => {
    try {
      await updateDoc(doc(firestore, 'notes', id), {
        note,
        title: title || note.split('\\n')[0],
      });

      console.log('Document note updated with notes ID',);
    } catch (e) {
      console.error('Error updating document: ', e);
    }
  },
  updateTitle: async (id: string, title: string) => {
    try {
      await updateDoc(doc(firestore, 'notes', id), {
        title,
      });

      console.log('Document title updated with notes ID',);
    } catch (e) {
      console.error('Error updating document: ', e);
    }
  },
  setMarkdownNote: (markdownNote: string) => set(() => ({ markdownNote })),
  setTitle: (title: string) => set(() => ({ title })),
  togglePreview: () => {
    set((state) => {
      return { isPreview: !state.isPreview };
    });
  },
  toggleView: () => {
    set((state) => {
      return { isSplitView: !state.isSplitView };
    });
  },
}));
