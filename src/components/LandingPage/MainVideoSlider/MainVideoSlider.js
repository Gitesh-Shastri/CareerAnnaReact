import React, { Component } from 'react';
import './MainVideoSlider.css';

import Card from './Card/Card';

class MainVideoSlider extends Component {

  constructor(props){
    super(props);
    if(props.title === 'Trending') {
		this.state = {
			videos_playlist: [
      {
          video_url: "योगी आदित्यनाथ सरकार का 'गौ रक्षा' उपकर.png",
          index: 0,
          title: "योगी आदित्यनाथ सरकार का 'गौ रक्षा' उपकर",
          url_link: "https://www.careeranna.com/hindi/free/videos/GK/Yogi-Adityanath-govt-gau-raksha-CESS"
      },
                {
                    video_url: "अंतरिम बजट 2019.png",
                    index: 1,
                    title: "Interim Budget 2019",
                    url_link: "https://www.careeranna.com/hindi/free/videos/GK/Interim-Budget-2019-Hindi"
                },{
                    video_url: "ஹாக்கி உலகம் கப் 2018.png",
                    index: 2,
                    title: "ஹாக்கி உலகம் கப் 2018 ",
                    url_link: "https://www.careeranna.com/tamil/free/videos/GK/hockey-world-cup-2018-tamil"
                },{
                    video_url: "బ్యాడ్మింటన్ ప్రపంచ ఫెడరేషన్ - 2018.png",
                    index: 3,
                    title: "బ్యాడ్మింటన్ ప్రపంచ ఫెడరేషన్ - 2018",
                    url_link: "https://www.careeranna.com/telugu/free/videos/GK/bwf-world-tour-final-2018"
                },
                {
                  video_url: "बसवान समिति की रिपोर्ट.png",
                  index: 4,
                  title: "बसवान समिति की रिपोर्ट",
                  url_link: "https://www.careeranna.com/hindi/free/videos/UPSC/baswaan-committee-report-hindi"
                }
            ],
            video_item:  {
              video_url: "योगी आदित्यनाथ सरकार का 'गौ रक्षा' उपकर.png",
              index: 0,
              title: "Yogi Adityanath govt's 'gau raksha' CESS",
              url_link: "https://www.careeranna.com/hindi/free/videos/GK/Yogi-Adityanath-govt-gau-raksha-CESS"
          },
            title: props.title,
            disabled: true		
    }
  } else {
    this.state = {
			videos_playlist: [
        {
          video_url: "RTE अमेंडमेंट बिल.png",
          index: 0,
          title: "RTE अमेंडमेंट बिल",
          url_link: "https://www.careeranna.com/hindi/free/videos/UPSC/rte-amendment-bill"
      },
                {
                    video_url: "Miss Universe 2018.png",
                    index: 1,
                    title: "Miss Universe 2018",
                    url_link: "https://www.careeranna.com/telugu/free/videos/GK/miss-universe-2018"
                },{
                    video_url: "சூறாவளி புயல் Phethai 2018.png",
                    index: 2,
                    title: "சூறாவளி புயல் Phethai 2018",
                    url_link: "https://www.careeranna.com/tamil/free/videos/GK/cyclonic-storm-phethai-2018-tamil"
                },{
                    video_url: "இந்தியாவில் உள்ள முக்கிய ஆறுகள் -1.png",
                    index: 3,
                    title: "இந்தியாவில் உள்ள முக்கிய ஆறுகள் -1",
                    url_link: "https://www.careeranna.com/tamil/free/videos/GK/important-rivers-that-flow-through-india-tamill"
                },
                {
                  video_url: "ராபி ஆளுமை ஷக்திகண்டா தாஸ்.png",
                  index: 4,
                  title: "ராபி ஆளுமை ஷக்திகண்டா தாஸ்",
                  url_link: "https://www.careeranna.com/tamil/free/videos/GK/rbi-governer-shakti-kanta-das-tamil"
                }
            ],
            video_item:  {
              video_url: "RTE अमेंडमेंट बिल.png",
              index: 0,
              title: "RTE अमेंडमेंट बिल",
              url_link: "https://www.careeranna.com/hindi/free/videos/UPSC/rte-amendment-bill"
          },
            title: props.title,
            disabled: true		
    } 
  }
  }

   timer() {
//     if(this.state.video_item.index === this.state.videos_playlist.length-1) { 
//         this.setState({
//           video_item: this.state.videos_playlist[0]
//         })
//     } else {
//     this.setState({
//       video_item: this.state.videos_playlist[this.state.video_item.index+1]
//     })
// }
  }


  componentDidMount() {
    if(this.state.title === 'Trending') {
      this.intervalId = setInterval(this.timer.bind(this), 3000);
    } else {
      this.intervalId = setInterval(this.timer.bind(this), 4000);  
    }
  
}
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  nextProperty = () => {
		if(this.state.video_item.index !== undefined){
			const newIndex = this.state.video_item.index+1;
			this.setState({
				video_item: this.state.videos_playlist[newIndex]
			})
		}
  }

  prevProperty = () => {
    const newIndex = this.state.video_item.index-1;
    this.setState({
			video_item: this.state.videos_playlist[newIndex]
    })
  }

  clearIntervalMouse = () => {
    clearInterval(this.intervalId);
  }

  startIntervalMouse = () => {
    this.intervalId = setInterval(this.timer.bind(this), 2000);
  } 

  render() {

    const {videos_playlist, video_item} = this.state;

    return (
      <div className="MainVideoSlider">
      <div className="row large_slider">
      <div className="col-12 d-lg-none heading_small">
      <div className="heading_small_inside">
        <div className="heading_small_main">
        {this.state.title}
        </div>
        <div className="sub_small">
          Videos
        </div>
        <div class="line_small"/>
        </div>
      </div>
          <div className="pr-0 col-md-3 video_box ">
            <div className="video_box_demo">
              <div className="heading">{this.state.title}</div>
              <div className="subheading">Videos</div>
              <hr className="trending_line"/>
              <button 
					      class="next_video_prev"
                onClick={() => this.prevProperty()} 
                disabled={video_item.index===0}
                hidden={video_item.index===0}><i class='fa fa-angle-left'></i>
              </button>
            </div>
          </div>
          <div className="px-0 col-12 col-md-8 video_player_list">
            <div className="video_playlist" style={{
				'transform': `translateX(-${video_item.index*(100/videos_playlist.length)}%)`
			}}>
              {
                videos_playlist.map((particular_video, i) => 
                <div key={i} onMouseEnter={() => this.clearIntervalMouse()} onMouseLeave={() => this.startIntervalMouse()}>
						    <Card key={i} Video = {particular_video} />
                </div>)
              }
            </div>
          </div>
          <div className="px-0 col-md-1">
          <button 
			 		class="next_video_right"
					onClick={() => this.nextProperty()} 
					disabled={video_item.index>videos_playlist.length-3}
					hidden={video_item.index>videos_playlist.length-3}
        ><i class='fa fa-angle-right'></i></button>
          </div>
          <div className="col-12 d-lg-none arrow_small">
          <button 
					      class="next_video_prev_small"
                onClick={() => this.prevProperty()} 
                disabled={video_item.index===0}
                hidden={video_item.index===0}><i class='fa fa-caret-left'></i>
              </button>
          <button 
			 		class="next_video_right_small pull-right"
					onClick={() => this.nextProperty()} 
					disabled={video_item.index===videos_playlist.length-1}
					hidden={video_item.index===videos_playlist.length-1}
        ><i class='fa fa-caret-right'></i></button>     
          </div>
      </div>
      </div>
    );
  }
}

export default MainVideoSlider;
