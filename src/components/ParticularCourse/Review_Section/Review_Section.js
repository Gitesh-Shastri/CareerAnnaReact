import React, { Component } from 'react';
import './Review_Section.css';
import axios from 'axios';
import Card from './Card/Card';

class Review_Section extends Component {

	constructor(props){
		super(props);
		this.state = {
			reviews: [],
			review: { "reviewID": "1236", "productID": "216", "rating": "5", "fullname": "Vindhya", "emailaddress": "vindhyakaushal@gmail.com", "comments": "Will surely recommend to friends. High quality material and mocks were strictly in line with the exam.", "date": "2018-02-02", "publish": "1", "user_id": "393704", "index": 0 },
			disabled: true		
		}
	}

	componentDidMount = () => {
			 axios.get('https://www.careeranna.com/webiste-api/fetchCourseReview.php?id=216')
			.then(response => {
			 	console.log(response);
			 	this.setState({reviews: response.data, review: response.data[0]});
			}); 
	}

	nextProperty = () => {
		if(this.state.review.index != undefined){
			const newIndex = this.state.review.index+1;
			this.setState({
				review: this.state.reviews[newIndex]
			})
		}
  }

  prevProperty = () => {
    const newIndex = this.state.review.index-1;
    this.setState({
			review: this.state.reviews[newIndex]
    })
  }

  render() {
		const {reviews, review} = this.state;
		const single_review = this.state.review;

    return (<section class="review_sec">
		<div class="row">
			<div class="col-md-3 col-xs-12">
				<div class="review_tab">
						<div class="review_title">
							What Students Say About Us
						</div>
				</div>
			</div>
			<div class={`col-md-8 card_view active-slide-${review.index}`}>
			<div class="user_view_wrapper" >
					{
						reviews.map((review_item, i) => 
						<Card key={i} review = {review_item} current_index={review.index}/>)
					}
				</div>
			</div>
			<div class={`col-md-8 col-xs-12 card_view_small active-slide-${single_review.index}`}>
					<Card key={single_review.index} review = {single_review}/>
			</div>
			<div class="col-md-12 col-xs-12">
			<button 
					class="next_slide_left"
					onClick={() => this.prevProperty()} 
					disabled={review.index==0}
					hidden={review.index==0}
				><i class='fa fa-caret-left'></i></button>
			 <button 
			 		class="next_slide_right"
					onClick={() => this.nextProperty()} 
					disabled={review.index==reviews.length-1}
					hidden={review.index==reviews.length-1}
        ><i class='fa fa-caret-right'></i></button>
			</div>
		</div>
</section>
    );
  }
}

export default Review_Section;
