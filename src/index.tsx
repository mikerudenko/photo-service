import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './application';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
