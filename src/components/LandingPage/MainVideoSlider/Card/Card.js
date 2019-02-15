import React, { Component } from 'react';
import './Card.css';
import YouTube from 'react-youtube';

const Card = ({Video, current_index}) => {  
    const {video_url,
        index
    } = Video;

    
    const opts = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

    let css_class = "video_player_trending_card active";
    return (
        <div className={css_class} id={`trending_video_card-${index}`}>
            <div class="row">
                <div class="col-md-12 col-xs-12 video_frame">
                    <YouTube videoId={video_url} opts={opts}  />

                </div>
                <div className="video_title">
                    Cubes Intro
                </div>
        </div>
        </div>
    );
}

export default Card;
