import { useNoteStore } from '../stores/useNoteStore';

import Container from './container';
// const MarkdownEditor = React.lazy(() => import('./MarkdownEditor'));

const Notes = () => {
  const { notes, addNote, deleteNote } = useNoteStore();

  return (
    <Container>
      {notes.map((note) => (
        <div key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
      ))}
    </Container>
  );
};

export default Notes;