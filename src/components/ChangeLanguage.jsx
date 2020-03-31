import React from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();

  return (
    <div className="control">
      <div className="select">
        <select onChange={e => i18n.changeLanguage(e.target.value)}>
          <option value="cz">🇨🇿 Čeština</option>
          <option value="en" selected>
          🇬🇧 English
          </option>
        </select>
      </div>
    </div>
  );
};

export default ChangeLanguage;
