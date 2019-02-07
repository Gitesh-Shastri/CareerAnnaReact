import React, { Component } from 'react';
import './IntroVideoSlider.css';

class IntroSlider extends Component {
  render() {
    return (
      <div className="IntroSlider">
      <div class="row">
      <div class="col-sm-5 col-md-6"></div>
        <div class="col-md-6">
            <button class="explore pull-right"><i class="fa fa-caret-down"></i>&nbsp; explore</button>  
            <br/>
            <hr class="line"/>
        </div>
      </div>
      <div class="video_slider row">
        <div class="col-md-1 padding_of_arrow"></div>
        <div class="col-md-1"><i class="fa fa-chevron-circle-left"></i></div> 
        <div class="col-md-4">
        <iframe src="https://www.youtube.com/embed/Kzd_J8gF9ME?autoplay=1;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>         
        <div class="col-md-4 introheading"><h4 class="heading">A single online form to <br/>connect you to multiple<br/>banks.</h4><p class="subheading">To world class programs A single online <br/>form to.</p></div>
        <div class="col-md-2"><i class="fa fa-chevron-circle-right"></i></div>
      </div>
      <div class="row">
        <div class="col-sm-5 col-md-6 "><h4 class="choose">Choose the Language of Your Choice. </h4></div> 
        <div class="col-md-1"><h4 class="english">English</h4></div>
        <div class="width"></div>
            <div class="col-md-1 multi"><h4>हिंदी</h4></div>
            <div class="col-md-1 multi"><h4>தமிழ்</h4></div>
            <div class="col-md-1 multi"><h4>తెలుగు</h4></div>
      </div> 
      <div class="row">
        <div class="col-sm-5 col-md-6 upcoming_heading"><h4>upcoming languages</h4></div>   
        <div class="col-md-1 gujrati"><h4>ગુજરાતી</h4></div>
            <div class="col-md-1"><h4>বাংলা</h4></div>
            <div class="col-md-1"><h4> മലയാളം </h4></div>
            <div class="col-md-1"><h4>ਪੰਜਾਬੀ</h4></div>
            <div class="col-md-1"><h4> मराठी </h4></div>
            <div class="col-md-1"><h4>  ಕನ್ನಡ  </h4></div>
      </div>
      </div>
    );
  }
}

export default IntroSlider;
