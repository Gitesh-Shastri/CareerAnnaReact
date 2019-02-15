import React, { Component } from 'react';
import './Card.css';

const Card = ({medias, current_index}) => {  

    const media_item = medias;

    let css_class = "mediboard_card";
   
    return (
        <div className={css_class}>
            <div class="row">
                <div className="col-md-3">
                    <div className="media_pic">
                        <img src={media_item.image_url} alt=""/>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="title">
                        {media_item.title}
                    </div>
                    <div className="descrition">
                        {media_item.description}
                    </div>
                    <div className="readfull">
                        read full article
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default Card;
