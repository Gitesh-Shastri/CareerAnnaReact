import React, { Component } from "react";

import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Nav">
        <nav class="navbar navbar-default">
          <div class="container">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span class="icon-bar" />
                <span class="icon-bar" />
                <span class="icon-bar" />
              </button>
              <a class="navbar-brand" href="#myPage">
                <img
                  class="logo_image"
                  src="https://www.careeranna.com/upload/main_page_testing/LOGO-01.png"
                  id="wordmark"
                />
              </a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav navbar-right">
                <li class="link_redirect">
                  <a title="Courses" href="https://www.careeranna.com/courses">
                    Exam Prep
                  </a>
                </li>
                <li class="link_redirect">
                  <a
                    title="Certifications"
                    href="https://www.careeranna.com/certification"
                  >
                    Certifications
                  </a>
                </li>
                <li class="link_redirect">
                  <a
                    title="Free Tests"
                    href="https://www.careeranna.com/free-tests"
                  >
                    Free Tests
                  </a>
                </li>
                <li class="link_redirect">
                  <a title="Articles" href="?php  echo base_url();?>articles">
                    Articles
                  </a>
                </li>
                <li>
                  <a
                    title="Get Started"
                    class="btn btn-info primary_btn"
                    href="https://www.careeranna.com/signup#signup"
                  >
                    GET STARTED
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
