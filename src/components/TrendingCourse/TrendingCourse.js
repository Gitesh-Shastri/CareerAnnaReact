import React, { Component } from 'react';
import './TrendingCourse.css';

class TrendingCourse extends Component {

    state = {
        courses: [
            {
            }
        ]
    }

  render() {
    return (
      <div class="TrendingCourse">
        <div class="row">
            <div class="col-md-4 trendingCard">
                <div className="trendingheading">
                    Trending
                </div>
                <div className="trendingcourse">
                    Courses
                </div>
                <hr class="trending_line"/>
                <div class="tresnding_off">
                    15% off
                </div>
                <div class="trending_special">
                Specialised Courses.
                </div>
                <div class="trending_expire">
                *Offer expires in 3 Days.
                </div>
            </div>
                <div class="col-md-8 " id="trending_slider">
                    <div class="owl-carousel">
                    <div class="items trending_course">
                        <img src="https://www.careeranna.com/img/shutterstock_1585222791.jpg" class="pic" alt="" />
                        <div class="course_heading">
                            Specialised Courses.
                        </div>
                        <div class="course_publish">
                            Published On 14th Jan, 2019
                        </div>
                        <div class="course_author">
                            by Careeranna
                        </div>
                        <div class="course_views">
                            14457 views
                        </div>
                        <div class="rating">
                            <div class="rating_star">4.8 &nbsp;
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span> 
                                <span class="fa fa-star"></span>       
                                <span></span>
                            </div>
                        </div>
                        
                    </div>
                    <div class="items trending_course">
                        <img src="https://www.careeranna.com/img/shutterstock_1585222791.jpg" class="pic" alt="" />
                        <div class="course_heading">
                            Specialised Courses.
                        </div>
                        <div class="course_publish">
                            Published On 14th Jan, 2019
                        </div>
                        <div class="course_author">
                            by Careeranna
                        </div>
                        <div class="course_views">
                            14457 views
                        </div>
                        <div class="rating">
                            <div class="rating_star">4.8 &nbsp;
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span> 
                                <span class="fa fa-star"></span>       
                                <span></span>
                            </div>
                        </div>
                        
                    </div>

                    <div class="items trending_course">
                        <img src="https://www.careeranna.com/img/shutterstock_1585222791.jpg" class="pic" alt="" />
                        <div class="course_heading">
                            Specialised Courses.
                        </div>
                        <div class="course_publish">
                            Published On 14th Jan, 2019
                        </div>
                        <div class="course_author">
                            by Careeranna
                        </div>
                        <div class="course_views">
                            14457 views
                        </div>
                        <div class="rating">
                            <div class="rating_star">4.8 &nbsp;
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span> 
                                <span class="fa fa-star"></span>       
                                <span></span>
                            </div>
                        </div>
                        
                    </div>
                    <div class="items trending_course">
                        <img src="https://www.careeranna.com/img/shutterstock_1585222791.jpg" class="pic" alt="" />
                        <div class="course_heading">
                            Specialised Courses.
                        </div>
                        <div class="course_publish">
                            Published On 14th Jan, 2019
                        </div>
                        <div class="course_author">
                            by Careeranna
                        </div>
                        <div class="course_views">
                            14457 views
                        </div>
                        <div class="rating">
                            <div class="rating_star">4.8 &nbsp;
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span> 
                                <span class="fa fa-star"></span>       
                                <span></span>
                            </div>
                        </div>
                        
                    </div>
                    <div class="items trending_course">
                        <img src="https://www.careeranna.com/img/shutterstock_1585222791.jpg" class="pic" alt="" />
                        <div class="course_heading">
                            Specialised Courses.
                        </div>
                        <div class="course_publish">
                            Published On 14th Jan, 2019
                        </div>
                        <div class="course_author">
                            by Careeranna
                        </div>
                        <div class="course_views">
                            14457 views
                        </div>
                        <div class="rating">
                            <div class="rating_star">4.8 &nbsp;
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span> 
                                <span class="fa fa-star"></span>       
                                <span></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-md-3"></div>
            <div class="col-md-8">     
            <div class="col-md-12 range_input_sec related_courses">
                <input class="range-slider" type="range" id="range" name="range" min="0" step="10"  />
			
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default TrendingCourse;
