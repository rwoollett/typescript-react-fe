import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './scss/labshome.scss';
//import style from './scss/labshome.scss';
import App from 'components/App';

ReactDOM.render(
  (
      <BrowserRouter>
        <App title="Front Ends" />
        <div className="footer">
            <div className="container">
              <p>The Javascript/ Typescript laboratories. 
                Contact: Programming Laboratory.</p>
            </div>
          </div>
      </BrowserRouter>
    ),
  document.getElementById('app')
);
