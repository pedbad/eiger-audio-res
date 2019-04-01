import React from "react";

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div className="ui info message divided grid audio-container ">
        <div className="row">
          <div className="eight wide column">
            <div className="ui teal ribbon label">
              <i className="music icon" /> {this.props.resources.name}
            </div>
          </div>
          <div className="eight wide column">
            <audio
              ref={this.myRef}
              src={this.props.resources.fsource}
              controls
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
