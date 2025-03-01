import { create } from 'zustand';

type Note = {
  id: string;
  title: string;
  content: string;
};

type NoteStore = {
  notes: Note[];
  addNote: (note: Note) => void;
  deleteNote: (id: string) => void;
};

export const useNoteStore = create<NoteStore>((set) => ({
  notes: [],
  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  deleteNote: (id) => set((state) => ({ notes: state.notes.filter((n) => n.id !== id) })),
}));
