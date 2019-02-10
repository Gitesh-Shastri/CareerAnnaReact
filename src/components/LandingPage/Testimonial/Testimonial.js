import React, { Component } from 'react';
import './Testimonial.css';

class Testimonial extends Component {
    
    state = {
        users: [
            {
                userpic: "https://www.careeranna.com/img/kartik_iimc.jpg",
                username: "KARTIK BALASUBRAMANIAM",
                profession: "IIM CALCUTTA CLASS OF 2017",
                reviewbody: '“ I approached Career Anna for help with mock interviews and input on WAT and GD\'s once I had received interview calls from IIM A, C, L, K, FMS, amongst others. Commendable Points Shared with me to help convert the calls!”'
            },
            {
                userpic: "https://www.careeranna.com/img/kaushik.jpg",
                username: "KAUSHIK DUTTA",
                profession: "SPJIMR MUMBAI CLASS OF 2017",
                reviewbody: '“ Varun sir, I\'m speechless. Running out of words to thank you for the personal guidance. I\'ll remember what Supply Chain is throughout my life. Thank you so much! ”'
            },
            {
                userpic: "https://www.careeranna.com/img/Ayush.jpg",
                username: "AYUSH K",
                profession: "IIFT 20167",
                reviewbody: '“ This wouldn\'t have been possible without CareerAnna. My score of 55.58 in IIFT 2016 is because of you. GK course helped me in maximizing my score and it took me to 99.2 percentile. Thank you”'
            },
            {
                userpic: "https://www.careeranna.com/img/NIKHIL.jpg",
                username: "NIKHIL DULIPALA",
                profession: "MDI GURGAON, CLASS OF 2017",
                reviewbody: '“ Career Anna is an amazing platform that gives accurate and authentic information about B schools. The online sessions and courses helped me a lot during GDPI. Thanks Career Anna!”'
            },
            {
                userpic: "https://www.careeranna.com/ca_night/student/Disha_IIM-Calcutta.png",
                username: "Disha",
                profession: "IIM Calcutta",
                reviewbody: '“ Career Anna for help with mock interviews and input on WAT and GD\'s once I had received interview calls from IIM. Commendable Points Shared with me to help convert the calls”'
            },
            {
                userpic: "https://www.careeranna.com/img/IMG_2238.jpg",
                username: "Ashay Kamble",
                profession: "MICA Ahmedabad",
                reviewbody: '“I would like to appreciate the support I received from Careeranna platform for my MBA preparations, MICA entrance in particular. The MICAT course had exhaustive material for the sections that make MICAT different from other exams. I was benefited from the feedback received from Varun Sir.”'
            },
            {
                userpic: "https://www.careeranna.com/img/DSC_0382.jpg",
                username: "Pallabi Padhi",
                profession: "MICA Ahmedabad",
                reviewbody: '“Everything got done and dusted yesterday and I am now sinking in the reality. I would really like to thank you from the bottom of my heart for all the necessary suggestions and the guided course of preparation available at Career Anna.”'
            },
            {
                userpic: "https://www.careeranna.com/img/1520534514110_2.jpg",
                username: "Neha Kalyani",
                profession: "MICA Ahmedabad",
                reviewbody: '“I would like to extend my thanks to the Career Anna family for being a part of my MBA prep journey. Thank you Varun sir, for making my dream come true and being the best mentor throughout my preparation.”'
            },
            {
                userpic: "https://www.careeranna.com/img/Writabrita-Ray.jpg",
                username: "Writabrita Ray",
                profession: "IIM Indore",
                reviewbody: '“Thank you Varun sir and Team Career Anna for the help with preparation and converts.”'
            }
        ]
    }


  render() {

    const  users = this.state.users.map(user => {
        return <div class="items testimonial_course">
                <div class="row">
                    <div class="col-md-4">
                            <img src={user.userpic} class="img-responsive img-circle"
                    alt=""/>
                    </div>
                    <div class="col-md-8">
                            <div class="user_name">{user.username}</div>
                            <div class="profession">{user.profession}</div>
                            <div class="rating">
                                    <div class="rating_star">
                                        <span class="fa fa-star colorBlue"></span>
                                        <span class="fa fa-star colorBlue"></span>
                                        <span class="fa fa-star colorBlue"></span>
                                        <span class="fa fa-star colorBlue"></span> 
                                        <span class="fa fa-star"></span>       
                                        <span></span>
                                    </div>
                                </div>
                    </div>
                    <div class="col-md-12 review">
                        {user.reviewbody}
                    </div>
                    <div class="col-md-12 review_created">
                        January 15, 2019
                    </div>
                </div>
                
            </div>
    });

    return (
      <div class="TrendingCourse">
        <div class="row">
                <div class="col-md-4 testimonialCard">
                    <div class="testimonialtext">
                        <div class="testimonialheading">
                                student
                        </div>
                        <div class="testimonialheading2">
                                testimonial
                        </div>
                    </div>
                </div>
                <div class="col-md-9 " id="testimonial_slider">
                        <div class="owl-carousel">
                            {users}
                        </div>
                        </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
