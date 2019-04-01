import React from "react";
import LanguageItemResourceList from "./LanguageItemResourceList";

const LanguageDetail = ({ language }) => {
  if (!language) {
    return <div>Loading....</div>;
  }

  console.log("[LanguageDetail] - language.resource ", language.resource);

  const renderedList = language.resource.map(res => {
    return <LanguageItemResourceList key={res.rid} resources={res} />;
  });

  return (
    <div className="language-detail">
      <div className="ui segment">
        <div className="ui inverted segment language-title-label">
          <h6 className="ui horizontal fitted divider">
            <i className={`${language.lcode} flag`} /> {language.lname}
          </h6>
        </div>

        {renderedList}
      </div>
    </div>
  );
};

export default LanguageDetail;
