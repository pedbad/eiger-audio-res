import React from "react";

const LanguageItem = ({ language, onLanguageSelect }) => {
  return (
    <div
      onClick={() => onLanguageSelect(language)}
      className="language-item item"
    >
      <div className="content">
        <p className="language-text header">
          <i className={`${language.lcode} flag`} /> {language.lname}
        </p>
      </div>
    </div>
  );
};

export default LanguageItem;
