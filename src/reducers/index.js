import {
  FETCH_NOTES_PENDING,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_ERROR,
} from "../actions";

const initialState = {
  notes: [],
  fetching: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES_PENDING:
      return {
        ...state,
        fetching: true
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        notes: action.notes,
        fetching: false
      };
    case FETCH_NOTES_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default rootReducer;
