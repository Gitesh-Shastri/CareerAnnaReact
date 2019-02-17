import React, { Component } from 'react';
import './LandingPage.css';

import IntroVideoSlider from './IntroVideoSlider/IntroVideoSlider';
import MainVideoSlider from './MainVideoSlider/MainVideoSlider';
import TrendingCourse from './TrendingCourse/TrendingCourse';
import MBA from './MBA/MBA';
import SkillUp from './SkillUp/SkillUp';
import Testimonial from './Testimonial/Testimonial';
import MediaBoard from './MediaBoard/MediaBoard';
/* 
import TrendingCourse from './TrendingCourse/TrendingCourse';
import MainVideoSlider from './MainVideoSlider/MainVideoSlider';
import TrendingVideosSlider from './TrendingVideoSlider/MainVideoSlider';
 */
class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <IntroVideoSlider />
        <MainVideoSlider title={"Trending"}/>
        <MainVideoSlider title={"Popular"}/>
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
