import React, { Component } from 'react';
import './MBA.css';

import Card from '../TrendingCourse/Card/Card';

class MBA extends Component {

    state = {
        courses: [
            {
            pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2019/01/1548055203tissnet.jpg",
            title: "TISSNET Coaching Class 2020",
            publish: "21st Jan, 2019",
            leaners: "8350+ Learners",
            index: 0,
            ratings: "4.95",
            url: "https://www.careeranna.com/TISSNET-Coaching-Class-2020"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/06/1528015564ipm.jpg",
                title:"IPM 2020 Online Coaching Classes",
                publish: "3rd June, 2019",
                leaners: "464+ Learners",
                ratings: "4.89",
                index: 1,
                url: "https://www.careeranna.com/IPM-2020-Online-Coaching-Classes"
                },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/05/1527062433cat_.jpeg",
                title:"CAT 2019 Coaching",
                publish: "23rd May, 2019",
                leaners: "1552+ Learners",
                index: 2,
                ratings: "4.89",
                url: "https://www.careeranna.com/CAT-2019-Coaching"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/01/1517390328business-book-and-glasses-1-1241387.jpg",
                title:"NMAT Coaching Classes",
                publish: "10th Sep, 2017",
                index: 3,
                leaners: "867+ Learners",
                ratings: "4.8",
                url: "https://www.careeranna.com/NMAT-Coaching-Classes"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/01/1517390939studying-3-1480680.jpg",
                title:"SNAP Coaching Class",
                publish: "7th Sep, 2017",
                index: 4,
                leaners: "466+ Learners",
                ratings: "4.73",
                url: "https://www.careeranna.com/SNAP-Coaching-Class"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/01/1517391759lupa-sobre-revista-1522543.jpg",
                title:"MICA GE PI Preparation",
                publish: "7th Sep, 2017",
                index: 5,
                leaners: "102+ Learners",
                ratings: "4.7",
                url: "https://www.careeranna.com/MICA-GE-PI-Preparation"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/01/1517391859lupa-sobre-revista-1522543.jpg",
                title:"TISS PIT PI Preparation",
                publish: "17th Feb, 2017",
                index: 6,
                leaners: "103+ Learners",
                ratings: "4.9",
                url: "https://www.careeranna.com/TISS-PIT-PI-Preparation"
            }   
        ],
        course: 
        {
        pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2019/01/1548055203tissnet.jpg",
        title: "TISSNET Coaching Class 2020",
        publish: "21st Jan, 2019",
        leaners: "8350+ Learners",
        index: 0,
        ratings: "4.95",
        url: "https://www.careeranna.com/TISSNET-Coaching-Class-2020"
        }
    } 

    nextProperty = () => {
		if(this.state.course.index !== this.state.courses.length-2){
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

    return (
      <div class="MBACourses">
        <div class="row">
            <div class="MBACard ">
            <div className="MBACourseCardInside">
                <div className="above_heading row ">
                <div className="leftheading">
                <div className="mbaheading">
                    MBA
                </div>
                <div className="trendingcourse">
                    Programmes
                </div>
                </div>
                <div class="rupees">
                    <img class="rupeePic" src="https://www.careeranna.com/upload/main_page_testing/Vector.png" alt=""/>
                    <img class="ticker" src="https://www.careeranna.com/upload/main_page_testing/Ticker.png" alt=""/>
                </div>
                <div className="trending_line"/>
                </div>
                <div className="off_small d-block d-md-none">
                    15% off on courses
                </div>
                <div className="lower">
                <div class="trending_off">
                        Upto <span>15% off</span>
                    </div>
                    <div class="trending_special">
                    Specialised Courses.
                    </div>
                    <div class="trending_expire">
                    *Offer expires in 3 Days.
                    </div>
                </div>
                </div>
            </div> 
            <button 
                    class="next_video_prev"
                    onClick={() => this.prevProperty()}
                    disabled={course.index===0}
                    ><i class='fa fa-angle-left'></i></button>
            <div class="course_course_list">
                <div className="trending_playlist" style={{
				'transform': `translateX(-${course.index*(100/courses.length)}%)`
			}}> {
                courses.map((particular_course, i) => 
                <Card key={i} course = {particular_course} current_index = {course.index}/>)
            }
            </div>
            </div>  
            <div class="col-xs-12 d-none d-md-block mba_arrow">
             <button 
                     class="next_video_right" 
                    onClick={() => this.nextProperty()}
                    disabled={course.index===courses.length-1}
                    hidden={course.index===courses.length-1}
                    ><i class='fa fa-angle-right'></i></button>
            </div>    
        </div>
        <div className="col col-sm-12 arrow_small">
          <button 
					      class="next_video_prev_small"
                onClick={() => this.prevProperty()} 
                disabled={course.index===0}
                hidden={course.index===0}><i class='fa fa-caret-left'></i>
              </button>
          <button 
			 		class="next_video_right_small pull-right"
					onClick={() => this.nextProperty()} 
        ><i class='fa fa-caret-right'></i></button>     
          </div>
      </div>
    );
  }
}

export default MBA;
