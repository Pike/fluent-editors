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
    this.state = {
      messages: [],
      mode: "review",
    };
  }


  render() {
    return (
        <div>
        <ModeList modes={Object.keys(this.modes)} mode = {this.state.mode} container={this} />
      <div className="Message-list">
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


class ModeList extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.container.setState({
            mode: event.target.value
        });
    }
    render() {
        return <div className="mode-selector">
        {
            this.props.modes.map(mode => (
                <span key={mode}><input name="mode" type="radio" value={mode} onChange={this.handleChange} checked={mode === this.props.mode} /><label>{mode}</label></span>
            ))
        }
        </div>;
    }
}

export default MessageList;
