import React, { Component } from 'react';
import './App.css';

import {Route} from 'react-router';

import {BrowserRouter} from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import LandingPage from './LandingPage/LandingPage';

import ParticularCourse from './ParticularCourse/ParticularCourse';
import CertificationCourse from './CertificationCourse/CertificationCourse';
import Footer from './Footer/Footer';
/*
 */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navigation />
      <Route path="https://www.careeranna.in/CareerAnnaContent" exact component={ ParticularCourse } />
      <Route path="https://www.careeranna.in/CertificationCourse" exact component={ CertificationCourse } /> 
      <Route path="*" component={ LandingPage } /> 
      <Footer />
      {/* 
          <LandingPage />
        */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
