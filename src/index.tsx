import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HttpBoundary} from "./components/boundary/HttpBoundary";

ReactDOM.render(
  <React.StrictMode>
      <HttpBoundary>
          <App />
      </HttpBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
