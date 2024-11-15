import { useEffect, useState } from 'react'
import { Note } from '../types/types';
import axios from 'axios';

const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const {data} = await axios.get<Note[]>("https://jsonplaceholder.typicode.com/posts")
      setNotes(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return {notes, error, reload: fetchNotes, isLoading: loading};
}

export default useNotes;