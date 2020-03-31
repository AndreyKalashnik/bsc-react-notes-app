import reducer from ".";
import { FETCH_NOTES_PENDING } from "../actions";

describe("notes reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      notes: [],
      fetching: false,
      error: null
    });
  });

  it("should handle FETCH_NOTES_PENDING", () => {
    expect(
      reducer([], {
        type: FETCH_NOTES_PENDING
      })
    ).toEqual({
      fetching: true
    });
  });
});
