import { useState } from 'preact/hooks';
import { UserCircleIcon, Cog6ToothIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

import ThemeToggle from './themeToggle';

const NavBar = () => {
  const [title, setTitle] = useState('');

  return (
    <div className='p-8 w-full flex items-center justify-between'>
      <div className='text-zinc-700 dark:text-zinc-50 font-bold text-xl leading-none cursor-pointer w-48'>marklet</div>
      <input className='
            text-zinc-700 dark:text-zinc-50 bg-zinc-50 dark:bg-zinc-900
            outline-none grow-1 font-semibold text-xl text-center leading-none
            '
        value={title}
        placeholder='untitled document'
        onInput={(e) => setTitle(e.currentTarget.value)}
      />
      <div className='flex flex-row justify-end w-48'>
        <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none mr-4'>
          <ThemeToggle />
        </div>
        <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none mr-4 cursor-pointer'>
          <UserCircleIcon className="size-6" />
        </div>
        <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none mr-4 cursor-pointer'>
          <Cog6ToothIcon className="size-6" />
        </div>
        <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none cursor-pointer'>
          <ArrowRightStartOnRectangleIcon className="size-6" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;