import React from "react";
import LanguageItem from "./LanguageItem";

const LanguageList = ({ languages, onLanguageSelect }) => {
  //console.log("[LanguageList] ", languages);
  const languageList = languages.map(language => {
    return (
      <LanguageItem
        onLanguageSelect={onLanguageSelect}
        language={language}
        key={language.id}
      />
    );
  });

  return (
    <div className="language-list ui relaxed divided list">{languageList}</div>
  );
};

export default LanguageList;
