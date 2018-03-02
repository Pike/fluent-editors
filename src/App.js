import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageList from './MessageList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Edit Fluent messages</h1>
        </header>
        <section className="App-body">
          <MessageList messages={ this.props.messages } messageEditing={ this.props.messageEditing }/>
        </section>
      </div>
    );
  }
}

export default connect(({ messages, messageEditing }) => ({ messages, messageEditing }))(App);
