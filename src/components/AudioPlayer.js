import React from "react";

class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <audio
          ref="audio_tag"
          src="http://eiger.langcen.cam.ac.uk/audio1/languages/arabic/features/CD_EGY1_1.mp3"
          controls
        />
      </div>
    );
  }
}

export default AudioPlayer;

// import React from "react";

// const AudioPlayer = ({ resources }) => {
//   console.log("[AudioPlayer] - resourceItem", resources);

//   return <p>{resources.name}</p>;
// };

// export default AudioPlayer;
