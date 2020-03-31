import { addNote, ADD_NOTE } from ".";

describe("actions", () => {
  it("should create an action to add a note", () => {
    const title = "Pass the tests";
    const expectedAction = {
      type: ADD_NOTE,
      title
    };
    expect(addNote(title)).toEqual(expectedAction);
  });
});
