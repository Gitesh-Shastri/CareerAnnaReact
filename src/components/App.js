import React, { Component } from 'react';
import './App.css';

import Navigation from './Navigation/Navigation';
import IntroVideoSlider from './IntroVideoSlider/IntroVideoSlider';
import TrendingCourse from './TrendingCourse/TrendingCourse';
import MBA from './MBA/MBA';
import SkillUp from './SkillUp/SkillUp';
import Footer from './Footer/Footer';
import Testimonial from './Testimonial/Testimonial';
import MediaBoard from './MediaBoard/MediaBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <IntroVideoSlider />
        <TrendingCourse />
        <MBA />
        <SkillUp />
        <Testimonial />
        <MediaBoard />
        <Footer />
      
      </div>
    );
  }
}

export default App;
