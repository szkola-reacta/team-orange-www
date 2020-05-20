import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Main from './components/Main';
import Team from './components/Team';
import AboutApp from './components/AboutApp';
import Contact from './components/Contact';
import Footer from './components/common/Footer';

>>>>>>> 7176a9553890c5c7222a02b723318b6dc0985732

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
      <Header/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/aboutApp" component={AboutApp} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer/>
>>>>>>> 7176a9553890c5c7222a02b723318b6dc0985732
    </div>
  );
}

export default App;
