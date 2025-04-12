import { route } from 'preact-router';
import { ArrowUpOnSquareIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline';
import { useEditorStore } from '../stores/useEditorStore';
import useAuthStore from '../stores/useAuthStore';
import { useNotesStore } from '../stores/useNotesStore';

type Props = {
  isNew?: boolean;
  id?: string;
  title?: string;
}

const NoteItem = (props: Props) => {
  const {
    isNew = false,
    id,
    title,
  } = props;
  const { createNote, deleteNote } = useEditorStore();
  const { fetchNotes } = useNotesStore();
  
  const { currentUser } = useAuthStore();
  const uid = currentUser?.uid;

  const onDelete = async () => {
    if (!id || !uid) return;
    await deleteNote(id);
    await fetchNotes(uid);
  }

  const onClick = async () => {
    if (!uid) return;
    if (isNew) {
      const newId = await createNote(uid);
    
      route(`/note/${newId}`);
      return;
    }

    route(`/note/${id}`);
  }

  return (
    <div
      className='
        flex flex-row w-full
        border-l-2 border-zinc-300
        leading-none snap-center mb-4
      '
    >
      <div
        onClick={onClick}
        className='
          py-4 pl-8
          flex items-center
          font-bold text-md text-zinc-700 dark:text-zinc-50
          cursor-pointer grow-1 overflow-ellipsis whitespace-nowrap overflow-hidden
        '
      >
        {isNew ? 'create a new marklet' : title}
      </div>
      {!isNew &&
        <div className='ml-auto flex items-center py-4 pr-8'>
          <div
            className='text-zinc-700 dark:text-zinc-50 text-l leading-none mr-4 cursor-pointer'
            onClick={() => { console.log('### preview', id) }}
          >
            <EyeIcon className="size-6" />
          </div>
          <div
            className='text-zinc-700 dark:text-zinc-50 text-l leading-none mr-4 cursor-pointer'
            onClick={() => { console.log('### share', id) }}
          >
            <ArrowUpOnSquareIcon className="size-6" />
          </div>
          <div
            className='text-zinc-700 dark:text-zinc-50 text-l leading-none cursor-pointer'
            onClick={onDelete}
          >
            <TrashIcon className="size-6" />
          </div>
        </div>
      }
    </div>
  )
};

export default NoteItem;