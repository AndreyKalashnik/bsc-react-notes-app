import axios from "axios";
import { call } from "redux-saga/effects";
import { fetchNotesSaga, ROOT_URL } from "./";

describe("testing fetchNotesSaga", () => {
  it("should get notes from API and verify they ara equal", () => {
    const generator = fetchNotesSaga();
    const expected = generator.next();
    const actual = call(axios.get, ROOT_URL);

    expect(expected.value).toEqual(actual);
  });
});
