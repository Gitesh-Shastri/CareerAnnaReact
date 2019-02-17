import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return(
		<footer class="footer">
			<div class="row">
				<div class="col col-md-6">
					<div class="row">
						<div class="col-md-12 footer_left_heading">
							careeranna
						</div>

						<div class="footer_copyright col-12 col-md-12 padding-none">
									<p>© CAREERANNA Pvt. Ltd. 2019</p>
								</div>
								<div class="col-md-12 social_icons">
														<ul class="list-inline">
															<li><a href="https://m.facebook.com/careerannacorp/"><i class="fa fa-facebook"></i></a></li>
															<li><a href="https://www.linkedin.com/company/careeranna"><i class="fa fa-linkedin"></i></a></li>
															<li><a href="https://www.instagram.com/careeranna"><i class="fa fa-instagram"></i></a></li>
															<li><a href="https://twitter.com/CareerAnna"><i class="fa fa-twitter"></i></a></li>
															<li><a href="https://www.youtube.com/channel/UCZmLZ68KNZotm3BxkGsuU4g"><i class="fa fa-youtube"></i></a></li>
														</ul>	
													</div>	

													<div class="col-md-12 subs_form row">
								
								<h4 class="col-md-12 padding-none">Subscribe to our newsletter</h4>									
								<form action="#" method="post" class="row col-md-12 padding-none">
									<div class="form-group col col-md-6 col-sm-6 padding-none">
										<input type="email" class="form-control" name="email" required=""  placeholder="Enter your Email" id="" />
									</div>
									<div class="col-md-5 col col-sm-6 padding-none">
										<button class="btn btn-primary" type="submit">Subscribe</button>
									</div>
								</form>
							</div> 
										
					</div>
				</div>
				<div class="col-md-6 row footer_left_links">
							{/* pl belongs to bootstrap 4 class for padding check documentation*/}
								<div class="col-md-3 col-6 pl-0 pr-0">
										<h6>FREE VIDEO RESOURCE</h6>
										<ul>
											  <li><a href="https://www.careeranna.com/english/free/videos" title="Finance"  >English Free Videos</a></li>
											  <li><a href="https://www.careeranna.com/hindi/free/videos" title="Marketing"  >Hindi Free Videos</a></li>
											  <li><a href="https://www.careeranna.com/tamil/free/videos" title="Marketing"  >Tamil Free Videos</a></li>
											  <li><a href="https://www.careeranna.com/telugu/free/videos" title="Human Resource"  >Telugu Free Videos</a></li>
											  
										</ul>
									</div>
									
									<div class="col-md-2 col-6 pl-0 pr-0">
											<h6>MBA</h6>
											<ul>
												<li><a href="https://www.careeranna.com/CAT" title="CAT" >CAT</a></li>
												<li><a href="https://www.careeranna.com/XAT" title="XAT"  >XAT</a></li>
												<li><a href="https://www.careeranna.com/NMAT" title="NMAT"  >NMAT</a></li>
												<li><a href="https://www.careeranna.com/SNAP" title="SNAP"  >SNAP</a></li>
												<li><a href="https://www.careeranna.com/TISSNET" title="TISSNET"  >TISSNET</a></li>
												<li><a href="https://www.careeranna.com/MICAT" title="MICAT"  >MICAT</a></li>
												<li><a href="https://www.careeranna.com/IIFT" title="IIFT"  >IIFT</a></li>
											</ul>
										</div>

										<div class="col-md-2 col-6 pl-0 pr-0">
										<h6>Certificate Courses</h6>
										<ul>
										<li><a href="https://www.careeranna.com/certification/machine-learning-course" title="Machine Learning"  >Machine Learning</a></li>
										<li><a href="https://www.careeranna.com/certification/artificial-intelligence-course" title="Artificial Intelligence"  >Artificial Intelligence</a></li>
										<li><a href="https://www.careeranna.com/certification/Certified-Associate-in-Material-Management" title="Material Management"  >Material Management</a></li>
										<li><a href="https://www.careeranna.com/certification/product-management" title="Product Management"  >Product Management</a></li>
										</ul>
										</div>
										<div class="col-md-2 col-6 pl-0 pr-0">
												<h6>RESOURCE</h6>
												<ul>
												  <li><a id="ga-14df32" href="https://www.careeranna.com/courses">Test Prep</a></li>
												  <li><a id="ga-41441e" href="https://www.careeranna.com/articles">Articles</a></li>
												</ul>
											</div>
											<div class="col-md-2 col-6 pl-0 pr-0">
													<h6>SUPPORT</h6>
													<ul>
													  <li><a id="ga-14df32" href="https://www.careeranna.com/careers">Jobs</a></li>
													  <li><a id="ga-2dc1d0" href="https://www.careeranna.com/about">About Us</a></li>
													  <li><a id="ga-2dc1d0" href="https://www.careeranna.com/contact">Contact Us</a></li>
													  <li><a id="ga-2dc1d0" href="https://www.careeranna.com/terms-of-service">Terms of Service</a></li>
													</ul>
												</div>
						</div>
			</div>
		</footer>
    );
  }
}

export default Footer;
