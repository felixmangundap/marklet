import { ReactNode } from "preact/compat";
import ThemeToggle from "./themeToggle";

type Props = {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  // const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <div className='relative flex flex-col justify-center items-center w-dvw h-dvh bg-zinc-50 dark:bg-zinc-900 text-black dark:text-white'>
      <div className='absolute top-0 left-0 p-8 w-full flex items-center'>
        <span className='text-black dark:text-white font-bold text-xl leading-none'>marklet</span>
        <div className='ml-auto'>
          <span className='text-black dark:text-white font-semibold text-l leading-none'>profile</span>
          <span className='text-black dark:text-white font-semibold text-l leading-none'> / </span>
          <span className='text-black dark:text-white font-semibold text-l leading-none'>settings</span>
          <span className='text-black dark:text-white font-semibold text-l leading-none'> / </span>
          <span className='text-black dark:text-white font-semibold text-l leading-none'>sign out</span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Container;