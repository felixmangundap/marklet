import { useState } from 'preact/hooks';

import ThemeToggle from './themeToggle';

const NavBar = () => {
  return (
    <div className='p-8 w-full flex items-center justify-between'>
      <div className='text-zinc-700 dark:text-zinc-50 font-bold text-xl leading-none cursor-pointer'>marklet</div>
      <div className='flex flex-row justify-end'>
        <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none mr-4'>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;