import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return(
		<footer class="footer">
			<div class="row">
				<div class="col-md-6">
					<div class="row">
						<div class="col-md-12 footer_left_heading">
							Careeranna
						</div>
						<div class="col-md-12 footer_left_text">
								Data Interpretation and Logical Reasoning section of CAT does not have a<br/> defined syllabus. It can consist of questions which involve high level of <br/>calculations and logic. Paper Analysis for DI/LR presents and assesses the <br/>difficulty level of this section for past few years. .
						</div>
						<div class="col-md-12 footer_left_links">
								<div class="col-md-3 col-xs-6 padding-left-none">
										<h6>RESOURCE</h6>
										<ul>
											  <li><a href="https://www.careeranna.com/certification/hr" title="Finance" target="_blank">Finance</a></li>
											  <li><a href="https://www.careeranna.com/certification/marketing" title="Marketing" target="_blank">Marketing</a></li>
											  <li><a href="https://www.careeranna.com/certification/hr" title="Human Resource" target="_blank">Human Resource</a></li>
											  <li><a href="#" title="Information Technology" target="_blank">Information Technology</a></li>
											  <li><a href="https://www.careeranna.com/certification/marketing" title="Project Management" target="_blank">Project Management</a></li>
											  <li><a href="https://www.careeranna.com/certification/marketing" title="Product Marketing" target="_blank">Product Marketing</a></li>
											  
										</ul>
									</div>
									
									<div class="col-md-3 col-xs-6 padding-left-none">
											<h6>SUPPORT</h6>
											<ul>
												<li><a href="https://www.careeranna.com/CAT" title="CAT" target="_blank">CAT</a></li>
												<li><a href="https://www.careeranna.com/XAT" title="XAT" target="_blank">XAT</a></li>
												<li><a href="https://www.careeranna.com/NMAT" title="NMAT" target="_blank">NMAT</a></li>
												<li><a href="https://www.careeranna.cohttps://www.careeranna.com/m/SNAP" title="SNAP" target="_blank">SNAP</a></li>
												<li><a href="https://www.careeranna.com/TISSNET" title="TISSNET" target="_blank">TISSNET</a></li>
												<li><a href="https://www.careeranna.com/MICAT" title="MICAT" target="_blank">MICAT</a></li>
												<li><a href="https://www.careeranna.com/IIFT" title="IIFT" target="_blank">IIFT</a></li>	
											</ul>
										</div>
										<div class="col-md-3 col-xs-6 padding-left-none">
												<h6>RESOURCE</h6>
												<ul>
												  <li><a id="ga-14df32" href="https://www.careeranna.com/courses">Test Prep</a></li>
												  <li><a id="ga-41441e" href="#">Corporate Partners</a></li>
												  <li><a id="ga-41441e" href="#">Success Stories</a></li>
												  <li><a id="ga-41441e" href="https://www.careeranna.com/articles">Articles</a></li>
												  <li><a href="https://www.careeranna.com/MAT" title="MAT" target="_blank">MAT</a></li>
												  <li><a href="https://www.careeranna.com/BANKING" title="BANKING" target="_blank">BANKING</a></li>
												  <li><a href="https://www.careeranna.com/SSC-CGL" title="SSC CGL" target="_blank">SSC CGL</a></li>
												  <li><a href="https://www.careeranna.com/SSC-CGL" title="Govt. Jobs" target="_blank">Govt. Jobs</a></li>
												</ul>
											</div>
											<div class="col-md-3 col-xs-6 padding-left-none">
													<h6>SUPPORT</h6>
													<ul>
													  <li><a id="ga-14df32" href="https://www.careeranna.com/careers">Jobs</a></li>
													  <li><a id="ga-2dc1d0" href="https://www.careeranna.com/about">About Us</a></li>
													  <li><a id="ga-2dc1d0" href="https://www.careeranna.com/contact">Contact Us</a></li>
													  <li><a id="ga-2dc1d0" href="https://www.careeranna.com/terms-of-service">Terms of Service</a></li>
													  <li><a href="#" title="Artificial Intelligence" target="_blank">Artificial Intelligence</a></li>
													  <li><a href="#" title="Blockchain" target="_blank">Blockchain</a></li>
													  <li><a href="#" title="Machine Learning" target="_blank">Machine Learning</a></li>
													  
													</ul>
												</div>
												<div class="col-md-12 social_icons">
														<ul class="list-inline">
															<li><a href="#"><i class="fa fa-facebook"></i></a></li>
															<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
															<li><a href="#"><i class="fa fa-instagram"></i></a></li>
															<li><a href="#"><i class="fa fa-twitter"></i></a></li>
															<li><a href="#"><i class="fa fa-youtube"></i></a></li>
														</ul>
													</div>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="row">
						<div class="col-md-12">
								<div class="coprwrite_link col-md-12 padding-none">
										<ul class="list-inline">
											<li class="col-xs-3 overview"><a href="#">overview</a></li>
											<li class="col-xs-3 overview"><a href="#">overview</a></li>
											<li class="col-xs-3 overview"><a href="#">overview</a></li>
											<li class="col-xs-3 overview"><a href="#">overview</a></li>
										</ul>
									</div>
						</div>
						
	                    <div class="col-md-12 subs_form">
								<h4>Subscribe to the newsletter</h4>
								<h5>Our monthly update</h5>
									
								<form action="#" method="post" >
									<input type="hidden"  />
									<div class="form-group col-md-7 padding-none">
										<input type="email" class="form-control" name="email" required=""  placeholder="Enter your Email" id="" />
									</div>
									<div class="col-md-5">
										<button class="btn btn-primary" type="submit">Subscribe</button>
									</div>
								</form>
							</div> 

							<div class="footer_copyright col-md-12 padding-none">
									<p>© CAREERANNA Pvt. Ltd. 2019</p>
								</div>
					</div>
				</div>
			</div>
		</footer>
    );
  }
}

export default Footer;
