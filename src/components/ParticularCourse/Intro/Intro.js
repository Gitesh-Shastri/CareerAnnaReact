import React, { Component } from 'react';

import './Intro.css';
import Scrollchor from 'react-scrollchor';

class Intro extends Component {
    
    render() {
        return(<div className="Intro">
            <div className="row">
                <div className="col-md-6 col-xs-12 intro_left_wrapper">
                    <h1 className="course_intro_heading">cat<span class="course_intro_sub">2019</span></h1>
                    <h2 className="course_intro_subtitle">coaching</h2>
                    <ul class="course_intro_list">
					<li><b>34 Students</b> with 99+ Percentile and <b>116 students</b> with 96+ Percentile in CAT 2017.</li>
					<li><b>300+ Hours</b> of Videos covering  entire CAT Syllabus in details.</li>
					<li><b>100+ Cat Topic Tests </b>to boost your topic wise confidence</li>
					<li><b>12</b> Full length CAT 2019 <b>Mock Test</b></li>
				</ul>
                <div class="course_intro_price">
					<span class="intro_max_price"><del>For ₹14,999/</del></span>
					<span class="intro_offer_price"><b>Now For ₹4,999/-</b></span>
				</div>
				<div class="intro_offer_expire">Offer expires in 3 Days</div>
                <div class="intro_button_area">
					<a href="" onclick="return openLoginModelWithProductId(231);" class="blue_button">Enroll Now</a>
				</div>
                
                <Scrollchor to="#video" animate={ { offset: 0, duration: 300}}>
					<a href="" class="demo_button">Demo Video</a>
                </Scrollchor>
                </div>
                <div className="col-md-6 col-xs-12 intro_right_wrapper">
                <div class="video_wrapper"> 
					<iframe src="https://www.youtube.com/embed/fK0Hqhq86Bg?wmode=transparent&amp;rel=0" frameborder="0" allowfullscreen="" id="fitvid0"></iframe>
				</div>
                </div>
            </div>
        </div>);
    }
}

export default Intro;