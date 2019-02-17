import React from 'react';
import './Card.css';

const Card = ({Video}) => {  
    const {video_url,
        index,
        title,
        url_link
    } = Video;

    let css_class = "video_player_trending_card";
    return (
        <div className={css_class} id={`trending_video_card-${index}`}>
        <a href={url_link} >
            <div class="row">
                <div class="col-md-12 col-xs-12 video_frame">
                    <img src={"https://www.careeranna.com/assets/main_page_video_images/"+video_url} alt={title}/>
                </div>
                <div className="video_title">
                    {title}
                </div>
        </div></a>
        </div>
    );
}

export default Card;
