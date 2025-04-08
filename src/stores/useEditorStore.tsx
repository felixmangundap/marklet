import { create } from 'zustand';

type EditorStore = {
  noteId: string;
  title: string;
  isPreview: boolean;
  isSplitView: boolean;
  setTitle: (title: string) => void;
  togglePreview: () => void;
  toggleView: () => void;
};

export const useEditorStore = create<EditorStore>((set) => ({
  noteId: '',
  title: '',
  isPreview: false,
  isSplitView: false,
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
