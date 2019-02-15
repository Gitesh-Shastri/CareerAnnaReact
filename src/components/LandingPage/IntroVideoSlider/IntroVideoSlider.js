import React, { Component } from 'react';
import './IntroVideoSlider.css';
import YouTube from 'react-youtube';
import {Animated} from "react-animated-css";
import WOW from "wowjs";

class IntroSlider extends Component {

  constructor(props) {
    super(props);

  }

  onEnd = (event) => {
    // access to player in all event handlers via event.target
    event.target.seekTo(0);
  }

  onReady = (event) => {
 //   event.target.playVideo();
  }

  
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() { 

    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div className="IntroSlider">
        <div className="row">
        <div className="col-md-5 player_main d-none d-md-block">
        <YouTube videoId="Kzd_J8gF9ME?autoplay=1" opts={opts} onReady={this.onReady} onEnd={this.onEnd} />
        </div>
          {/* 
            <iframe title="video_frame" src="https://www.youtube.com/embed/Kzd_J8gF9ME?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div> */}
          <div className="col-md-7 d-none d-sm-block homepage_heading">
          <div className="wow zoomIn" data-wow-offset='50' data-wow-delay='2s' >
            <h4 class="heading">Interest Based Learning Network</h4>
          </div>
          <div className="wow zoomIn" data-wow-offset='100' data-wow-delay='3s' >
            <p class="subheading">P2P Learning & Knowledge sharing platform in Local Language through Videos </p>
            <p class="subsubheading"> Providing Indians the chance to access Quality Indigenous Content</p>
            <p class="subsubsubheading">Empowering Next 500 mm Internet Users of India</p>
          </div>
          <hr/>
          </div>
          <div className="col-md-7 d-block d-sm-none homepage_heading">
          <div className="wow zoomIn" data-wow-offset='50' data-wow-delay='0.1s' >
            <h4 class="heading">Interest Based Learning Network</h4>
          </div>
          <div className="wow zoomIn" data-wow-offset='100' data-wow-delay='0.2s' >
            <p class="subheading">P2P Learning & Knowledge sharing platform in Local Language through Videos </p>
            <p class="subsubheading"> Providing Indians the chance to access Quality Indigenous Content</p>
            <p class="subsubsubheading"><i>Empowering Next 500 mm Internet Users of India</i></p>
          </div>
          </div>
          
          <div class="col-md-12 choose_language row">
            <div class="col-sm-12 col-md-5 "><h4 class="choose">Choose the Language of Your Choice. </h4></div>
            <div className="col-md-7 col-sm-12">
              <div className="language">
                <a href="/">
                <button className="language_selector language_active">English</button></a>
                <a href="https://www.careeranna.com/hindi">
                <button className="language_selector">हिंदी</button>
                </a>
                <a href="https://www.careeranna.com/tamil">
                <button className="language_selector">தமிழ்</button>
                </a>
                <a href="https://www.careeranna.com/telugu">
                <button className="language_selector">తెలుగు</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 row categories">
            <div className="col-sm-12 col-md-5 upcoming_heading"><h4>Trending Catgories</h4></div>   
              <div className="category"><h4>Politics</h4></div>
              <div className="category"><h4>Sports</h4></div>
              <div className="category" ><h4>Economy</h4></div>
              <div className="category"><h4>Business</h4></div>
              <div className="category"><h4>Technology</h4></div>
              <div className="category"><h4>MBA</h4></div>
           </div>
        </div>
      </div>
    );
  }
}

export default IntroSlider;
