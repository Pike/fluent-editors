import React, { Component } from 'react';
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
          <MessageList file="example.ftl"/>
        </section>
      </div>
    );
  }
}

export default App;
