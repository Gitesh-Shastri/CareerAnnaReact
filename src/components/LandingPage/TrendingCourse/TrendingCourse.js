import React, { Component } from 'react';
import './TrendingCourse.css';

import OwlCarousel from 'react-owl-carousel';

class TrendingCourse extends Component {

    state = {
        courses: [
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/05/1527062433cat_.jpeg",
                title:"CAT 2019 Coaching",
                publish: "23rd May, 2019",
                leaners: "1552+ Leaners",
                ratings: "4.89",
                key:"1",
                url: "https://www.careeranna.com/CAT-2019-Coaching"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/01/1517391168studying-ahead-1421056.jpg",
                title:"CAT 2018 Coaching",
                publish: "17th Nov, 2017",
                leaners: "1298+ Leaners",
                ratings: "4.89",
                key:"2",
                url: "https://www.careeranna.com/CAT-2018-Coaching"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/08/1534844920Data_science_with_python.jpg",
                title:"Python Programming Online Course",
                publish: "23rd May, 2019",
                leaners: "4603+ Leaners",
                ratings: "4.9",
                key:"3",
                url: "https://www.careeranna.com/Python-Programming-Online-Course"
            },{
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/08/15336800721527172691img6.jpg",
                title:"Data Science with Python",
                publish: "10th Sep, 2017",
                leaners: "1258+ Leaners",
                ratings: "4.9",
                key:"4",
                url: "https://www.careeranna.com/Data-Science-with-Python"
            },{
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/07/15324338871529734481Image_abhishek.jpg",
                title:"Certified Business Analyst With Excel",
                publish: "7th Sep, 2017",
                leaners: "3960+ Leaners",
                ratings: "4.89",
                key:"5",
                url: "https://www.careeranna.com/Certified-Business-Analyst-With-Excel"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2019/01/1548055203tissnet.jpg",
                title: "TISSNET Coaching Class 2020",
                publish: "21st Jan, 2019",
                leaners: "8350+ Leaners",
                ratings: "4.95",
                key:"6",
                url: "https://www.careeranna.com/TISSNET-Coaching-Class-2020"
                },
        ]
    }

  render() {
    
    const courses = this.state.courses.map(course => {
        return <div class="items trending_course">
        <a href={course.url}>
        <img src={course.pic_url} class="pic" alt="" />
        <div class="course_heading">
            {course.title}
        </div>
        <div class="course_views">
            {course.leaners}
        </div>
        <div class="rating">
            <div class="rating_star">{course.ratings} &nbsp;
                <span class="fa fa-star colorBlue"></span>
                <span class="fa fa-star colorBlue"></span>
                <span class="fa fa-star colorBlue"></span>
                <span class="fa fa-star colorBlue"></span> 
                <span class="fa fa-star"></span>       
                <span></span>
            </div>
        </div>
        </a>
    </div>
    });  

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
                <div class="col-md-9 hidden-xs" id="trending_slider">
                <OwlCarousel ref="gallery">
                    {courses}
                </OwlCarousel>
            </div>
            <div class="col-md-3"></div>
            <div class="col-md-8">   
            </div>
        </div>
      </div>
    );
  }
}

export default TrendingCourse;
