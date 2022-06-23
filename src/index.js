import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
const container = document.querySelector("#root");
const root = createRoot(container); 
root.render(
  <HashRouter>
  <App tab="home" />
  </HashRouter>
  );
// root.render(<App tab="home" />);
// ReactDOM.render(<App />, document.querySelector("#root"))