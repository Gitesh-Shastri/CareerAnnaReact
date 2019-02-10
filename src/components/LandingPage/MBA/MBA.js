import React, { Component } from 'react';
import axios from 'axios';
import './MBA.css';

import OwlCarousel from 'react-owl-carousel';

class MBA extends Component {

    componentDidMount  () {
        axios.get('https://www.careeranna.com/api/getTrendingCourse.php')
        .then(response => {
            console.log(response);
        });
    }

    state = {
        courses: [
            {
            pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2019/01/1548055203tissnet.jpg",
            title: "TISSNET Coaching Class 2020",
            publish: "21st Jan, 2019",
            leaners: "8350+ Leaners",
            ratings: "4.95",
            url: "https://www.careeranna.com/TISSNET-Coaching-Class-2020"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/06/1528015564ipm.jpg",
                title:"IPM 2020 Online Coaching Classes",
                publish: "3rd June, 2019",
                leaners: "464+ Leaners",
                ratings: "4.89",
                url: "https://www.careeranna.com/IPM-2020-Online-Coaching-Classes"
                },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/05/1527062433cat_.jpeg",
                title:"CAT 2019 Coaching",
                publish: "23rd May, 2019",
                leaners: "1552+ Leaners",
                ratings: "4.89",
                url: "https://www.careeranna.com/CAT-2019-Coaching"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/01/1517391168studying-ahead-1421056.jpg",
                title:"CAT 2018 Coaching",
                publish: "17th Nov, 2017",
                leaners: "1298+ Leaners",
                ratings: "4.89",
                url: "https://www.careeranna.com/CAT-2018-Coaching"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/01/1517390328business-book-and-glasses-1-1241387.jpg",
                title:"NMAT Coaching Classes",
                publish: "10th Sep, 2017",
                leaners: "867+ Leaners",
                ratings: "4.8",
                url: "https://www.careeranna.com/NMAT-Coaching-Classes"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/01/1517390939studying-3-1480680.jpg",
                title:"SNAP Coaching Class",
                publish: "7th Sep, 2017",
                leaners: "466+ Leaners",
                ratings: "4.73",
                url: "https://www.careeranna.com/SNAP-Coaching-Class"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/01/1517391759lupa-sobre-revista-1522543.jpg",
                title:"MICA GE PI Preparation",
                publish: "7th Sep, 2017",
                leaners: "102+ Leaners",
                ratings: "4.7",
                url: "https://www.careeranna.com/MICA-GE-PI-Preparation"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/01/1517391859lupa-sobre-revista-1522543.jpg",
                title:"TISS PIT PI Preparation",
                publish: "17th Feb, 2017",
                leaners: "103+ Leaners",
                ratings: "4.9",
                url: "https://www.careeranna.com/TISS-PIT-PI-Preparation"
            }   
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
            <div class="col-md-4 MBACard">
                <div className="mbaheading">
                    MBA
                </div>
                <div class="rupees">
                    <img class="rupeePic" src="https://www.careeranna.com/upload/main_page_testing/Vector.png" alt=""/>
                    <img class="ticker" src="https://www.careeranna.com/upload/main_page_testing/Ticker.png" alt=""/>
                </div>
                <div className="trendingcourse">
                    Programes
                </div>
                <hr class="trending_line"/>
                <div class="skill_off">
                    40% off
                </div>
                <div class="trending_special">
                Specialised Courses.
                </div>
                <div class="skill_expire">
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

export default MBA;
