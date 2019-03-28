import React from "react";
import AudioPlayerList from "./AudioPlayerList";

const FeaturesList = ({ features }) => {
  console.log("[FeaturesList] - ", features);
  if (!features) {
    return <div>Loading....</div>;
  }

  const featList = features.map(feature => {
    var rows = [];
    for (var i = 0; i < feature.resItem; i++) {
      // note: we add a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      rows.push(<AudioPlayerList key={i} />);
    }

    return (
      <div className="feature-item ui segment" key={feature.ruid}>
        <p className="feature-label ui medium header">
          {feature.resUnit} <small>{feature.label}</small>
        </p>

        <p>Audio players here...</p>
        <p>{feature.resItem.length}</p>

        <AudioPlayerList resourceItem={feature.resItem} />

        <p />
      </div>
    );
  });

  return <div>{featList}</div>;
};

export default FeaturesList;
