import React, { Component } from "react";

import "./VideoSlider.css";
import Card from './Card/Card';

class VideoSlider extends Component {

    constructor(props){
		super(props);
		this.state = {
			videos_playlist: [
                {
                    image_url: "https://www.careeranna.com/thumbnail/2018-11-15-79196-thumbnail.jpg",
                    video_url: "https://careeranna.s3.amazonaws.com/online/wp-content/uploads/2017/10/12052102/stclv3.mp4",
                    title: "Games and Tournaments 1",
                    duration: "11:00",
                    index: 0,
                    views: "1,123",
                    date: "15/11/2018"
                },{
                    image_url: "https://www.careeranna.com/thumbnail/2018-11-15-87168-thumbnail.jpg",
                    video_url: "https://careeranna.s3.amazonaws.com/online/wp-content/uploads/2017/10/12052102/stclv3.mp4",
                    title: "Games and Tournaments 2",
                    duration: "11:00",
                    index: 1,
                    views: "1,123",
                    date: "15/11/2018"
                },{
                    image_url: "https://www.careeranna.com/thumbnail/2018-12-23-67994-thumbnail.jpg",
                    video_url: "https://careeranna.s3.amazonaws.com/online/wp-content/uploads/2017/10/12052102/stclv3.mp4",
                    title: "Statement & Conclusion 01",
                    duration: "11:00",
                    index: 2,
                    views: "1,123",
                    date: "15/11/2018"
                },{
                    image_url: "https://www.careeranna.com/thumbnail/2018-12-23-3609-thumbnail.jpg",
                    video_url: "https://careeranna.s3.amazonaws.com/online/wp-content/uploads/2017/10/12052102/stclv3.mp4",
                    title: "Games and Tournaments 2",
                    duration: "11:00",
                    index: 3,
                    views: "1,123",
                    date: "15/11/2018"
                },{
                    image_url: "https://www.careeranna.com/thumbnail/2018-12-23-3609-thumbnail.jpg",
                    video_url: "https://careeranna.s3.amazonaws.com/online/wp-content/uploads/2017/10/12052102/stclv3.mp4",
                    title: "Games and Tournaments 2",
                    duration: "11:00",
                    index: 4,
                    views: "1,123",
                    date: "15/11/2018"
                },{
                    image_url: "https://www.careeranna.com/thumbnail/2018-12-23-3609-thumbnail.jpg",
                    video_url: "https://careeranna.s3.amazonaws.com/online/wp-content/uploads/2017/10/12052102/stclv3.mp4",
                    title: "Games and Tournaments 2",
                    duration: "11:00",
                    index: 5,
                    views: "1,123",
                    date: "15/11/2018"
                },
            ],
            video_item: {
                image_url: "https://www.careeranna.com/thumbnail/2018-11-15-79196-thumbnail.jpg",
                video_url: "https://careeranna.s3.amazonaws.com/online/wp-content/uploads/2017/10/12052102/stclv3.mp4",
                title: "Games and Tournaments 1",
                duration: "11:00",
                index: 0,
                views: "1,123",
                date: "15/11/2018"
            },
            disabled: true		
		}
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


  render() {
	const {videos_playlist, video_item} = this.state;
    
    return (
    <section class="video_slider row">
			<div class={`video_card_view active-video-slide-${video_item.index}`}>
			<div class="video_view_wrapper" style={{
				'transform': `translateX(-${video_item.index*(100/videos_playlist.length)}%)`
			}}>
					{
						videos_playlist.map((video_item, i) => 
						<Card key={i} Video = {video_item}/>)
					}
				</div>
			</div>
            <div class="col-md-12 hidden-lg hidden-xs col-xs-12 video_card_view_small">
                <div class="col-xs-1"></div>
                <div class="col-xs-8">
                    <Card key={video_item.index} Video = {video_item}/>
                </div>
                <div class="col-xs-2"></div>
            </div>
            <div class="col-md-12 col-xs-12 arrow_video">
			<button 
					class="next_video_left video_prev"
					onClick={() => this.prevProperty()} 
					disabled={video_item.index==0}
					hidden={video_item.index==0}
				><i class='fa fa-caret-left'></i></button>
			 <button 
			 		class="next_video_right video_next"
					onClick={() => this.nextProperty()} 
					disabled={video_item.index==videos_playlist.length-1}
					hidden={video_item.index==videos_playlist.length-1}
        ><i class='fa fa-caret-right'></i></button>
			</div>
    </section>
    );
  }
}
export default VideoSlider;
