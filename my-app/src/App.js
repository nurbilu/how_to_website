import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Prod } from './features/counter/Prod';
import Login from './features/counter/Login';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Prod />
        <Login />
    </div>
  );
}

export default App;
