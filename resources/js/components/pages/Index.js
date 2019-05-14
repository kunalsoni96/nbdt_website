import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './layouts/Navbar.js';
import Footer from './layouts/Footer.js';


export default class Index extends Component{
    render(){
        return(
          <div>
           <div>
  
  {/* End Preloader Area */}
  {/* Start Navbar Area */}
          <Navbar />
  {/* End Navbar Area */}
  {/* Start Main Banner */}
  <div className="main-banner">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-5">
              <div className="hero-content">
                <h1>Secure IT Solutions for a more secure environment</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <Link to="#" className="btn btn-primary">Get Started</Link>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="banner-image">
                <img src="public/assets/img/banner-image/man.png" className="wow fadeInDown" data-wow-delay="0.6s" alt="man" />
                <img src="public/assets/img/banner-image/code.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="code" />
                <img src="public/assets/img/banner-image/carpet.png" className="wow fadeInLeft" data-wow-delay="0.6s" alt="carpet" />
                <img src="public/assets/img/banner-image/bin.png" className="wow zoomIn" data-wow-delay="0.6s" alt="bin" />
                <img src="public/assets/img/banner-image/book.png" className="wow bounceIn" data-wow-delay="0.6s" alt="book" />
                <img src="public/assets/img/banner-image/dekstop.png" className="wow fadeInDown" data-wow-delay="0.6s" alt="dekstop" />
                <img src="public/assets/img/banner-image/dot.png" className="wow zoomIn" data-wow-delay="0.6s" alt="dot" />
                <img src="public/assets/img/banner-image/flower-top-big.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="flower-top-big" />
                <img src="public/assets/img/banner-image/flower-top.png" className="wow rotateIn" data-wow-delay="0.6s" alt="flower-top" />
                <img src="public/assets/img/banner-image/keyboard.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="keyboard" />
                <img src="public/assets/img/banner-image/pen.png" className="wow zoomIn" data-wow-delay="0.6s" alt="pen" />
                <img src="public/assets/img/banner-image/table.png" className="wow zoomIn" data-wow-delay="0.6s" alt="table" />
                <img src="public/assets/img/banner-image/tea-cup.png" className="wow fadeInLeft" data-wow-delay="0.6s" alt="tea-cup" />
                <img src="public/assets/img/banner-image/headphone.png" className="wow rollIn" data-wow-delay="0.6s" alt="headphone" />
                <img src="public/assets/img/banner-image/main-pic.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="main-pic" />
              </div>
            </div>
          </div>
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
  {/* End Main Banner */}
  {/* Start Boxes Area */}
  <section className="boxes-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="single-box">
            <div className="icon">
              <i data-feather="server" />
            </div>
            <h3>Zero Configuration</h3>
            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-box bg-f78acb">
            <div className="icon">
              <i data-feather="code" />
            </div>
            <h3>Code Security</h3>
            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-box bg-c679e3">
            <div className="icon">
              <i data-feather="users" />
            </div>
            <h3>Team Management</h3>
            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-box bg-eb6b3d">
            <div className="icon">
              <i data-feather="git-branch" />
            </div>
            <h3>Access Controlled</h3>
            <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Boxes Area */}
  {/* Start Cloud Hosting Services */}
  <section className="services-area ptb-80 bg-f7fafd">
    <div className="container">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-lg-6 col-md-12 services-content">
          <div className="section-title">
            <h2>Cloud Hosting Services</h2>
            <div className="bar" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="database" /> Cloud databases
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="globe" /> Website hosting
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box">
                <i data-feather="file" /> File storage
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
          <img src="public/assets/img/services-right-image/book-self.png" className="wow fadeInDown" data-wow-delay="0.6s" alt="book-self" />
          <img src="public/assets/img/services-right-image/box.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="box" />
          <img src="public/assets/img/services-right-image/chair.png" className="wow fadeInLeft" data-wow-delay="0.6s" alt="chair" />
          <img src="public/assets/img/services-right-image/cloud.png" className="wow zoomIn" data-wow-delay="0.6s" alt="cloud" />
          <img src="public/assets/img/services-right-image/cup.png" className="wow bounceIn" data-wow-delay="0.6s" alt="cup" />
          <img src="public/assets/img/services-right-image/flower-top.png" className="wow fadeInDown" data-wow-delay="0.6s" alt="flower" />
          <img src="public/assets/img/services-right-image/head-phone.png" className="wow zoomIn" data-wow-delay="0.6s" alt="head-phone" />
          <img src="public/assets/img/services-right-image/monitor.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="monitor" />
          <img src="public/assets/img/services-right-image/mug.png" className="wow rotateIn" data-wow-delay="0.6s" alt="mug" />
          <img src="public/assets/img/services-right-image/table.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="table" />
          <img src="public/assets/img/services-right-image/tissue.png" className="wow zoomIn" data-wow-delay="0.6s" alt="tissue" />
          <img src="public/assets/img/services-right-image/water-bottle.png" className="wow zoomIn" data-wow-delay="0.6s" alt="water-bottle" />
          <img src="public/assets/img/services-right-image/wifi.png" className="wow fadeInLeft" data-wow-delay="0.6s" alt="wifi" />
          <img src="public/assets/img/services-right-image/cercle-shape.png" className="bg-image rotateme" alt="shape" />
          <img src="public/assets/img/services-right-image/main-pic.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="main-pic" />
        </div>
      </div>
    </div>
  </section>
  {/* End Cloud Hosting Services */}
  {/* Start Design & Development Services */}
  <section className="services-area ptb-80">
    <div className="container">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-lg-6 col-md-12 services-left-image">
          <img src="public/assets/img/services-left-image/big-monitor.png" className="wow fadeInDown" data-wow-delay="0.6s" alt="big-monitor" />
          <img src="public/assets/img/services-left-image/creative.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="creative" />
          <img src="public/assets/img/services-left-image/developer.png" className="wow fadeInLeft" data-wow-delay="0.6s" alt="developer" />
          <img src="public/assets/img/services-left-image/flower-top.png" className="wow zoomIn" data-wow-delay="0.6s" alt="flower-top" />
          <img src="public/assets/img/services-left-image/small-monitor.png" className="wow bounceIn" data-wow-delay="0.6s" alt="small-monitor" />
          <img src="public/assets/img/services-left-image/small-top.png" className="wow fadeInDown" data-wow-delay="0.6s" alt="small-top" />
          <img src="public/assets/img/services-left-image/table.png" className="wow zoomIn" data-wow-delay="0.6s" alt="table" />
          <img src="public/assets/img/services-left-image/target.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="target" />
          <img src="public/assets/img/services-left-image/cercle-shape.png" className="bg-image rotateme" alt="shape" />
          <img src="public/assets/img/services-left-image/main-pic.png" className="wow fadeInUp" data-wow-delay="0.6s" alt="main-pic" />
        </div>
        <div className="col-lg-6 col-md-12 services-content">
          <div className="section-title">
            <h2>Design &amp; Development</h2>
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
  {/* End Design & Development Services */}
  {/* Start Features Area */}
  <section className="features-area ptb-80 bg-f7fafd">
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
  {/* Start Team Area */}
  <section className="team-area ptb-80 bg-f9f6f6">
    <div className="container">
      <div className="section-title">
        <h2>Our Awesome Team</h2>
        <div className="bar" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
    <div className="row m-0">
      <div className="owl-carousel">
        <div className="col-lg-12">
          <div className="single-team">
            <div className="team-image">
              <img src="public/assets/img/team-image/1.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Josh Buttler</h3>
                <span>CEO &amp; Founder</span>
              </div>
              <ul>
                <li><Link to="#"><i data-feather="facebook" /></Link></li>
                <li><Link to="#"><i data-feather="twitter" /></Link></li>
                <li><Link to="#"><i data-feather="linkedin" /></Link></li>
                <li><Link to="#"><i data-feather="gitlab" /></Link></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="single-team">
            <div className="team-image">
              <img src="public/assets/img/team-image/2.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Alex Maxwel</h3>
                <span>Marketing Manager</span>
              </div>
              <ul>
                <li><Link to="#"><i data-feather="facebook" /></Link></li>
                <li><Link to="#"><i data-feather="twitter" /></Link></li>
                <li><Link to="#"><i data-feather="linkedin" /></Link></li>
                <li><Link to="#"><i data-feather="gitlab" /></Link></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="single-team">
            <div className="team-image">
              <img src="public/assets/img/team-image/3.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Janny Cotller</h3>
                <span>Web Developer</span>
              </div>
              <ul>
                <li><Link to="#"><i data-feather="facebook" /></Link></li>
                <li><Link to="#"><i data-feather="twitter" /></Link></li>
                <li><Link to="#"><i data-feather="linkedin" /></Link></li>
                <li><Link to="#"><i data-feather="gitlab" /></Link></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="single-team">
            <div className="team-image">
              <img src="public/assets/img/team-image/4.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Jason Statham</h3>
                <span>UX/UI Designer</span>
              </div>
              <ul>
                <li><Link to="#"><i data-feather="facebook" /></Link></li>
                <li><Link to="#"><i data-feather="twitter" /></Link></li>
                <li><Link to="#"><i data-feather="linkedin" /></Link></li>
                <li><Link to="#"><i data-feather="gitlab" /></Link></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="single-team">
            <div className="team-image">
              <img src="public/assets/img/team-image/5.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Corey Anderson</h3>
                <span>Project Manager</span>
              </div>
              <ul>
                <li><Link to="#"><i data-feather="facebook" /></Link></li>
                <li><Link to="#"><i data-feather="twitter" /></Link></li>
                <li><Link to="#"><i data-feather="linkedin" /></Link></li>
                <li><Link to="#"><i data-feather="gitlab" /></Link></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="single-team">
            <div className="team-image">
              <img src="public/assets/img/team-image/1.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Josh Buttler</h3>
                <span>CEO &amp; Founder</span>
              </div>
              <ul>
                <li><Link to="#"><i data-feather="facebook" /></Link></li>
                <li><Link to="#"><i data-feather="twitter" /></Link></li>
                <li><Link to="#"><i data-feather="linkedin" /></Link></li>
                <li><Link to="#"><i data-feather="gitlab" /></Link></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="single-team">
            <div className="team-image">
              <img src="public/assets/img/team-image/2.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Alex Maxwel</h3>
                <span>Marketing Manager</span>
              </div>
              <ul>
                <li><Link to="#"><i data-feather="facebook" /></Link></li>
                <li><Link to="#"><i data-feather="twitter" /></Link></li>
                <li><Link to="#"><i data-feather="linkedin" /></Link></li>
                <li><Link to="#"><i data-feather="gitlab" /></Link></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="single-team">
            <div className="team-image">
              <img src="public/assets/img/team-image/3.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Janny Cotller</h3>
                <span>Web Developer</span>
              </div>
              <ul>
                <li><Link to="#"><i data-feather="facebook" /></Link></li>
                <li><Link to="#"><i data-feather="twitter" /></Link></li>
                <li><Link to="#"><i data-feather="linkedin" /></Link></li>
                <li><Link to="#"><i data-feather="gitlab" /></Link></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="single-team">
            <div className="team-image">
              <img src="public/assets/img/team-image/4.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Jason Statham</h3>
                <span>UX/UI Designer</span>
              </div>
              <ul>
                <li><Link to="#"><i data-feather="facebook" /></Link></li>
                <li><Link to="#"><i data-feather="twitter" /></Link></li>
                <li><Link to="#"><i data-feather="linkedin" /></Link></li>
                <li><Link to="#"><i data-feather="gitlab" /></Link></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="single-team">
            <div className="team-image">
              <img src="public/assets/img/team-image/5.jpg" alt="image" />
            </div>
            <div className="team-content">
              <div className="team-info">
                <h3>Corey Anderson</h3>
                <span>Project Manager</span>
              </div>
              <ul>
                <li><Link to="#"><i data-feather="facebook" /></Link></li>
                <li><Link to="#"><i data-feather="twitter" /></Link></li>
                <li><Link to="#"><i data-feather="linkedin" /></Link></li>
                <li><Link to="#"><i data-feather="gitlab" /></Link></li>
              </ul>
              <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Team Area */}
  {/* Start Fun Facts Area */}
  <section className="funfacts-area ptb-80">
    <div className="container">
      <div className="section-title">
        <h2>We always try to understand users expectation</h2>
        <div className="bar" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-6">
          <div className="funfact">
            <h3><span className="odometer" data-count={180}>00</span>K</h3>
            <p>Downloaded</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-6">
          <div className="funfact">
            <h3><span className="odometer" data-count={20}>00</span>K</h3>
            <p>Feedback</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-6">
          <div className="funfact">
            <h3><span className="odometer" data-count={500}>00</span>+</h3>
            <p>Workers</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-6">
          <div className="funfact">
            <h3><span className="odometer" data-count={70}>00</span>+</h3>
            <p>Contrubutors</p>
          </div>
        </div>
      </div>
      <div className="contact-cta-box">
        <h3>Have any question about us?</h3>
        <p>Don't hesitate to contact us</p>
        <Link to="#" className="btn btn-primary">Contact Us</Link>
      </div>
      <div className="map-bg">
        <img src="public/assets/img/map.png" alt="map" />
      </div>
    </div>
  </section>
  {/* End Fun Facts Area */}
  {/* Start Works Area */}
  <section className="works-area ptb-80 bg-f7fafd">
    <div className="container">
      <div className="section-title">
        <h2>Our Recent Works</h2>
        <div className="bar" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
    <div className="row m-0">
      <div className="works-slides">
        <div className="col-lg-12">
          <div className="single-works">
            <img src="public/assets/img/works-image/1.jpg" alt="image" />
            <Link to="#" className="icon"><i data-feather="settings" /></Link>
            <div className="works-content">
              <h3><Link to="#">Incredible infrastructure</Link></h3>
              <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="single-works">
            <img src="public/assets/img/works-image/2.jpg" alt="image" />
            <Link to="#" className="icon"><i data-feather="settings" /></Link>
            <div className="works-content">
              <h3><Link to="#">Incredible infrastructure</Link></h3>
              <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="single-works">
            <img src="public/assets/img/works-image/3.jpg" alt="image" />
            <Link to="#" className="icon"><i data-feather="settings" /></Link>
            <div className="works-content">
              <h3><Link to="#">Incredible infrastructure</Link></h3>
              <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="single-works">
            <img src="public/assets/img/works-image/4.jpg" alt="image" />
            <Link to="#" className="icon"><i data-feather="settings" /></Link>
            <div className="works-content">
              <h3><Link to="#">Incredible infrastructure</Link></h3>
              <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="single-works">
            <img src="public/assets/img/works-image/5.jpg" alt="image" />
            <Link to="#" className="icon"><i data-feather="settings" /></Link>
            <div className="works-content">
              <h3><Link to="#">Incredible infrastructure</Link></h3>
              <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shape8 rotateme"><img src="public/assets/img/shape2.svg" alt="shape" /></div>
    <div className="shape2 rotateme"><img src="public/assets/img/shape2.svg" alt="shape" /></div>
    <div className="shape7"><img src="public/assets/img/shape4.svg" alt="shape" /></div>
    <div className="shape4"><img src="public/assets/img/shape4.svg" alt="shape" /></div>
  </section>
  {/* End Works Area */}
  {/* Start Pricing Area */}
  <section className="pricing-area ptb-80 bg-f9f6f6">
    <div className="container">
      <div className="section-title">
        <h2>Pricing Plans</h2>
        <div className="bar" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="pricing-table">
            <div className="pricing-header">
              <h3>Basic Plan</h3>
            </div>
            <div className="price">
              <span><sup>$</sup>15.00 <span>/Mon</span></span>
            </div>
            <div className="pricing-features">
              <ul>
                <li className="active">5 GB Bandwidth</li>
                <li className="active">Highest Speed</li>
                <li className="active">1 GB Storage</li>
                <li className="active">Unlimited Website</li>
                <li className="active">Unlimited Users</li>
                <li className="active">24x7 Great Support</li>
                <li>Data Security and Backups</li>
                <li>Monthly Reports and Analytics</li>
              </ul>
            </div>
            <div className="pricing-footer">
              <Link to="#" className="btn btn-primary">Select Plan</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="pricing-table active-plan">
            <div className="pricing-header">
              <h3>Advanced Plan</h3>
            </div>
            <div className="price">
              <span><sup>$</sup>35.00 <span>/Mon</span></span>
            </div>
            <div className="pricing-features">
              <ul>
                <li className="active">10 GB Bandwidth</li>
                <li className="active">Highest Speed</li>
                <li className="active">3 GB Storage</li>
                <li className="active">Unlimited Website</li>
                <li className="active">Unlimited Users</li>
                <li className="active">24x7 Great Support</li>
                <li className="active">Data Security and Backups</li>
                <li>Monthly Reports and Analytics</li>
              </ul>
            </div>
            <div className="pricing-footer">
              <Link to="#" className="btn btn-primary">Select Plan</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
          <div className="pricing-table">
            <div className="pricing-header">
              <h3>Expert Plan</h3>
            </div>
            <div className="price">
              <span><sup>$</sup>65.00 <span>/Mon</span></span>
            </div>
            <div className="pricing-features">
              <ul>
                <li className="active">15 GB Bandwidth</li>
                <li className="active">Highest Speed</li>
                <li className="active">5 GB Storage</li>
                <li className="active">Unlimited Website</li>
                <li className="active">Unlimited Users</li>
                <li className="active">24x7 Great Support</li>
                <li className="active">Data Security and Backups</li>
                <li className="active">Monthly Reports and Analytics</li>
              </ul>
            </div>
            <div className="pricing-footer">
              <Link to="#" className="btn btn-primary">Select Plan</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shape8 rotateme"><img src="public/assets/img/shape2.svg" alt="shape" /></div>
    <div className="shape2 rotateme"><img src="public/assets/img/shape2.svg" alt="shape" /></div>
    <div className="shape7"><img src="public/assets/img/shape4.svg" alt="shape" /></div>
    <div className="shape4"><img src="public/assets/img/shape4.svg" alt="shape" /></div>
  </section>
  {/* End Pricing Area */}
  {/* Start Feedback Area */}
  <section className="feedback-area ptb-80 bg-f7fafd">
    <div className="container">
      <div className="section-title">
        <h2>What users Saying</h2>
        <div className="bar" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="feedback-slides">
        <div className="client-feedback">
          <div>
            <div className="item">
              <div className="single-feedback">
                <div className="client-img">
                  <img src="public/assets/img/client-image/1.jpg" alt="image" />
                </div>
                <h3>John Lucy</h3>
                <span>Web Developer</span>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="item">
              <div className="single-feedback">
                <div className="client-img">
                  <img src="public/assets/img/client-image/2.jpg" alt="image" />
                </div>
                <h3>John Smith</h3>
                <span>Web Developer</span>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="item">
              <div className="single-feedback">
                <div className="client-img">
                  <img src="public/assets/img/client-image/3.jpg" alt="image" />
                </div>
                <h3>Maxwel Warner</h3>
                <span>Web Developer</span>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="item">
              <div className="single-feedback">
                <div className="client-img">
                  <img src="public/assets/img/client-image/4.jpg" alt="image" />
                </div>
                <h3>Ross Taylor</h3>
                <span>Web Developer</span>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="item">
              <div className="single-feedback">
                <div className="client-img">
                  <img src="public/assets/img/client-image/5.jpg" alt="image" />
                </div>
                <h3>James Anderson</h3>
                <span>Web Developer</span>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="item">
              <div className="single-feedback">
                <div className="client-img">
                  <img src="public/assets/img/client-image/1.jpg" alt="image" />
                </div>
                <h3>Steven Smith</h3>
                <span>Web Developer</span>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="item">
              <div className="single-feedback">
                <div className="client-img">
                  <img src="public/assets/img/client-image/2.jpg" alt="image" />
                </div>
                <h3>Steven Lucy</h3>
                <span>Web Developer</span>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="item">
              <div className="single-feedback">
                <div className="client-img">
                  <img src="public/assets/img/client-image/3.jpg" alt="image" />
                </div>
                <h3>John Terry</h3>
                <span>Web Developer</span>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="client-thumbnails">
          <div>
            <div className="item">
              <div className="img-fill"><img src="public/assets/img/client-image/1.jpg" alt="client" /></div>
            </div>
            <div className="item">
              <div className="img-fill"><img src="public/assets/img/client-image/2.jpg" alt="client" /></div>
            </div>
            <div className="item">
              <div className="img-fill"><img src="public/assets/img/client-image/3.jpg" alt="client" /></div>
            </div>
            <div className="item">
              <div className="img-fill"><img src="public/assets/img/client-image/4.jpg" alt="client" /></div>
            </div>
            <div className="item">
              <div className="img-fill"><img src="public/assets/img/client-image/5.jpg" alt="client" /></div>
            </div>
            <div className="item">
              <div className="img-fill"><img src="public/assets/img/client-image/1.jpg" alt="client" /></div>
            </div>
            <div className="item">
              <div className="img-fill"><img src="public/assets/img/client-image/2.jpg" alt="client" /></div>
            </div>
            <div className="item">
              <div className="img-fill"><img src="public/assets/img/client-image/3.jpg" alt="client" /></div>
            </div>
          </div>
          <button className="prev-arrow slick-arrow">
            <i data-feather="arrow-left" />
          </button>
          <button className="next-arrow slick-arrow">
            <i data-feather="arrow-right" />
          </button>
        </div>
      </div>
    </div>
    <div className="shape1"><img src="public/assets/img/shape1.png" alt="shape" /></div>
    <div className="shape2 rotateme"><img src="public/assets/img/shape2.svg" alt="shape" /></div>
    <div className="shape4"><img src="public/assets/img/shape4.svg" alt="shape" /></div>
    <div className="shape5"><img src="public/assets/img/shape5.png" alt="shape" /></div>
    <div className="shape6 rotateme"><img src="public/assets/img/shape4.svg" alt="shape" /></div>
    <div className="shape7"><img src="public/assets/img/shape4.svg" alt="shape" /></div>
    <div className="shape8 rotateme"><img src="public/assets/img/shape2.svg" alt="shape" /></div>
  </section>
  {/* End Feedback Area */}
  {/* Start Ready To Talk Area */}
  <section className="ready-to-talk">
    <div className="container">
      <h3>Ready to talk?</h3>
      <p>Our team is here to answer your question about StartP</p>
      <Link to="#" className="btn btn-primary">Contact Us</Link>
      <span><Link to="#">Or, get started now with a free trial</Link></span>
    </div>
  </section>
  {/* End Ready To Talk Area */}
  {/* Start Partner Area */}
  <div className="partner-area partner-section">
    <div className="container">
      <h5>More that 1.5 million businesses and organizations use StartP</h5>
      <div className="partner-inner">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-1.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover1.png" alt="partner" />
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-2.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover2.png" alt="partner" />
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-3.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover3.png" alt="partner" />
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-4.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover4.png" alt="partner" />
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-5.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover5.png" alt="partner" />
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-6.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover6.png" alt="partner" />
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-7.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover7.png" alt="partner" />
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-8.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover8.png" alt="partner" />
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-9.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover9.png" alt="partner" />
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-10.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover10.png" alt="partner" />
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-11.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover11.png" alt="partner" />
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-12.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover12.png" alt="partner" />
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-13.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover13.png" alt="partner" />
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-14.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover14.png" alt="partner" />
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-15.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover15.png" alt="partner" />
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-16.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover16.png" alt="partner" />
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-17.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover17.png" alt="partner" />
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <Link to="#">
              <img src="public/assets/img/partner-img/partner-18.png" alt="partner" />
              <img src="public/assets/img/partner-img/partner-hover18.png" alt="partner" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Partner Area */}
  {/* Start Blog Area */}
  <section className="blog-area ptb-80">
    <div className="container">
      <div className="section-title">
        <h2>The News from Our Blog</h2>
        <div className="bar" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="single-blog-post">
            <div className="blog-image">
              <Link to="#">
                <img src="public/assets/img/blog-image/1.jpg" alt="image" />
              </Link>
              <div className="date">
                <i data-feather="calendar" /> March 15, 2019
              </div>
            </div>
            <div className="blog-post-content">
              <h3><Link to="#">The security risks of changing package owners</Link></h3>
              <span>by <Link to="#">admin</Link></span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              <Link to="#" className="read-more-btn">Read More <i data-feather="arrow-right" /> </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single-blog-post">
            <div className="blog-image">
              <Link to="#">
                <img src="public/assets/img/blog-image/2.jpg" alt="image" />
              </Link>
              <div className="date">
                <i data-feather="calendar" /> March 17, 2019
              </div>
            </div>
            <div className="blog-post-content">
              <h3><Link to="#">Tips to Protecting Your Business and Family</Link></h3>
              <span>by <Link to="#">smith</Link></span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              <Link to="#" className="read-more-btn">Read More <i data-feather="arrow-right" /> </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
          <div className="single-blog-post">
            <div className="blog-image">
              <Link to="#">
                <img src="public/assets/img/blog-image/3.jpg" alt="image" />
              </Link>
              <div className="date">
                <i data-feather="calendar" /> March 19, 2019
              </div>
            </div>
            <div className="blog-post-content">
              <h3><Link to="#">Protect Your Workplace from Cyber Attacks</Link></h3>
              <span>by <Link to="#">john</Link></span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              <Link to="#" className="read-more-btn">Read More <i data-feather="arrow-right" /> </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Blog Area */}
  {/* Start Footer Area */}
  <Footer />
  {/* End Footer Area */}
  <div className="go-top"><i data-feather="arrow-up" /></div>
</div>


          </div>
            );
    }
}