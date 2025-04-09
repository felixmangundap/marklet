import { route } from 'preact-router';

import ThemeToggle from './themeToggle';

const PublicNavBar = () => {
  const navigateToHome = async () => {
    route('/');
  }

  return (
    <div className='p-8 w-full flex items-center justify-between'>
      <div className='text-zinc-700 dark:text-zinc-50 font-bold text-xl leading-none cursor-pointer' onClick={navigateToHome}>marklet</div>
      <div className='flex flex-row justify-end'>
        <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none'>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default PublicNavBar;