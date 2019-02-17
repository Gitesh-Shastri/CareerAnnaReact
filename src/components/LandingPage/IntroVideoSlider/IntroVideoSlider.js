import React, { Component } from 'react';
import './IntroVideoSlider.css';
import YouTube from 'react-youtube';
import WOW from "wowjs";

class IntroSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showVideo: true
    }
  }

  onEnd = (event) => {
    // access to player in all event handlers via event.target
    event.target.seekTo(0);
  }

  onReady = (event) => {
    event.target.playVideo();
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    const wow = new WOW.WOW();
    wow.init();
  }

  resize() {
    if(window.innerWidth <= 650) {
      this.setState({
        showVideo: false
      })
    } else {
      this.setState({
        showVideo: true
      })
    }
  }

  render() { 

    const showVideo = this.state.showVideo;
    return (
      <div className="IntroSlider">
        { showVideo ? 
        <div className="row">
        <div className="col-md-5 pr-0 player_main d-none d-md-block">
        <div class="main_logo">
        </div>
        <YouTube id="youtube" showinfo={false} videoId="Kzd_J8gF9ME" onReady={this.onReady} onEnd={this.onEnd} /> 
        </div>
        <div className="col-md-7 px-0 homepage_heading">
        <div className="wow zoomIn" data-wow-offset='2.5' data-wow-delay='0.025s' >
       <h4 class="heading mb-0">Interest Based Learning Network</h4>
      </div>
      <div className="wow zoomIn" data-wow-offset='5' data-wow-delay='0.5s' >
      <p class="subheading">P2P Learning & Knowledge sharing platform in Local Language through Videos </p>
      <p class="subsubheading"> Providing Indians the chance to access Quality Indigenous Content</p>
      <p class="subsubsubheading"><i>Empowering Next 500 mn Internet Users of India</i></p>
      </div>
      </div>
      </div>
    : 
    <div className="row">
    <div className="col-12 p-0 main_header_small">
    <div className="col-md-7 px-0 d-block d-md-none homepage_heading">
    <div className="background_small">
      <div className="heading_small_internet">
        Interest Based
      </div>
      <h4 class="heading_small_learning"> Learning Network</h4>
      <p class="subheading">P2P Learning & Knowledge sharing platform in Local Language through Videos </p>
      <div className="below_background_small">
      <p class="subsubheading"> Providing Indians the chance to access Quality Indigenous Content</p>
      <p class="subsubsubheading"><i>Empowering Next 500 mn Internet Users of India</i></p>
      <hr/></div>
      </div>
    </div>
    </div>
    </div>
   }
          
          
          <div class="col-md-12 choose_language row">
            <div class="col-12 px-0 col-md-5 "><h4 class="choose">Choose the Language of Your Choice. </h4></div>
            <div className="col-md-7 px-0 col-12">
              <div className="language">
                <a href="https://www.careeranna.com/english">
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
          <div className="col-md-12 col-12 row categories">
            <div className="col-12 col-md-5 px-0 upcoming_heading"><h4>Trending Catgories</h4></div>   
            <div className="col-md-7 col-12 px-0 row">
              <div className="col-4 col-md-2 px-0 category"><h4>Politics</h4></div>
              <div className="col-4 col-md-2 px-0 category"><h4>Sports</h4></div>
              <div className="col-4 col-md-2 px-0 category" ><h4>Economy</h4></div>
              <div className="col-4 col-md-2 px-0 category"><h4>Business</h4></div>
              <div className="col-4 col-md-2 px-0 category"><h4>Technology</h4></div>
              <div className="col-4 col-md-2 px-0 category"><h4>MBA</h4></div>
              </div>
           </div>
        </div>
    );
  }
}

export default IntroSlider;
