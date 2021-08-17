import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import {
  BrowserRouter as Router
} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//console.log("about to render index.js");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
