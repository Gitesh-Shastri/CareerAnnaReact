import React, { Component } from 'react';
import './App.css';

import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import ParticularCourse from './ParticularCourse/ParticularCourse';
import LandingPage from './LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navigation />
          <Route path="/" exact component={ LandingPage } />
          <Route path="/CareerAnnaContent" exact component={ ParticularCourse } />
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
