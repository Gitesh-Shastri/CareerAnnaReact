import React, { Component } from 'react';

import './CertificationIntro.css';

class CertificationIntro extends Component {
    
    render() {
        return(<div className="CertificationIntro">
            <div className="row padding-none">
                <div className="col-md-4 col-xs-12">
                    <div className="title">Certified Associate in<br/><span>Material Management</span></div>
                    <div className="description">
                        <ul>
                            <li><b>34 Students</b> with 99+ Percentile and <b>116 students</b> with 96+ Percentile in CAT 2017.</li>
					        <li><b>300+ Hours</b> of Videos covering  entire CAT Syllabus in details.</li>
                            <li><b>100+ Cat Topic Tests </b>to boost your topic wise confidence</li>
                            <li><b>12</b> Full length CAT 2019 <b>Mock Test</b></li>
                        </ul>
                    </div>
                    <div className="price">
                        <div className="original_price">For ₹14,999/</div>
                        <div className="discounted_price">Now For  ₹4,999/-</div>
                    </div>
                    <div class="intro_offer_expire">Offer expires in 3 Days</div>
                    <div class="intro_button_area">
					    <a href="#" onclick="return openLoginModelWithProductId(231);" class="blue_button">Enroll Now</a>
				    </div>
                </div>
                <div className="col-5 hidden-lg">
                </div>
            </div>
        </div>);
    }
}

export default CertificationIntro;