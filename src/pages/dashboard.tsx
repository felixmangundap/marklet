import { useEffect } from "preact/hooks";

import Container from "../components/container";
import NoteItem from "../components/noteItem";
import { useNotesStore } from "../stores/useNotesStore";
import useAuthStore from "../stores/useAuthStore";

const Dashboard = () => {
  const { notes, fetchNotes } = useNotesStore();
  const { currentUser } = useAuthStore();
  const uid = currentUser?.uid;

  useEffect(() => {
    if (!uid) return;
    fetchNotes(uid);
  }, []);

  const newNote = () => <NoteItem isNew />

  console.log('###notes', notes)

  return (
    <Container>
      <div className='relative flex justify-center w-full overflow-scroll scroll-smooth snap-y pb-32'>
        <div className='w-3xl flex flex-col pb-32'>
          {newNote()}
          {notes.map((note) => (
            <NoteItem id={note.id} title={note.title} />
          ))}
          <div className='pb-8'> </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;