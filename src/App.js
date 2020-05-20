import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Main from './components/Main';
import Team from './components/Team';
import AboutApp from './components/AboutApp';
import Contact from './components/Contact';
import Footer from './components/common/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/aboutApp" component={AboutApp} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
