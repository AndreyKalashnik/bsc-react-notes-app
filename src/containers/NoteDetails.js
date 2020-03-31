import { connect } from "react-redux";
import { updateNote, removeNote } from "../actions";
import NoteDetails from "../components/NoteDetails";

const mapDispatchToProps = dispatch => ({
  updateNote: (id, title) => dispatch(updateNote(id, title)),
  removeNote: id => dispatch(removeNote(id))
});

export default connect(null, mapDispatchToProps)(NoteDetails);
