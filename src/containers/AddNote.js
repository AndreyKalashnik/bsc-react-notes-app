import { connect } from "react-redux";
import { addNote } from "../actions";
import AddNote from "../components/AddNote";

const mapDispatchToProps = dispatch => ({
  addNote: title => dispatch(addNote(title))
});

export default connect(null, mapDispatchToProps)(AddNote);
