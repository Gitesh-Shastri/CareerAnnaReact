import React, { Component } from 'react';
import './MainVideoSlider.css';

import Card from './Card/Card';

class MainVideoSlider extends Component {

  constructor(props){
		super(props);
		this.state = {
			videos_playlist: [
                {
                    video_url: "fK0Hqhq86Bg?ecver=2",
                    index: 0,
                },{
                    video_url: "Odw8S0WExac?ecver=2",
                    index: 1,
                },{
                    video_url: "6ussc-htZtc?ecver=2",
                    index: 2,
                },{
                    video_url: "B9-2GqctIyE?ecver=2",
                    index: 3,
                }
            ],
            video_item: {
                video_url: "fK0Hqhq86Bg?ecver=2",
                index: 0,
            },
            title: props.title,
            disabled: true		
		}
  }

  timer() {
    if(this.state.video_item.index == this.state.videos_playlist.length-1) { 
        this.setState({
          video_item: this.state.videos_playlist[0]
        })
    } else {
    this.setState({
      video_item: this.state.videos_playlist[this.state.video_item.index+1]
    })
}
  }


  componentDidMount() {
    if(this.state.title == 'Trending') {
      this.intervalId = setInterval(this.timer.bind(this), 3000);
    } else {
      this.intervalId = setInterval(this.timer.bind(this), 4000);  
    }
  
}
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  nextProperty = () => {
		if(this.state.video_item.index != undefined){
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
      <div className="col col-sm-12 heading_small">
      {this.state.title}
      </div>
        <div className="row large_slider">
          <div className="col col-md-3 video_box ">
            <div className="video_box_demo">
              <div className="heading">{this.state.title}</div>
              <div className="subheading">Videos</div>
              <hr className="trending_line"/>
              <button 
					      class="next_video_prev"
                onClick={() => this.prevProperty()} 
                disabled={video_item.index==0}
                hidden={video_item.index==0}><i class='fa fa-angle-left'></i>
              </button>
            </div>
          </div>
          <div className="col col-sm-12 col-md-8 video_player_list">
            <div className="video_playlist" style={{
				'transform': `translateX(-${video_item.index*(100/videos_playlist.length)+4}%)`
			}}>
              {
                videos_playlist.map((particular_video, i) => 
                <div onMouseEnter={() => this.clearIntervalMouse()} onMouseLeave={() => this.startIntervalMouse()}>
						    <Card key={i} Video = {particular_video} current_index = {video_item.index} />
                </div>)
              }
            </div>
          </div>
          <div className="col-md-1">
          <button 
			 		class="next_video_right"
					onClick={() => this.nextProperty()} 
					disabled={video_item.index==videos_playlist.length-1}
					hidden={video_item.index==videos_playlist.length-1}
        ><i class='fa fa-angle-right'></i></button>
          </div>
          <div className="col col-sm-12 arrow_small">
          <button 
					      class="next_video_prev_small"
                onClick={() => this.prevProperty()} 
                disabled={video_item.index==0}
                hidden={video_item.index==0}><i class='fa fa-angle-left'></i>
              </button>
          <button 
			 		class="next_video_right_small pull-right"
					onClick={() => this.nextProperty()} 
					disabled={video_item.index==videos_playlist.length-1}
					hidden={video_item.index==videos_playlist.length-1}
        ><i class='fa fa-angle-right'></i></button>     
          </div>
      </div>
      </div>
    );
  }
}

export default MainVideoSlider;
