/* global fetch */
import React, { Component } from 'react';
import Message from './Message';
import EditableMessage from './EditableMessage';
import { parse } from 'fluent-syntax';

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
    this.state = {
      messages: [],
      messageEditing: 0
    };
  }


  render() {
    return (
      <div className="Message-list">
        {this.renderMessages()}
      </div>
    );
  }
  async componentDidMount() {
    let response = await fetch(this.props.file);
    let content = await response.text();
    let resource = parse(content);
    this.setState({
      messages: resource.body.filter(entry=>entry.type==="Message"),
      messageEditing: 0
    });
  }

  renderMessages() {
    let messages = [];
    let messageEditing = this.state.messageEditing;
    this.state.messages.forEach(function(msg, i) {
      let CurrentMessage = i===messageEditing ? EditableMessage : Message;
      let rv = <CurrentMessage key={i} message={msg} />;
      messages.push(rv);
    });
    return messages;
  }
}


export default MessageList;
