import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import FeaturesList from "./FeaturesList";

export default class LanguageItemResourceList extends Component {
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

    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === -1}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          {this.props.resources.rname}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === -1}>
          <FeaturesList features={this.props.resources.features} />
        </Accordion.Content>
      </Accordion>
    );
  }
}
