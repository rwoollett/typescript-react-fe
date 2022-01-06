import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import style from './scss/labshome.scss';
import App from './components/App';

ReactDOM.render(
  (<React.StrictMode>
    <React.Fragment>
      <BrowserRouter>
        <App title="Front Ends" />
        <div className={style.footer}>
            <div className={style.container}>
              <p>The Javascript/ Typescript laboratories. 
                Contact: Programming Laboratory.</p>
            </div>
          </div>
      </BrowserRouter>
    </React.Fragment>
  </React.StrictMode>),
  document.getElementById('app')
);
