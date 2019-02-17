import React, { Component } from 'react';
import './Testimonial.css';

import Card from './Card/Card';

class Testimonial extends Component {
    
    state = {
        users: [
            {
                userpic: "https://www.careeranna.com/img/kaushik.jpg",
                username: "KAUSHIK DUTTA",
                index: 0,
                profession: "SPJIMR MUMBAI CLASS OF 2017",
                reviewbody: 'Varun sir, I\'m speechless. Running out of words to thank you for the personal guidance. I\'ll remember what Supply Chain is throughout my life. Thank you so much! '
            },
            {
                userpic: "https://www.careeranna.com/img/Ayush.jpg",
                username: "AYUSH K",
                index: 1,
                profession: "IIFT 2017",
                reviewbody: 'This wouldn\'t have been possible without CareerAnna. My score of 55.58 in IIFT 2016 is because of you. GK course helped me in maximizing my score and it took me to 99.2 percentile. Thank you'
            },
            {
                userpic: "https://www.careeranna.com/img/NIKHIL.jpg",
                username: "NIKHIL DULIPALA",
                index: 2,
                profession: "MDI GURGAON, CLASS OF 2017",
                reviewbody: 'Career Anna is an amazing platform that gives accurate and authentic information about B schools. The online sessions and courses helped me a lot during GDPI. Thanks Career Anna!'
            },
            {
                userpic: "https://www.careeranna.com/ca_night/student/Disha_IIM-Calcutta.png",
                username: "Disha",
                index: 3,
                profession: "IIM Calcutta",
                reviewbody: 'Career Anna for help with mock interviews and input on WAT and GD\'s once I had received interview calls from IIM. Commendable Points Shared with me to help convert the calls'
            },
            {
                userpic: "https://www.careeranna.com/img/IMG_2238.jpg",
                username: "Ashay Kamble",
                index: 4,
                profession: "MICA Ahmedabad",
                reviewbody: 'I would like to appreciate the support I received from Careeranna platform for my MBA preparations, MICA entrance in particular. The MICAT course had exhaustive material for the sections that make MICAT different from other exams. I was benefited from the feedback received from Varun Sir.'
            },
            {
                userpic: "https://www.careeranna.com/img/DSC_0382.jpg",
                username: "Pallabi Padhi",
                index: 5,
                profession: "MICA Ahmedabad",
                reviewbody: 'Everything got done and dusted yesterday and I am now sinking in the reality. I would really like to thank you from the bottom of my heart for all the necessary suggestions and the guided course of preparation available at Career Anna.'
            },
            {
                userpic: "https://www.careeranna.com/img/1520534514110_2.jpg",
                index: 6,
                username: "Neha Kalyani",
                profession: "MICA Ahmedabad",
                reviewbody: 'I would like to extend my thanks to the Career Anna family for being a part of my MBA prep journey. Thank you Varun sir, for making my dream come true and being the best mentor throughout my preparation.'
            },
            {
                userpic: "https://www.careeranna.com/img/Writabrita-Ray.jpg",
                username: "Writabrita Ray",
                index: 7,
                profession: "IIM Indore",
                reviewbody: 'Thank you Varun sir and Team Career Anna for the help with preparation and converts.'
            },
            {
                userpic: "https://www.careeranna.com/img/kartik_iimc.jpg",
                username: "KARTIK BALA...",
                index: 8,
                profession: "IIM CALCUTTA CLASS OF 2017",
                reviewbody: 'I approached Career Anna for help with mock interviews and input on WAT and GD\'s once I had received interview calls from IIM A, C, L, K, FMS, amongst others. Commendable Points Shared with me to help convert the calls!'
            }
        ],
        user: {
            userpic: "https://www.careeranna.com/img/kaushik.jpg",
            username: "KAUSHIK DUTTA",
            index: 0,
            profession: "SPJIMR MUMBAI CLASS OF 2017",
            reviewbody: 'Varun sir, I\'m speechless. Running out of words to thank you for the personal guidance. I\'ll remember what Supply Chain is throughout my life. Thank you so much! '
        },
    }

    nextProperty = () => {
        console.log(this.state.user.index);
		if(this.state.user.index !== undefined){
			const newIndex = this.state.user.index+1;
			this.setState({
				user: this.state.users[newIndex]
			})
		}
  }

  timer() {
    if(this.state.user.index === this.state.users.length-1) { 
        this.setState({
            user: this.state.users[0]
        })
    } else {
    this.setState({
        user: this.state.users[this.state.user.index+1]
    })
}
  }

  prevProperty = () => {    
    const newIndex = this.state.user.index-1;
    this.setState({
			user: this.state.users[newIndex]
    })
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 3000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  render() {

    const  users = this.state.users;

    const user_item = this.state.user;

   
    return (
      <div class="TestimonialReviews">
        <div className="col-12 heading_small">
        Student Testimonials
        </div>
      
         <div class="row">
            <div class="TestimonialReviewsCard d-none d-md-block ">
            <div className="TestimonialReviewsInside">
            <div className="review_box">
            <div className="reviewheading">
                    Student
                </div>
                <div className="reviewsubheading">
                    Testimonials
                </div>
                </div>
            </div>
            </div>
            <div className="arrow_row d-none d-md-block">
            <button 
                    class="review_prev"
                    onClick={() => this.prevProperty()} 
                    disabled={user_item.index===0}
                    hidden={user_item.index===0}
                ><i class='fa fa-caret-left'></i></button>
            </div>
            <div class="review_play_list">
                <div className="review_playlist" style={{
				'transform': `translateX(-${user_item.index*(100/users.length)}%)`
			}}> {
                users.map((particular_user, i) => 
                <Card key={i} review = {particular_user} current_index = {user_item.index}/>)
            }
            </div>
            </div>
            <div class="test_arrow d-none d-md-block">
                    <button 
                            class="next_video_right_test" 
                           onClick={() => this.nextProperty()}
                           ><i class='fa fa-caret-right'></i></button>
                   </div> 
            </div>
            <div className="col-12 arrow_small">
          <button 
					      class="next_video_prev_small"
                onClick={() => this.prevProperty()} ><i class='fa fa-caret-left'></i>
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

export default Testimonial;
