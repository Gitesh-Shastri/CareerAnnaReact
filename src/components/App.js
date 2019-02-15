import React, { Component } from 'react';
import './App.css';

import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import LandingPage from './LandingPage/LandingPage';

import Footer from './Footer/Footer';
/*
import ParticularCourse from './ParticularCourse/ParticularCourse';
import CertificationCourse from './CertificationCourse/CertificationCourse';
 */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navigation />
      <LandingPage />
      <Footer />
      {/* 
          <Route path="/CareerAnnaContent" exact component={ ParticularCourse } />
          <Route path="/CertificationCourse" exact component={ CertificationCourse } /> 
          <Route path="*" component={ LandingPage } /> 
          <LandingPage />
        */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
