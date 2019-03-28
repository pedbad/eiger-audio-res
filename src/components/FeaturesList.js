import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import AudioPlayer from "./AudioPlayer";

export default class Test extends Component {
  state = {
    activeIndex: 0
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    const audioItem = this.props.resources.resItem.map(res => {
      console.log("audio resource is: ", res);
      return <AudioPlayer key={res.resid} resources={res} />;
    });

    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === -1}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          {this.props.resources.resUnit}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === -1}>
          {this.props.resources.label}
          {audioItem}
        </Accordion.Content>
      </Accordion>
    );
  }
}
