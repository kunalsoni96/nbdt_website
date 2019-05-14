import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
export default class Contact extends Component{
    render(){
        return(
          <div>
          <div>
  <Navbar />
  {/* End Navbar Area */}
  {/* Start Page Title */}
 <div>
  <div className="page-title-area">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <h2>Services</h2>
        </div>
      </div>
    </div>
    <div className="shape1"><img src="public/assets/img/shape1.png" alt="shape" /></div>
    <div className="shape2 rotateme"><img src="public/assets/img/shape2.svg" alt="shape" /></div>
    <div className="shape3"><img src="public/assets/img/shape3.svg" alt="shape" /></div>
    <div className="shape4"><img src="public/assets/img/shape4.svg" alt="shape" /></div>
    <div className="shape5"><img src="public/assets/img/shape5.png" alt="shape" /></div>
    <div className="shape6 rotateme"><img src="public/assets/img/shape4.svg" alt="shape" /></div>
    <div className="shape7"><img src="public/assets/img/shape4.svg" alt="shape" /></div>
    <div className="shape8 rotateme"><img src="public/assets/img/shape2.svg" alt="shape" /></div>
  </div>
  {/* End Page Title */}
  {/* Start Services Area */}
  <section className="services-area-two ptb-80 bg-f9f6f6">
    <div className="container">
      <div className="section-title">
        <h2>Our Services</h2>
        <div className="bar" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-services-box">
            <div className="icon">
              <i data-feather="settings" />
            </div>
            <h3>Incredible Infrastructure</h3>
            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-services-box">
            <div className="icon">
              <i data-feather="mail" />
            </div>
            <h3>Email Notifications</h3>
            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-services-box">
            <div className="icon">
              <i data-feather="bell" />
            </div>
            <h3>Best Analytics Audits</h3>
            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-services-box">
            <div className="icon bg-c679e3">
              <i data-feather="grid" />
            </div>
            <h3>Simple Dashboard</h3>
            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-services-box">
            <div className="icon bg-c679e3">
              <i data-feather="info" />
            </div>
            <h3>Information Retrieval</h3>
            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-services-box">
            <div className="icon bg-c679e3">
              <i data-feather="hard-drive" />
            </div>
            <h3>Deep Technical SEO</h3>
            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-services-box">
            <div className="icon bg-eb6b3d">
              <i data-feather="mouse-pointer" />
            </div>
            <h3>Drag and Drop Functionality</h3>
            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-services-box">
            <div className="icon bg-eb6b3d">
              <i data-feather="bell" />
            </div>
            <h3>Deadline Reminders</h3>
            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-services-box">
            <div className="icon bg-eb6b3d">
              <i data-feather="send" />
            </div>
            <h3>Modern Keyword Analysis</h3>
            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


  {/* End Fun Facts Area */}
  {/* Start Footer Area */}
  <Footer />
  {/* End Footer Area */}
  <div className="go-top"><i data-feather="arrow-up" /></div>
</div>

          </div>
            );
    }
}