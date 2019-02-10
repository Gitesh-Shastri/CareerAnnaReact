import React, { Component } from 'react';
import './IntroVideoSlider.css';

class IntroSlider extends Component {
  render() {
    return (
      <div className="IntroSlider">
      <div class="row">
        <div class="col-md-6">
            <button class="explore pull-left"><i class="fa fa-caret-down"></i>&nbsp; explore</button>  
            <br/>
            <hr class="line"/>
        </div>
      </div>
      <div class="video_slider row">
        <div class="col-md-5 hidden-xs">
        <iframe title="video_frame" src="https://www.youtube.com/embed/Kzd_J8gF9ME" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>         
        <div class="col-md-7 introheading"><h4 class="heading">A single online form to <br/>connect you to multiple<br/>banks.</h4><p class="subheading">To world class programs A single online <br/>form to.</p></div>
      </div>
      <div class="row choose_language">
        <div class="col-sm-5 col-md-5 "><h4 class="choose">Choose the Language of Your Choice. </h4></div>
        <div className="col-md-7">
          <div className="language">
            <button className="language_selector language_active">English</button>
            <button className="language_selector">हिंदी</button>
            <button className="language_selector">தமிழ்</button>
            <button className="language_selector">తెలుగు</button>
          </div>
        </div>
        </div> 
        <div className="row upcoming_languages">
        <div class="col-sm-5 col-md-6 upcoming_heading"><h4>upcoming languages</h4></div>   
        <div class="row">
        <div class="col-md-1 gujrati"><h4>ગુજરાતી</h4></div>
            <div class="col-md-1 others"><h4>বাংলা</h4></div>
            <div class="col-md-1 others" ><h4> മലയാളം </h4></div>
            <div class="col-md-1 others"><h4>ਪੰਜਾਬੀ</h4></div>
            <div class="col-md-1 others"><h4> मराठी </h4></div>
            <div class="col-md-1 others"><h4>  ಕನ್ನಡ  </h4></div>
      </div>
        </div>
      </div>
    );
  }
}

export default IntroSlider;
