import React, { useState } from "react";
import PropTypes from "prop-types";
import { withTranslation } from 'react-i18next';

const NoteDetails = ({t, updateNote, removeNote, match, location, history}) => {
  const { id } = match.params;
  const { text } = location.state;
  const [edit, setEdit] = useState(false);
  const [noteText, setText] = useState(text);

  function handleUpdate(e) {
    e.preventDefault();
    updateNote(id, noteText);
    history.push('/')
  };
  
  function handleRemove(e) {
    e.preventDefault();
    removeNote(id);
    history.push('/')
  };

  return (
    <section className="section">
      <div className="container">
        {edit ? (
          <form onSubmit={handleUpdate}>
            <div className="field">
              <div className="control">
                <input
                  type="text"
                  value={noteText}
                  onChange={e => setText(e.target.value)}
                  className="input"
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button type="submit" className="button is-link">
                  {t("saveUpdates")}
                </button>
              </div>
              <div className="control">
                <button
                  onClick={() => setEdit(false)}
                  className="button is-link is-light"
                >
                  {t("cancel")}
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="card">
            <div className="card-content">
              <h2 className="subtitle is-5">{text}</h2>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item">
                <button
                  onClick={() => setEdit(true)}
                  className="button is-info"
                >
                  {t("edit")}
                </button>
              </div>
              <div className="card-footer-item">
                <button
                  onClick={handleRemove}
                  className="button is-danger"
                >
                  {t("delete")}
                </button>
              </div>
            </footer>
          </div>
        )}
      </div>
    </section>
  );
};

NoteDetails.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  }),
  updateNote: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired,
};

export default withTranslation()(NoteDetails);
