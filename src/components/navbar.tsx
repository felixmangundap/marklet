import { route } from 'preact-router';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

import ThemeToggle from './themeToggle';
import useAuthStore from '../stores/useAuthStore';

const NavBar = () => {
  const { logout } = useAuthStore();

  const onSignOut = async () => {
    try {
      await logout();
      route('/', true);
    } catch (err) {
      
    }
  }
  
  const navigateToHome = async () => {
    route('/');
  }

  return (
    <div className='p-8 w-full flex items-center justify-between'>
      <div className='text-zinc-700 dark:text-zinc-50 font-bold text-xl leading-none cursor-pointer' onClick={navigateToHome}>marklet</div>
      <div className='flex flex-row justify-end'>
        <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none mr-4'>
          <ThemeToggle />
        </div>
        <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none cursor-pointer' onClick={onSignOut}>
          <ArrowRightStartOnRectangleIcon className="size-6" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;