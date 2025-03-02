import Container from "../components/container";

const Notes = () => {
  // const { notes, addNote, deleteNote } = useNoteStore();

  const notes = [
    {
      id: '1',
      title: 'A really cool first note',
    },
    {
      id: '2',
      title: 'Lorem Ipsum Dolor Sit Amet',
    },
    {
      id: '3',
      title: 'Bla Bla Bla Bla',
    },
    {
      id: '4',
      title: 'Note Number Four',
    },
    {
      id: '5',
      title: 'Numero Quintro Testing',
    },
    {
      id: '6',
      title: 'Portugal and Spain Itinerary',
    },
    {
      id: '7',
      title: 'A really cool last note',
    },
    {
      id: '1',
      title: 'A really cool first note',
    },
    {
      id: '2',
      title: 'Lorem Ipsum Dolor Sit Amet',
    },
    {
      id: '3',
      title: 'Bla Bla Bla Bla',
    },
    {
      id: '4',
      title: 'Note Number Four',
    },
    {
      id: '5',
      title: 'Numero Quintro Testing',
    },
    {
      id: '6',
      title: 'Portugal and Spain Itinerary',
    },
    {
      id: '7',
      title: 'A really cool last note',
    },
  ]

  return (
    <Container>
      <div className='relative h-2/5'>
        <div className='absolute h-16 w-full bg-linear-to-b from-zinc-50/100 to-zinc-50/0 dark:from-zinc-900/100 dark:to-zinc-900/0 top-0' />
        <div className='h-full overflow-scroll scroll-smooth snap-y'>
          {notes.map((note) => (
            <div className='flex flex-col justify-center items-center m-2 snap-center' key={note.id}>
              <span className='cursor-pointer text-center text-xl transition delay-150 duration-300 ease-in-out hover:text-red-500'>{note.title}</span>
              {/* <button onClick={() => deleteNote(note.id)}>Delete</button> */}
            </div>
          ))}
        </div>
        <div className='absolute h-16 w-full bg-linear-to-t from-zinc-50/100 to-zinc-50/0 dark:from-zinc-900/100 dark:to-zinc-900/0 bottom-0' />
      </div>
    </Container>
  );
};

export default Notes;