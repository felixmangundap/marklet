import { ArrowUpOnSquareIcon, TrashIcon, DocumentTextIcon, PencilSquareIcon, ArrowsUpDownIcon } from '@heroicons/react/24/outline';

import ThemeToggle from './themeToggle';
import { useEditorStore } from '../stores/useEditorStore';

const EditorNavBar = () => {
  const { title, isPreview, setTitle, togglePreview, toggleView } = useEditorStore();

  return (
    <div className='p-8 w-full flex items-center justify-between'>
      <div className='w-64'>
        <span className='text-zinc-700 dark:text-zinc-50 font-bold text-xl leading-none cursor-pointer'>marklet</span>
      </div>
      <input className='
            text-zinc-700 dark:text-zinc-50 bg-zinc-50 dark:bg-zinc-900
            outline-none grow-1 font-normal text-xl text-center leading-none
            '
        value={title}
        placeholder='untitled document'
        onInput={(e) => setTitle(e.currentTarget.value)}
      />
      <div className='flex flex-row items-center justify-end w-64'>
        <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none mr-4 cursor-pointer' onClick={toggleView}>
          <ArrowsUpDownIcon className="size-6" />
        </div>
        <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none mr-4 cursor-pointer' onClick={togglePreview}>
          {isPreview ? <PencilSquareIcon className='size-6' /> : <DocumentTextIcon className='size-6' />}
        </div>
        <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none mr-4 cursor-pointer'>
          <ArrowUpOnSquareIcon className="size-6" />
        </div>
        <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none mr-4 cursor-pointer'>
          <TrashIcon className="size-6" />
        </div>
        <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none'>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default EditorNavBar;