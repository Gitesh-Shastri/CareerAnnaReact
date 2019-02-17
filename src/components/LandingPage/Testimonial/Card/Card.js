import React from 'react';
import './Card.css';

const Card = ({review, current_index}) => {  
  const { userpic,
    username,
    index,
  profession,
  reviewbody} = review;  
  let style = {};

  const current_index_1 = current_index;
  let css_class="Card";
  if(index ===current_index_1) {
    css_class="Card active";
  }
    return (
        <div className={css_class} id={`card-${index}`} style={style} >
            <div class="row">
              <div id="name_initial">
                <img src={userpic} alt={username}/>
                </div>
                <div class="col-md-6 review_rating_box">
                    <div class="user_name">{username}</div>
                    <div class="rating">
                            <div class="rating_star">            
                                <span class="rating_text colorBlue">5</span>
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span> 
                                <span class="fa fa-star colorBlue"></span>  
                            
                            </div>
                        </div>
                    
                </div>
                <div class="col-md-12 user_comment">{reviewbody}</div>
                <div class="col-md-12 profession">{profession}</div>
            </div>
        </div>
    );
}

export default Card;
