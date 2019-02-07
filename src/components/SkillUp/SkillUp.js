import React, { Component } from 'react';
import './SkillUp.css';

class SkillUp extends Component {
    state = {
        courses: [
            {
            pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/09/1537978071machinelearning.jpg",
            title: "Machine Learning Course For Non Developers",
            publish: "21st Jan, 2019",
            leaners: "154+ Leaners",
            ratings: "5"
            },
            {
            pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/09/1537969035AI.jpg",
            title:"Artificial Intelligence Course",
            publish: "3rd June, 2019",
            leaners: "1260+ Leaners",
            ratings: "4.8"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/08/1534844920Data_science_with_python.jpg",
                title:"Python Programming Online Course",
                publish: "23rd May, 2019",
                leaners: "4603+ Leaners",
                ratings: "4.9"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/08/153448725715336800721527172691img6.jpg",
                title:"Product Management",
                publish: "17th Nov, 2017",
                leaners: "147+ Leaners",
                ratings: "4.8"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/08/15336800721527172691img6.jpg",
                title:"Data Science with Python",
                publish: "10th Sep, 2017",
                leaners: "1258+ Leaners",
                ratings: "4.9"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/07/15324338871529734481Image_abhishek.jpg",
                title:"Certified Business Analyst With Excel",
                publish: "7th Sep, 2017",
                leaners: "3960+ Leaners",
                ratings: "4.89"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/06/1529734481Image_abhishek.jpg",
                title:"Data Analysis and Visualisation Professional",
                publish: "7th Sep, 2017",
                leaners: "1257+ Leaners",
                ratings: "4.89"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/05/1527577474new_copy.jpg",
                title:"Certified Associate in Material Management",
                publish: "17th Feb, 2017",
                leaners: "4790+ Leaners",
                ratings: "4.7"
            }   
        ]
    } 

   
  render() {
    const courses = this.state.courses.map(course => {
        return <div class="items trending_course">
        <img src={course.pic_url} class="pic" alt="" />
        <div class="course_heading">
            {course.title}
        </div>
        <div class="course_publish">
            Published On {course.publish}
        </div>
        <div class="course_author">
            by Careeranna
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
        
    </div>
    });  

    return (
      <div class="TrendingCourse">
        <div class="row">
            <div class="col-md-4 MBACard">
                <div className="skillupheading">
                    Skill-up
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
                    15% off
                </div>
                <div class="trending_special">
                Specialised Courses.
                </div>
                <div class="skill_expire">
                *Offer expires in 3 Days.
                </div>
            </div>
                <div class="col-md-8 " id="trending_slider">
                    <div class="owl-carousel">
                        {courses}
                </div>
            </div>

            <div class="col-md-3"></div>
            <div class="col-md-8">     
            <div class="col-md-12 range_input_sec related_courses">
                <input class="range-slider" type="range" id="range1" name="range" min="0" step="1" max="8" />
			
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default SkillUp;