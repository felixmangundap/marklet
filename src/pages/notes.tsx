import { useNoteStore } from '../stores/useNoteStore';
// const MarkdownEditor = React.lazy(() => import('./MarkdownEditor'));

const Notes = () => {
  const { notes, addNote, deleteNote } = useNoteStore();

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Notes;