import React, { Component } from 'react';
import './SkillUp.css';

import OwlCarousel from 'react-owl-carousel';
import Card from '../TrendingCourse/Card/Card';

class SkillUp extends Component {
    state = {
        courses: [
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/09/1537978071machinelearning.jpg",
                title: "Machine Learning Course For Non ...",
                publish: "21st Jan, 2019",
                leaners: "154+ Learners",
                index: 0,
                ratings: "5",
                url: "https://www.careeranna.com/certification/machine-learning-course"
                },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/09/1537969035AI.jpg",
                title:"Artificial Intelligence Course",
                publish: "3rd June, 2019",
                leaners: "1260+ Learners",
                index: 1,
                ratings: "4.8",
                url: "https://www.careeranna.com/certification/artificial-intelligence-course"
                },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/08/1534844920Data_science_with_python.jpg",
                title:"Python Programming Online Course",
                publish: "23rd May, 2019",
                leaners: "4603+ Learners",
                index: 2,
                ratings: "4.9",
                url: "https://www.careeranna.com/certification/python-programming-online-course"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/08/153448725715336800721527172691img6.jpg",
                title:"Product Management",
                publish: "17th Nov, 2017",
                leaners: "147+ Learners",
                index: 3,
                ratings: "4.8",
                url: "https://www.careeranna.com/certification/product-management"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/08/15336800721527172691img6.jpg",
                title:"Data Science with Python",
                publish: "10th Sep, 2017",
                index: 4,
                leaners: "1258+ Learners",
                ratings: "4.9",
                url: "https://www.careeranna.com/certification/data-science-python"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/07/15324338871529734481Image_abhishek.jpg",
                title:"Certified Business Analyst With Excel",
                publish: "7th Sep, 2017",
                index: 5,
                leaners: "3960+ Learners",
                ratings: "4.89",
                url: "https://www.careeranna.com/certification/certified-business-analyst-excel"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/06/1529734481Image_abhishek.jpg",
                title:"Data Analysis and Visualisation ...",
                publish: "7th Sep, 2017",
                index: 6,
                leaners: "1257+ Learners",
                ratings: "4.89",
                url: "https://www.careeranna.com/certification/Data-Analysis-and-Visualisation-Professional"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/05/1527577474new_copy.jpg",
                title:"Certified Associate in Material Management",
                publish: "17th Feb, 2017",
                index: 7,
                leaners: "4790+ Learners",
                ratings: "4.7",
                url: "https://www.careeranna.com/certification/Certified-Associate-in-Material-Management"
            }   
        ]
        ,course:  {
            pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/09/1537978071machinelearning.jpg",
            title: "Machine Learning Course For Non Developers",
            publish: "21st Jan, 2019",
            leaners: "154+ Learners",
            index: 0,
            ratings: "5",
            url: "https://www.careeranna.com/certification/machine-learning-course"
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

    const courses = this.state.courses;


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
      <div class="MBACourses">
      <div className="col col-sm-12 heading_small">
            Skill-up Programes
        </div>
        
        <div class="row">
            <div class="MBACard  d-none d-md-block">
            <div className="MBACourseCardInside">
                <div className="mbaheading">
                    Skill-up
                </div>
                <div className="trendingcourse">
                    Certificates
                </div>
                <hr className="trending_line"/>
                <div class="rupees">
                    <img class="rupeePic" src="https://www.careeranna.com/upload/main_page_testing/Vector.png" alt=""/>
                    <img class="ticker" src="https://www.careeranna.com/upload/main_page_testing/Ticker.png" alt=""/>
                </div>
                <div class="trending_off">
                        Upto <span>15% off</span>
                    </div>
                    <div class="trending_special">
                    Specialised Courses.
                    </div>
                    <div class="trending_expire">
                    *Offer expires in 3 Days.
                    </div>
                <button 
                    class="next_video_prev"
                    onClick={() => this.prevProperty()} 
                    disabled={course.index==0}
                    hidden={course.index==0}
                ><i class='fa fa-angle-left'></i></button>
                </div>
            </div> <div class="col-md-7 course_course_list">
                <div className="trending_playlist" style={{
				'transform': `translateX(-${course.index*(100/courses.length)}%)`
			}}> {
                courses.map((particular_course, i) => 
                <Card key={i} course = {particular_course} current_index = {course.index}/>)
            }
            </div>
            </div>  
            <div class="col-xs-12 hidden-lg d-none d-md-block mba_arrow">
                    
             <button 
                     class="next_video_right" 
                    onClick={() => this.nextProperty()}
                    disabled={course.index==courses.length-1}
                    hidden={course.index==courses.length-1}
                    ><i class='fa fa-angle-right'></i></button>
            </div>    
        </div>
        <div className="col col-sm-12 arrow_small">
          <button 
					      class="next_video_prev_small"
                onClick={() => this.prevProperty()} 
                disabled={course.index==0}
                hidden={course.index==0}><i class='fa fa-angle-left'></i>
              </button>
          <button 
			 		class="next_video_right_small pull-right"
					onClick={() => this.nextProperty()} 
					disabled={course.index==courses.length-1}
					hidden={course.index==courses.length-1}
        ><i class='fa fa-angle-right'></i></button>     
          </div>
      </div>
    );
  }
}

export default SkillUp;
