import React, { Component } from 'react';
import Message from './Message';
import EditableMessage from './EditableMessage';

import './MessageList.css';

/**
 * MessageList
 *
 * Component rendering a list of messages with Message components,
 * and a EditableMessage for the one referenced in `this.props.messageEditing`.
 */

class MessageList extends Component {
  render() {
    return (
      <div className="Message-list">
        {this.renderMessages()}
      </div>
    );
  }
  renderMessages() {
    let messages = [];
    let messageEditing = this.props.messageEditing;
    this.props.messages.forEach(function(msg, i) {
      let CurrentMessage = i===messageEditing ? EditableMessage : Message;
      let rv = <CurrentMessage key={i} message={msg} />;
      messages.push(rv);
    });
    return messages;
  }
}


export default MessageList;
