import React, { Component } from 'react';
import Header from "./components/Header";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="main-content">
          <div>main content</div>
          <div>side bar</div>
        </div>
      </div>
    );
  }
}

export default App;
