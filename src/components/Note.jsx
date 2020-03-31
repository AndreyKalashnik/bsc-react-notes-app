import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';

const Note = ({ t, id, text, removeNote }) => (
  <div className="column" style={{ maxWidth: "400px" }}>
    <div className="card">
      <div className="card-content">
        <h2 className="subtitle is-5">{text}</h2>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <Link
            to={{
              pathname: `/note/${id}`,
              state: { text }
            }}
          >
            <button className="button is-info">{t("details")}</button>
          </Link>
        </div>
        <div className="card-footer-item">
          <button onClick={removeNote} className="button is-danger">
            {t("delete")}
          </button>
        </div>
      </footer>
    </div>
  </div>
);

Note.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  removeNote: PropTypes.func.isRequired
};

export default withTranslation()(Note);
