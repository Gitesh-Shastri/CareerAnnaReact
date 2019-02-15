import React, { Component } from 'react';
import './TrendingCourse.css';

import Card from './Card/Card';

class TrendingCourse extends Component {

    state = {
        courses: [
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/05/1527062433cat_.jpeg",
                title:"CAT 2019 Coaching",
                publish: "23rd May, 2019",
                leaners: "1552+ Learners",
                index: 0,
                ratings: "4.89",
                key:"1",
                url: "https://www.careeranna.com/CAT-2019-Coaching"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/08/1534844920Data_science_with_python.jpg",
                title:"Python Programming Online Course",
                publish: "23rd May, 2019",
                leaners: "4603+ Learners",
                ratings: "4.9",
                index: 1,
                key:"3",
                url: "https://www.careeranna.com/Python-Programming-Online-Course"
            },{
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/08/15336800721527172691img6.jpg",
                title:"Data Science with Python",
                publish: "10th Sep, 2017",
                leaners: "1258+ Learners",
                ratings: "4.9",
                index: 2,
                key:"4",
                url: "https://www.careeranna.com/Data-Science-with-Python"
            },{index: 0,
                
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/07/15324338871529734481Image_abhishek.jpg",
                title:"Certified Business Analyst With Excel",
                publish: "7th Sep, 2017",
                index: 3,
                leaners: "3960+ Learners",
                ratings: "4.89",
                key:"5",
                url: "https://www.careeranna.com/Certified-Business-Analyst-With-Excel"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2019/01/1548055203tissnet.jpg",
                index: 4,
                title: "TISSNET Coaching Class 2020",
                publish: "21st Jan, 2019",
                leaners: "8350+ Learners",
                ratings: "4.95",
                key:"6",
                url: "https://www.careeranna.com/TISSNET-Coaching-Class-2020"
                },
        ],
        course:  {
            pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/05/1527062433cat_.jpeg",
            title:"CAT 2019 Coaching",
            publish: "23rd May, 2019",
            index: 0,
            leaners: "1552+ Learners",
            ratings: "4.89",
            key:"1",
            url: "https://www.careeranna.com/CAT-2019-Coaching"
        },
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
      <div class="TrendingCourse">
        <div className="row upcoming_languages">
        <div class="col-sm-5 col-md-5 upcoming_heading"><h4>upcoming languages</h4></div> 
            <div class="others"><h4>ગુજરાતી</h4></div>
            <div class="others"><h4>বাংলা</h4></div>
            <div class="others" ><h4> മലയാളം </h4></div>
            <div class="others"><h4>ਪੰਜਾਬੀ</h4></div>
            <div class="others"><h4> मराठी </h4></div>
            <div class="others"><h4>  ಕನ್ನಡ  </h4></div>
        </div>
        <div className="col col-sm-12 heading_small">
                Trending Course
      </div>
        <div class="row">
            <div class="trendingCourseCard  d-none d-md-block">
                <div className="trendingCourseCardInside">
                    <div className="trendingheading">
                        Trending
                    </div>
                    <div className="trendingsubheading">
                        Courses
                    </div>
                    <hr class="trending_line"/>
                    <div class="trending_off">
                        Upto <span>15% off</span>
                    </div>
                    <div class="trending_special">
                    Specialised Courses.
                    </div>
                    <div class="trending_expire">
                    *Offer expires in 3 Days.
                    </div> <button 
					      class="next_video_prev"
                onClick={() => this.prevProperty()} 
                disabled={course.index==0}
                hidden={course.index==0}><i class='fa fa-angle-left'></i>
              </button>
                </div>
            </div>
                <div class="col col-sm-12 col-md-7 course_course_list">
                <div className="trending_playlist" style={{
				'transform': `translateX(-${course.index*(100/courses.length)}%)`
			}}> {
                courses.map((particular_course, i) => 
                <Card key={i} course = {particular_course} current_index = {course.index}/>)
            }
            </div>
            </div>  
            <div className="col-md-1">
          <button 
			 		class="next_video_right"
					onClick={() => this.nextProperty()} 
					disabled={course.index==courses.length-1}
					hidden={course.index==courses.length-1}
        ><i class='fa fa-angle-right'></i></button>
          </div>
        </div><div className="col col-sm-12 arrow_small">
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

export default TrendingCourse;
