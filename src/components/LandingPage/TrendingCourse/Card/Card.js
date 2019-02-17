import React from 'react';
import './Card.css';

const Card = ({course, current_index}) => {  

    return (
        <div className="Coursecard" id={`card-${course.index}`} >
            <div class="row">
            <div class="items trending_course">
        <a href={course.url}>
        <img src={course.pic_url} class="pic" alt={course.title} />
        <div class="course_heading">
            {course.title}
        </div>
        <div class="rating">
            <div class="rating_star colorBlue">{course.ratings} &nbsp;
                <span class="fa fa-star colorBlue"></span>
                <span class="fa fa-star colorBlue"></span>
                <span class="fa fa-star colorBlue"></span>
                <span class="fa fa-star colorBlue"></span> 
                <span class="fa fa-star-half-o colorBlue" aria-hidden="true"></span>       
                <span></span>
            </div>
        </div>
        <div class="course_views">
        <i class="fa fa-users" aria-hidden="true"></i>  {course.leaners}
        </div>
        </a>
    </div>
            </div>
        </div>
    );
}

export default Card;
