import { UserCircleIcon, Cog6ToothIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './themeToggle';

const NavBar = () => {
  return (
    <div className='p-8 w-full flex items-center justify-between'>
      <div className='text-zinc-700 dark:text-zinc-50 font-bold text-xl leading-none cursor-pointer'>marklet</div>
      <div className='flex flex-row'>
        <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none mr-4'>
          <ThemeToggle />
        </div>
        <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none mr-4 cursor-pointer'>
          <UserCircleIcon className="size-6" />
        </div>
        {/* <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none'>
          <Cog6ToothIcon className="size-6" />
        </div>
        <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none'>
          <ArrowRightStartOnRectangleIcon className="size-6" />
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;