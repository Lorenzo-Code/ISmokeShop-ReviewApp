import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SMSForm from './SMSForm';
import Library from './Contacts/Library';
import { Button } from 'reactstrap';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Enter your Number Below to recive a link to google to leave us a review </h1>
          <div><SMSForm /></div>
        </header>
      </div>
    );
  }
}

export default App;
