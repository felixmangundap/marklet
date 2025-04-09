import { create } from 'zustand';

type EditorStore = {
  noteId: string;
  title: string;
  markdownNote: string;
  isPreview: boolean;
  isSplitView: boolean;
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
