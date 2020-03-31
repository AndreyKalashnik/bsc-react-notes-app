import axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_ERROR,
  FETCH_NOTES_PENDING,
  ADD_NOTE,
  REMOVE_NOTE,
  UPDATE_NOTE
} from "../actions";

export const ROOT_URL = "https://private-anon-9b9bdfc5dd-note10.apiary-mock.com/notes";

export function* fetchNotesSaga() {
  try {
    const notes = yield call(axios.get, ROOT_URL);
    yield put({ type: FETCH_NOTES_SUCCESS, notes: notes.data });
  } catch (error) {
    yield put({ type: FETCH_NOTES_ERROR, error });
  }
}

export function* addNoteSaga(action) {
  const note = { title: action.title }
  try {
    yield call(axios.post, ROOT_URL, note);
    yield put({ type: FETCH_NOTES_PENDING });
  } catch (error) {
    console.log("an error with adding new note occurs", error.message)
  }
}

export function* removeNoteSaga(action) {
  try {
    yield call(axios.delete, `${ROOT_URL}/${action.id}`);
    yield put({ type: FETCH_NOTES_PENDING });
  } catch (error) {
    console.log("an error with removing the note occurs", error.message)
  }
}

export function* updateNoteSaga(action) {
  const note = { title: action.title }
  try {
    yield call(axios.put, `${ROOT_URL}/${action.id}`, note);
  } catch (error) {
    console.log("an error with updating the note occurs", error.message)
  }
}

function* watchFetchNotes() {
  yield takeEvery(FETCH_NOTES_PENDING, fetchNotesSaga);
}

function* watchAddNote() {
  yield takeEvery(ADD_NOTE, addNoteSaga);
}

function* watchRemoveNote() {
  yield takeEvery(REMOVE_NOTE, removeNoteSaga);
}

function* watchUpdateNote() {
  yield takeEvery(UPDATE_NOTE, updateNoteSaga);
}

export default function* rootSaga() {
  yield all([
    watchFetchNotes(),
    watchAddNote(),
    watchRemoveNote(),
    watchUpdateNote()
  ]);
}
