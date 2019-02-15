import React, { Component } from "react";

import './Navigation.css';
import {Link} from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="Nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
                <img
                  class="logo_image"
                  src="https://www.careeranna.com/upload/main_page_testing/LOGO-01.png"
                  id="wordmark"
                />
                </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item nav_link active">
                <a title="Courses" href="https://www.careeranna.com/courses">Courses</a>
              </li>
              <li class="nav-item nav_link">
                <a title="Certifications" href="https://www.careeranna.com/certification" >Certifications</a>
              </li>
              <li class="nav-item nav_link">
                <a title="Free Videos" href="https://www.careeranna.com/english/free/videos" >Free Videos</a>
              </li>
              <li class="nav-item nav_link">
                  <a
                    title="Free Tests"
                    href="https://www.careeranna.com/free-tests"
                  >
                    Free Tests
                  </a>
                </li>
                <li class="nav-item nav_link">
                  <a title="Articles" href="https://www.careeranna.com/articles">
                    News
                  </a>
                </li>
                <li class="nav-item">
                <a
                    title="Get Started"
                    class="btn btn-info primary_btn"
                    href="https://www.careeranna.com/signup#signup"
                  >
                    Sign Up
                  </a>
                </li>
            </ul>
          </div>  
        </nav>
      </div>
    );
  }
}

export default Navigation;
