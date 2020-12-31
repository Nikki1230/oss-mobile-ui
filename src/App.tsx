import React from 'react';
import logo from './logo.svg';
import {Button} from "antd-mobile";
import './App.css';
import Project from './containers/Project/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Project />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button type="warning">我是一个按钮</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
