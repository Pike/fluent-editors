/* global fetch */
import React, { Component } from 'react';
import { Factory as ReviewFactory} from './base/index';
import { Factory as PreviewFactory} from './preview/index';
import { Factory as EditFactory} from './editing/index';
import { parse } from 'fluent-syntax/compat';

import './MessageList.css';

/**
 * MessageList
 *
 * Component rendering a list of messages with Message components,
 * and a EditableMessage for the one referenced in `this.props.messageEditing`.
 */

class MessageList extends Component {

  constructor(props) {
    super(props);
    this.modes = {
      editing: new EditFactory(),
      preview: new PreviewFactory(),
      review: new ReviewFactory(),
    };
    this.setMode = this.setMode.bind(this);
    this.setLayout = this.setLayout.bind(this);
    this.state = {
      messages: [],
      mode: "review",
      layout: "syntax",
    };
  }

  setMode(mode) {
      this.setState({mode: mode});
  }

  setLayout(layout) {
      this.setState({layout: layout});
  }

  render() {
    return (
        <div>
        <RadioList className="mode-selector" choices={Object.keys(this.modes)} name="mode" selected = {this.state.mode} onChange={this.setMode} />
        <RadioList className="mode-selector" choices={["syntax", "flowed"]} name="syntax" selected = {this.state.layout} onChange={this.setLayout} />
      <div className={`Message-list ${this.state.layout}-layout`}>
        {this.renderMessages()}
      </div>
      </div>
    );
  }
  async componentDidMount() {
    let response = await fetch(this.props.file);
    let content = await response.text();
    let resource = parse(content);
    this.setState({
      messages: resource.body.filter(
        entry => (
          entry.type === "Message" ||
          entry.type === "Term"
        ))
    });
  }

  renderMessages() {
    let messages = [];
    let factory = this.modes[this.state.mode];
    this.state.messages.forEach((msg, i) => {
      messages.push(factory.createComponent(msg));
    });
    return messages;
  }
}


class RadioList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.onChange(event.target.value);
    }
    render() {
        return <div className={this.props.className}>
        {
            this.props.choices.map(choice => (
                <span key={choice}><input name={this.props.name} type="radio" value={choice} onChange={this.handleChange} checked={choice === this.props.selected} /><label>{choice}</label></span>
            ))
        }
        </div>;
    }
}

export default MessageList;
