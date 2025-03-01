import { create } from 'zustand';

type ThemeStore = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

// Check localStorage for saved theme preference
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    };

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode: getInitialTheme(),
  toggleTheme: () => {
    set((state) => {
      const newTheme = !state.isDarkMode;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return { isDarkMode: newTheme };
    });
  },
}));