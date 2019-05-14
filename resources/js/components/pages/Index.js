import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
export default class Contact extends Component{
    render(){
        return(
          <div>
               <Navbar />
          
  <div className="page-title-area">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <h2>Features</h2>
        </div>
      </div>
    </div>
    <div className="shape1"><img src="assets/img/shape1.png" alt="shape" /></div>
    <div className="shape2 rotateme"><img src="assets/img/shape2.svg" alt="shape" /></div>
    <div className="shape3"><img src="assets/img/shape3.svg" alt="shape" /></div>
    <div className="shape4"><img src="assets/img/shape4.svg" alt="shape" /></div>
    <div className="shape5"><img src="assets/img/shape5.png" alt="shape" /></div>
    <div className="shape6 rotateme"><img src="assets/img/shape4.svg" alt="shape" /></div>
    <div className="shape7"><img src="assets/img/shape4.svg" alt="shape" /></div>
    <div className="shape8 rotateme"><img src="assets/img/shape2.svg" alt="shape" /></div>
  </div>
  {/* End Page Title */}
  {/* Start Features Area */}
  <section className="features-area ptb-80 bg-f9f6f6">
    <div className="container">
      <div className="section-title">
        <h2>Our Features</h2>
        <div className="bar" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="single-features">
            <div className="icon">
              <i data-feather="settings" />
            </div>
            <h3>Incredible Infrastructure</h3>
            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="single-features">
            <div className="icon">
              <i data-feather="mail" />
            </div>
            <h3>Email Notifications</h3>
            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="single-features">
            <div className="icon bg-c679e3">
              <i data-feather="grid" />
            </div>
            <h3>Simple Dashboard</h3>
            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="single-features">
            <div className="icon bg-c679e3">
              <i data-feather="info" />
            </div>
            <h3>Information Retrieval</h3>
            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="single-features">
            <div className="icon bg-eb6b3d">
              <i data-feather="mouse-pointer" />
            </div>
            <h3>Drag and Drop Functionality</h3>
            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="single-features">
            <div className="icon bg-eb6b3d">
              <i data-feather="bell" />
            </div>
            <h3>Deadline Reminders</h3>
            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Features Area */}
  {/* Start Features Area */}
  <section className="features-area-two ptb-80 bg-f7fafd">
    <div className="container">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-lg-6 col-md-12 services-content">
          <div className="section-title">
            <h2>Experience The Best Features Ever</h2>
            <div className="bar" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="lock" /> Secure &amp; Fast
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="watch" /> Rich experience
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="users" /> Support Stuffs
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="trending-up" /> Forex trading
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="folder" /> File backups
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="monitor" /> Remote desktop
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="mail" /> Email servers
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="cloud" /> Hybrid cloud
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 services-right-image">
          <img src="assets/img/services-right-image/book-self.png" className="wow fadeInDown" data-wow-delay="0.6s" alt="book-self" />
          <img src="assets/img/services-right-image/box.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="box" />
          <img src="assets/img/services-right-image/chair.png" className="wow fadeInLeft" data-wow-delay="0.6s" alt="chair" />
          <img src="assets/img/services-right-image/cloud.png" className="wow zoomIn" data-wow-delay="0.6s" alt="cloud" />
          <img src="assets/img/services-right-image/cup.png" className="wow bounceIn" data-wow-delay="0.6s" alt="cup" />
          <img src="assets/img/services-right-image/flower-top.png" className="wow fadeInDown" data-wow-delay="0.6s" alt="flower" />
          <img src="assets/img/services-right-image/head-phone.png" className="wow zoomIn" data-wow-delay="0.6s" alt="head-phone" />
          <img src="assets/img/services-right-image/monitor.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="monitor" />
          <img src="assets/img/services-right-image/mug.png" className="wow rotateIn" data-wow-delay="0.6s" alt="mug" />
          <img src="assets/img/services-right-image/table.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="table" />
          <img src="assets/img/services-right-image/tissue.png" className="wow zoomIn" data-wow-delay="0.6s" alt="tissue" />
          <img src="assets/img/services-right-image/water-bottle.png" className="wow zoomIn" data-wow-delay="0.6s" alt="water-bottle" />
          <img src="assets/img/services-right-image/wifi.png" className="wow fadeInLeft" data-wow-delay="0.6s" alt="wifi" />
          <img src="assets/img/services-right-image/cercle-shape.png" className="bg-image rotateme" alt="shape" />
          <img src="assets/img/services-right-image/main-pic.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="main-pic" />
        </div>
      </div>
    </div>
  </section>
  {/* End Features Area */}
  {/* Start Features Area */}
  <section className="features-area-two ptb-80">
    <div className="container">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-lg-6 col-md-12 services-left-image">
          <img src="assets/img/services-left-image/big-monitor.png" className="wow fadeInDown" data-wow-delay="0.6s" alt="big-monitor" />
          <img src="assets/img/services-left-image/creative.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="creative" />
          <img src="assets/img/services-left-image/developer.png" className="wow fadeInLeft" data-wow-delay="0.6s" alt="developer" />
          <img src="assets/img/services-left-image/flower-top.png" className="wow zoomIn" data-wow-delay="0.6s" alt="flower-top" />
          <img src="assets/img/services-left-image/small-monitor.png" className="wow bounceIn" data-wow-delay="0.6s" alt="small-monitor" />
          <img src="assets/img/services-left-image/small-top.png" className="wow fadeInDown" data-wow-delay="0.6s" alt="small-top" />
          <img src="assets/img/services-left-image/table.png" className="wow zoomIn" data-wow-delay="0.6s" alt="table" />
          <img src="assets/img/services-left-image/target.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="target" />
          <img src="assets/img/services-left-image/cercle-shape.png" className="bg-image rotateme" alt="shape" />
          <img src="assets/img/services-left-image/main-pic.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="main-pic" />
        </div>
        <div className="col-lg-6 col-md-12 services-content">
          <div className="section-title">
            <h2>What Our Software Can Do For You</h2>
            <div className="bar" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="layout" /> Responsive design
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="code" /> React web development
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="smartphone" /> Android apps development
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="code" /> Laravel web development
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="smartphone" /> iOS apps development
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="pen-tool" /> UX/UI design
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="shopping-cart" /> E-commerce development
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="check-circle" /> Print ready design
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

 
  {/* End Navbar Area */}
  {/* Start Page Title */}
  
  {/* End Fun Facts Area */}
  {/* Start Footer Area */}
  <Footer />
  {/* End Footer Area */}
  <div className="go-top"><i data-feather="arrow-up" /></div>
</div>

            );
    }
}
