import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> 7176a9553890c5c7222a02b723318b6dc0985732
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<<<<<<< HEAD
  <React.StrictMode>
    <App />
  </React.StrictMode>,
=======
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
>>>>>>> 7176a9553890c5c7222a02b723318b6dc0985732
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
