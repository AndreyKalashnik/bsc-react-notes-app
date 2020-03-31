export const FETCH_NOTES_PENDING = "FETCH_NOTES_PENDING";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_ERROR = "FETCH_NOTES_ERROR";
export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";

export const fetchNotesPending = () => ({
  type: FETCH_NOTES_PENDING
});

export const fetchNotesSuccess = notes => ({
  type: FETCH_NOTES_SUCCESS,
  notes
});

export const fetchNotesError = error => ({
  type: FETCH_NOTES_ERROR,
  error
});

export const addNote = title => ({
  type: ADD_NOTE,
  title
});

export const removeNote = id => ({
  type: REMOVE_NOTE,
  id
});

export const updateNote = (id, title) => ({
  type: UPDATE_NOTE,
  id,
  title
});
