import React, { Component } from 'react';

import './Rating.css';

class Rating extends Component {
    
    render() {
        return(<div className="Rating">
            <div className="row">
                <div className="col-md-3 col-xs-12 course_rating_left_wrapper">
                    <h3>4.8<span class="rating_off_5"> / 5</span></h3>
			    	<h4>ratings</h4>
				    <h5>based on 1,020 students</h5>
                </div>
                <div className="col-md-9 col-xs-12 course_rating_right_wrapper">
                    <div className="col-md-6 col-xs-12">
                        <div className="col-md-12 col-xs-12">
                            <div className="col-md-6 col-xs-12 rating_name">
                                Satisfaction Index
                            </div>
                            <div class="col-md-6 col-xs-12 rating_progress">
                            <div class="myBar index"><div class="percent_text">95%</div></div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xs-12">
                            <div className="col-md-6 col-xs-12 rating_name">
                                Quality of Mocks
                            </div>
                            <div className="col-md-6 col-xs-12 rating_progress">
                            <div class="myBar mock"><div class="percent_text">92%</div></div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xs-12">
                            <div className="col-md-6 col-xs-12 rating_name">
                                In-Depth Analysis
                            </div>
                            <div className="col-md-6 col-xs-12 rating_progress">
                            <div class="myBar depth"><div class="percent_text">92%</div></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                    <div className="col-md-12 col-xs-12">
                            <div className="col-md-6 col-xs-12 rating_name">
                                Doubt Solving
                            </div>
                            <div className="col-md-6 col-xs-12 rating_progress">
                            <div class="myBar doubt"><div class="percent_text">96%</div></div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xs-12">
                            <div className="col-md-6 col-xs-12 rating_name">
                                Mentorship
                            </div>
                            <div className="col-md-6 col-xs-12 rating_progress">
                            <div class="myBar mentor"><div class="percent_text">93%</div></div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xs-12">
                            <div className="col-md-6 col-xs-12 rating_name">
                            Quality of Content
                            </div>
                            <div className="col-md-6 col-xs-12 rating_progress">
                            <div class="myBar quality"><div class="percent_text">97%</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Rating;