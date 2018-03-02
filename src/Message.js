import React, { Component } from 'react';

import { canonicalValue } from './fluent-utils';

/**
 * Message
 * 
 * Component rendering a canonical representation of a Fluent Message or Term.
 */

class Message extends Component {
  render() {
    return (
        <div className="Message">
        <span className="Message-id">{this.props.message.id.name}</span>
        <span className="Message-value">{canonicalValue(this.props.message)}</span>
        </div>
    );
  }
}

export default Message;
