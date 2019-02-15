import React, { Component } from 'react';
import './Card.css';

const Card = ({review, current_index}) => {  
  const {reviewID,
  productID,
  rating,
  fullname,
  emailaddress,
  comments,
  date,
  index,
  publish,
  user_id} = review;  
  let style = {};
  
  const current_index_1 = current_index;
  if(current_index_1==index) {
      style = {opacity: "1",transform: "scale(1)", display: "block"}
  } else  if(current_index_1>index) {
    style = {display: "none"}    
  } else {
    style = {display: "block"}        
  }
    return (
        <div className="card" id={`card-${index}`} style={style} >
            <div class="row">
                <div class="col-md-2 col-xs-3">
                        <div id="name_pic">
                                <div id="name_initial">
                                    {fullname.charAt(0)}
                                 </div>
                              </div>
                </div>
                <div class="col-md-10 col-xs-9">
                    <div class="user_name">{fullname}</div>
                    <div class="rating">
                            <div class="rating_star">
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span> 
                                <span class="fa fa-star"></span>       
                                <span class="rating_text">{rating}</span>
                            </div>
                        </div>

                    <div class="publish_date"><i class="fa fa-calendar"></i>&nbsp;{date}</div>
                    <div class="user_comment">{comments}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;
