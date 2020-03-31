import { connect } from "react-redux";
import { removeNote, fetchNotesPending } from "../actions";
import NoteList from "../components/NoteList";

const mapStateToProps = state => ({
  notes: state.notes,
  fetching: state.fetching,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotesPending()),
  removeNote: id => dispatch(removeNote(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
