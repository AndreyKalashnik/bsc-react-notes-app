import React, { useState } from "react";
import { withTranslation } from "react-i18next";

const AddNote = ({ t, addNote }) => {
  const [input, setInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }
    addNote(input);
    setInput("");
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="subtitle is-4">{t("addNote")}</h2>
        <form onSubmit={handleSubmit}>
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="input"
                placeholder={t("noteInput")}
              />
            </div>
            <div className="control">
              <button
                type="submit"
                className="button is-link"
                disabled={!input}
              >
                {t("addNote")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default withTranslation()(AddNote);
