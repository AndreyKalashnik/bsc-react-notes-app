import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withTranslation } from 'react-i18next';
import Note from "./Note";
import LoadingSpinner from "./LoadingSpinner";

const NoteList = ({ t, notes, fetching, error, removeNote, fetchNotes }) => {
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await fetchNotes();
  }
  
  if (error) {
    return (
      <div className="notification is-info">{error}</div>
    )
  }
  if (fetching) {
    return (
      <LoadingSpinner />
    )
  }
  return (
    <section className="section">
      <div className="container">
        {Array.isArray(notes) && notes.length ? (
          <h2 className="subtitle is-4">{t("allNotes")}</h2>
        ) : <h2 className="subtitle is-4">{t("noNotes")}</h2>}
        <div className="columns is-multiline">
          {notes.map(note => (
            <Note
              key={note.id}
              id={note.id}
              text={note.title}
              removeNote={e => {
                e.preventDefault();
                removeNote(note.id);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ),
  fetching: PropTypes.bool.isRequired,
  removeNote: PropTypes.func.isRequired,
  fetchNotes: PropTypes.func.isRequired
};

export default withTranslation()(NoteList);
