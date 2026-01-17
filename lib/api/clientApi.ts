import { Note, NoteFormValues, NoteRes } from "@/types/note";
import { api } from "./api";

export const fetchNotes = async (
  page: number,
  search?: string,
  tag?: string
) => {
  const res = await api.get<NoteRes>("/notes", {
    params: { page, perPage: 12, search, tag },
  });
  return res.data;
};

export const fetchNoteById = async (id: string) => {
  const res = await api.get<Note>(`/notes/${id}`);
  return res.data;
};

export const createNote = async (values: NoteFormValues) => {
  const res = await api.post<Note>("/notes", values);
  return res.data;
};

export const deleteNote = async (id: string) => {
  const res = await api.delete<Note>(`/notes/${id}`);
  return res.data;
};
