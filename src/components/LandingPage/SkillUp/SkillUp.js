import React, { Component } from 'react';
import './SkillUp.css';

import OwlCarousel from 'react-owl-carousel';

class SkillUp extends Component {
    state = {
        courses: [
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/09/1537978071machinelearning.jpg",
                title: "Machine Learning Course For Non Developers",
                publish: "21st Jan, 2019",
                leaners: "154+ Leaners",
                index: 0,
                ratings: "5",
                url: "https://www.careeranna.com/Machine-Learning-Course-For-Non-Developers"
                },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/09/1537969035AI.jpg",
                title:"Artificial Intelligence Course",
                publish: "3rd June, 2019",
                leaners: "1260+ Leaners",
                index: 1,
                ratings: "4.8",
                url: "https://www.careeranna.com/Artificial-Intelligence-Course"
                },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/08/1534844920Data_science_with_python.jpg",
                title:"Python Programming Online Course",
                publish: "23rd May, 2019",
                leaners: "4603+ Leaners",
                index: 2,
                ratings: "4.9",
                url: "https://www.careeranna.com/Python-Programming-Online-Course"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/08/153448725715336800721527172691img6.jpg",
                title:"Product Management",
                publish: "17th Nov, 2017",
                leaners: "147+ Leaners",
                index: 3,
                ratings: "4.8",
                url: "https://www.careeranna.com/Product-Management"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/08/15336800721527172691img6.jpg",
                title:"Data Science with Python",
                publish: "10th Sep, 2017",
                index: 4,
                leaners: "1258+ Leaners",
                ratings: "4.9",
                url: "https://www.careeranna.com/Data-Science-with-Python"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/07/15324338871529734481Image_abhishek.jpg",
                title:"Certified Business Analyst With Excel",
                publish: "7th Sep, 2017",
                index: 5,
                leaners: "3960+ Leaners",
                ratings: "4.89",
                url: "https://www.careeranna.com/Certified-Business-Analyst-With-Excel"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/06/1529734481Image_abhishek.jpg",
                title:"Data Analysis and Visualisation Professional",
                publish: "7th Sep, 2017",
                index: 6,
                leaners: "1257+ Leaners",
                ratings: "4.89",
                url: "https://www.careeranna.com/Data-Analysis-and-Visualisation-Professional"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/05/1527577474new_copy.jpg",
                title:"Certified Associate in Material Management",
                publish: "17th Feb, 2017",
                index: 7,
                leaners: "4790+ Leaners",
                ratings: "4.7",
                url: "https://www.careeranna.com/Certified-Associate-in-Material-Management"
            }   
        ]
        ,course:  {
            pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/09/1537978071machinelearning.jpg",
            title: "Machine Learning Course For Non Developers",
            publish: "21st Jan, 2019",
            leaners: "154+ Leaners",
            index: 0,
            ratings: "5",
            url: "https://www.careeranna.com/Machine-Learning-Course-For-Non-Developers"
            }
    } 


    nextProperty = () => {
		if(this.state.course.index != undefined){
			const newIndex = this.state.course.index+1;
			this.setState({
				course: this.state.courses[newIndex]
			})
		}
  }

  prevProperty = () => {  
    const newIndex = this.state.course.index-1;
    this.setState({
			course: this.state.courses[newIndex]
    })
  } 
   
  render() {

    const course = this.state.course;
    
    const courses = this.state.courses.map(course => {
        return <div class="items trending_course">
        <a href={course.url} >
        <img src={course.pic_url} class="pic" alt="" />
        <div class="course_heading">
            {course.title}
        </div>
        <div class="course_views">
        <i class="fa fa-users" aria-hidden="true"></i> &nbsp;{course.leaners}
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

    const course_item = <div class="items trending_course">
    <a href={this.state.course.url}>
    <img src={this.state.course.pic_url} class="pic" alt="" />
    <div class="course_heading">
        {course.title}
    </div>
    <div class="course_views">
    <i class="fa fa-users" aria-hidden="true"></i> &nbsp;{this.state.course.leaners}
    </div>
    <div class="rating">
        <div class="rating_star">{this.state.course.ratings} &nbsp;
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
                <div class="col-md-9 hidden-xs" id="trending_slider">
                <OwlCarousel ref="gallery">
                    {courses}
                </OwlCarousel>
            </div>
            <div class="col-xs-12 small_mba_card hidden-lg">
                {course_item}
            </div>
            <div class="col-xs-12 hidden-lg mba_arrow">
                    <button 
                    class="next_video_left video_prev"
                    onClick={() => this.prevProperty()} 
                    disabled={course.index==0}
                    hidden={course.index==0}
                ><i class='fa fa-caret-left'></i></button>
             <button 
                     class="next_video_right video_next" 
                    onClick={() => this.nextProperty()}
                    disabled={course.index==7}
                    hidden={course.index==7}
                    ><i class='fa fa-caret-right'></i></button>
            </div>        
            </div>
      </div>
    );
  }
}

export default SkillUp;
