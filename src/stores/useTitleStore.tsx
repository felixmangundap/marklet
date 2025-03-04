import { create } from 'zustand';

type TitleStore = {
  title: string;
  upsertTitle: (title: string) => void;
  wipeTitle: () => void;
};

export const useTitleStore = create<TitleStore>((set) => ({
  title: '',
  upsertTitle: (title: string) => set(() => ({ title })),
  wipeTitle: () => set(() => ({ title: '' })),
}));
