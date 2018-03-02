import React, { Component } from 'react';

import { canonicalValue } from './fluent-utils';

import './EditableMessage.css';

/**
 * EditableMessage
 * 
 * Component rendering Fluent Editors.
 */

class EditableMessage extends Component {
  render() {
    return (
        <div className="Editable Message">
        <span className="Message-id">{this.props.message.id.name}</span>
        <span className="Message-value">{canonicalValue(this.props.message)}</span>
        </div>
    );
  }
}

export default EditableMessage;
