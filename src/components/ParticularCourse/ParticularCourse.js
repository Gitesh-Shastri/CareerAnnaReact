import React, { Component } from 'react';

import './ParticularCourse.css';

import Intro from './Intro/Intro';
import Rating from './RatingSection/Rating';
import ReviewSection from './Review_Section/Review_Section';
import VideoSlider from './VideoSlider/VideoSlider';
import CourseContent from './Course_content/Course_content';
import FAQ from './FAQ/FAQ';
import RelatedCourse from './Related_Course/Related_course';

class ParticularCourse extends Component {
    
    render() {
        return(<div name="ParticularCourse">
            <Intro />
            <Rating />
            <ReviewSection />
            <VideoSlider />
            <CourseContent />
            <RelatedCourse />
            <FAQ />
            </div>
        );
    }
}

export default ParticularCourse;