import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Prod } from './features/counter/Prod';
import Login from './features/counter/Login';

function App() {
  return (
    <div className="App">
      <Login />
      <img src={logo} className="App-logo" alt="logo" />
      <Prod />
    </div>
  );
}

export default App;
