import React, { Component } from 'react';
import './Card.css';

const Card = ({Video}) => {  
    const {video_url,
        image_url,
        title,
        duration,
        date,
        views,
        index
    } = Video;  
    return (
        <div className="video_player_card" id={`card-${index}`}>
            <div class="row">
                <div class="col-md-12 col-xs-12 video_frame">
                <i class="fa fa-play-circle"></i>
                    <img src={image_url}/>
                </div>
                <div class="col-md-12 col-xs-12 video_title">
                    {title}
                </div>
                <div class="col-md-6 col-xs-6 video_view">
                    {views}
                </div>
                <div class="col-md-6 col-xs-6 video_publish">
                    {date}
                </div>
        </div>
        </div>
    );
}

export default Card;
