import { useThemeStore } from '../stores/useThemeStore';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <div
      onClick={toggleTheme}
      className='cursor-pointer'
    >
      {isDarkMode ? <SunIcon className='size-6' /> : <MoonIcon className='size-6' /> }
    </div>
  );
};

export default ThemeToggle;