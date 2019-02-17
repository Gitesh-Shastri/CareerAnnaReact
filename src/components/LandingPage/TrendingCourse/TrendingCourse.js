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
                key:"2",
                url: "https://www.careeranna.com/certification/python-programming-online-course"
            },{
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/08/15336800721527172691img6.jpg",
                title:"Data Science with Python",
                publish: "10th Sep, 2017",
                leaners: "1258+ Learners",
                ratings: "4.9",
                index: 2,
                key:"3",
                url: "https://www.careeranna.com/certification/data-science-python"
            },{
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2018/07/15324338871529734481Image_abhishek.jpg",
                title:"Certified Business Analyst With Excel",
                publish: "7th Sep, 2017",
                index: 3,
                leaners: "3960+ Learners",
                ratings: "4.89",
                key:"4",
                url: "https://www.careeranna.com/certification/certified-business-analyst-excel"
            },
            {
                pic_url: "https://www.careeranna.com/uploads/product_images/Course_Images/2019/01/1548055203tissnet.jpg",
                index: 4,
                title: "TISSNET Coaching Class 2020",
                publish: "21st Jan, 2019",
                leaners: "8350+ Learners",
                ratings: "4.95",
                key:"5",
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
      <div class="TrendingCourse">
        <div className="row upcoming_languages px-3 py-6">
            <div class="col-12 col-md-5 upcoming_heading p-0"><h4>upcoming languages</h4></div> 
            <div className="col-md-7 col-12 p-0 row">
            <div class="col-4 col-md-2 others p-0"><h4>ગુજરાતી</h4></div>
            <div class="col-4 col-md-2 others p-0"><h4>বাংলা</h4></div>
            <div class="col-4 col-md-2 others p-0" ><h4> മലയാളം </h4></div>
            <div class="col-4 col-md-2 others p-0"><h4>ਪੰਜਾਬੀ</h4></div>
            <div class="col-4 col-md-2  others p-0"><h4> मराठी </h4></div>
            <div class="col-4 col-md-2 others p-0"><h4>  ಕನ್ನಡ  </h4></div>
            </div>
        </div>
        
        <div class="row">
            <div class="trendingCourseCard">
                <div className="trendingCourseCardInside row">
                    <div className="upperheading">
                        <div className="trendingheading">Trending</div>
                        <div className="trendingsubheading">Courses</div>
                        <hr class="trending_line"/>
                    </div>
                    <div className="off_column">
                        <div class="trending_off">Upto <span>15% off</span></div>
                        <div class="trending_special">Specialised Courses.</div>
                        <div class="trending_expire">*Offer expires in 3 Days.</div>
                    </div> 
                </div>
            </div>
                <button 
					class="next_video_prev"
                    onClick={() => this.prevProperty()}
                    disabled={course.index === 0}
                    ><i class='fa fa-angle-left'></i></button>
            <div class="course_course_list">
                <div className="trending_playlist" style={{
                    'transform': `translateX(-${course.index*(100/courses.length)}%)`}}>
                    {courses.map((particular_course, i) => 
                        <Card key={i} course = {particular_course} current_index = {course.index}/>)}
                </div>
            </div>  
            <div className="arrow_right">
                <button 
                    class="next_video_right"
                    onClick={() => this.nextProperty()} 
                    disabled={course.index===courses.length-2}
                    hidden={course.index===courses.length-2}><i class='fa fa-angle-right'></i></button>
            </div>
        </div>
        <div className="col-12 d-none d-sm-block d-md-none arrow_small">
            <button 
				class="next_video_prev_small"
                onClick={() => this.prevProperty()} 
                disabled={course.index===0}
                hidden={course.index===0}><i class='fa fa-caret-left'></i></button>
            <button 
			 	class="next_video_right_small pull-right"
				onClick={() => this.nextProperty()} 
				disabled={course.index===courses.length-2}
				hidden={course.index===courses.length-2}><i class='fa fa-caret-right'></i></button>     
        </div>
    </div>);
  }
}

export default TrendingCourse;
