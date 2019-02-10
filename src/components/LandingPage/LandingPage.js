import React, { Component } from 'react';
import './LandingPage.css';

import IntroVideoSlider from './IntroVideoSlider/IntroVideoSlider';
import TrendingCourse from './TrendingCourse/TrendingCourse';
import MBA from './MBA/MBA';
import SkillUp from './SkillUp/SkillUp';
import Testimonial from './Testimonial/Testimonial';
import MediaBoard from './MediaBoard/MediaBoard';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <IntroVideoSlider />
        <TrendingCourse />
        <MBA />
        <SkillUp />
        <Testimonial />
        <MediaBoard />      
      </div>
    );
  }
}

export default LandingPage;
