import { route } from 'preact-router';
import { useCallback } from 'preact/hooks';
import { ArrowUpOnSquareIcon, TrashIcon, DocumentTextIcon, PencilSquareIcon, ArrowsUpDownIcon } from '@heroicons/react/24/outline';

import ThemeToggle from './themeToggle';
import { useEditorStore } from '../stores/useEditorStore';
import { debounce } from '../utils/debounce';

const EditorNavBar = () => {
  const { noteId, title, isPreview, setTitle, updateTitle, togglePreview, toggleView, deleteNote } = useEditorStore();

  const navigateToHome = () => {
    route('/dashboard');
  }

  const onDelete = async () => {
    await deleteNote(noteId);
    navigateToHome();
  }

  const debouncedSave = useCallback(
    debounce((newTitle: string) => {
      if (noteId) updateTitle(noteId, newTitle);
    }, 500),
    [noteId]
  );

  const handleInput = (e: Event) => {
    const newTitle = (e.target as HTMLTextAreaElement).value;
    setTitle(newTitle);
    debouncedSave(newTitle);
  };

  return (
    <div className='p-8 w-full flex items-center justify-between'>
      <div className='w-64'>
        <div className='text-zinc-700 dark:text-zinc-50 h-6 font-bold text-xl leading-none cursor-pointer' onClick={navigateToHome}>marklet</div>
      </div>
      <input className='
        text-zinc-700 dark:text-zinc-50 bg-zinc-50 dark:bg-zinc-900
          outline-none grow-1 font-normal text-xl text-center leading-none h-6
        '
        value={title}
        placeholder='untitled document'
        onInput={handleInput}
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
        <div className='text-zinc-700 dark:text-zinc-50 text-l leading-none mr-4 cursor-pointer' onClick={onDelete}>
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