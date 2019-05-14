import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
export default class Contact extends Component{
    render(){
        return(
          <div>
        
  <Navbar />
  {/* End Navbar Area */}
  {/* Start Page Title */}
 <div>
  <div className="page-title-area">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <h2>FAQ</h2>
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
  {/* Start FAQ Area */}
  <section className="faq-area ptb-80">
    <div className="container">
      <div className="faq-accordion">
        <ul className="accordion">
          <li className="accordion-item">
            <link className="accordion-title active" to="javascript:void(0)" />How do permissions work in Google Play Instant?
            <p className="accordion-content show">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.</p>
          </li>
          <li className="accordion-item">
            <link className="accordion-title" to="javascript:void(0)" />Is Smart Lock required for instant apps?
            <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.</p>
          </li>
          <li className="accordion-item">
            <link className="accordion-title" to="javascript:void(0)" />Can I have multiple activities in a single feature?
            <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.</p>
          </li>
          <li className="accordion-item">
            <link className="accordion-title" to="javascript:void(0)" />Can I share resources between features?
            <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.</p>
          </li>
          <li className="accordion-item">
            <link className="accordion-title" to="javascript:void(0)" />Is multidex supported for instant apps?
            <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.</p>
          </li>
          <li className="accordion-item">
            <link className="accordion-title" to="javascript:void(0)" />Can I share resources between features?
            <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.</p>
          </li>
        </ul>
      </div>
      <div className="faq-contact">
        <h3>Ask Your Question</h3>
        <form>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input type="text" placeholder="Name" className="form-control" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input type="email" placeholder="Email" className="form-control" />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <input type="text" placeholder="Subject" className="form-control" />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <textarea name="message" cols={30} rows={6} placeholder="Message" className="form-control" defaultValue={""} />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <button className="btn btn-primary" type="submit">Submit Now!</button>
            </div>
          </div>
        </form>
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

        
            );
    }
}
