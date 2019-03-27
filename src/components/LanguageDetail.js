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
        <h4 className="ui header">{language.lname}</h4>
        {renderedList}
      </div>
    </div>
  );
};

export default LanguageDetail;
