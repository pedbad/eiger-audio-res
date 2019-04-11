import React from "react";
import LanguageItemResourceList from "./LanguageItemResourceList";

const LanguageDetail = ({ language }) => {
  if (!language) {
    return (
      <React.Fragment>
        <div class="ui top attached error message">
          <h3>
            <i class="exclamation circle icon" />
            Error
          </h3>
        </div>
        <div class="ui bottom attached segment">language not found ....</div>
      </React.Fragment>
    );
  }
  console.log("[LanguageDetail] - language.resource ", language.resource);

  if (!language.resource) {
    return (
      <React.Fragment>
        <div class="ui top attached error message">
          <h3>
            <i class="exclamation circle icon" /> Error
          </h3>
        </div>
        <div class="ui bottom attached segment">
          resource not found ........
        </div>
      </React.Fragment>
    );
  }

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
