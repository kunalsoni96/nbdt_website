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
  <div>
  
  <div className="page-title-area">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <h2>Contact Us</h2>
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
  {/* Start Contact Info Area */}
  <section className="contact-info-area ptb-80">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="contact-info-box">
            <div className="icon">
              <i data-feather="mail" />
            </div>
            <h3>Mail Here</h3>
            <p><link to="#" />admin@startp.com</p>
            <p><link to="#" />info@startp.com</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="contact-info-box">
            <div className="icon">
              <i data-feather="map-pin" />
            </div>
            <h3>Visit Here</h3>
            <p>27 Division St, New York, NY 10002, USA</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
          <div className="contact-info-box">
            <div className="icon">
              <i data-feather="phone" />
            </div>
            <h3>Call Here</h3>
            <p><link to="#" />+123 456 7890</p>
            <p><link to="#" />+241 452 4526</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Contact Info Area */}
  {/* Map */}
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.413936396539!2d81.63411101476741!3d21.255076385876173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd90099cc3b3%3A0xb4dde33eced9388e!2sNB+Digital+Technologies!5e0!3m2!1sen!2sin!4v1557819702931!5m2!1sen!2sin" width="100%" height={450} frameBorder={0} style={{border: 0}} allowFullScreen />

  {/* Start Contact Area */}
  <section className="contact-area ptb-80">
    <div className="container">
      <div className="section-title">
        <h2>Get In Touch With Us</h2>
        <div className="bar" />
        <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
      </div>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-lg-6 col-md-12">
          <img src="assets/img/1.png" alt="nbdt" />
        </div>
        <div className="col-lg-6 col-md-12">
          <form id="contactForm">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Name" />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Email" />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-12 col-md-6">
                <div className="form-group">
                  <input type="text" name="phone" id="phone" className="form-control" placeholder="Phone" />
                </div>
              </div>
              <div className="col-lg-12 col-md-6">
                <div className="form-group">
                  <input type="text" name="msg_subject" id="msg_subject" className="form-control" placeholder="Subject" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea name="message" className="form-control" id="message" cols={30} rows={5} required data-error="Write your message" placeholder="Your Message" defaultValue={""} />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <button type="submit" className="btn btn-primary">Send Message</button>
                <div id="msgSubmit" className="h3 text-center hidden" />
                <div className="clearfix" />
              </div>
            </div>
          </form>
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
