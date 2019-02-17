import React from 'react';
import './Card.css';

const Card = ({medias, current_index}) => {  

    const media_item = medias;

    let css_class = "mediboard_card";
    if(medias.index === current_index+1) {
        css_class = "mediboard_card active";
    }

    return (
        <div className={css_class}>
            <div class="row">
                <div className="col-4 col-md-3 px-0">
                    <div className="media_pic">
                        <img src={media_item.image_url} alt=""/>
                    </div>
                </div>
                <div className="col-8 col-md-9 px-0 media_desc">
                    <div className="title">
                        {media_item.title}
                    </div>
                </div>    
                <div className="col-md-12 col-12">       
                    <div className="descrition">
                        {media_item.description}
                    </div>
                    <div className="readfull">
                        <a href={media_item.url_link}>read full article</a>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default Card;
