import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Footer extends Component {
    render(){
    return(
    <footer className="footer-area bg-f7fafd">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="single-footer-widget">
            <div className="logo">
              <Link to="/"><img src="public/assets/img/logo.png" alt="logo" /></Link>
            </div>
            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-footer-widget pl-5">
            <h3>Company</h3>
            <ul className="list">
              <li><Link to="/About">About Us</Link></li>
              <li><Link to="/Services">Services</Link></li>
              <li><Link to="/Features">Features</Link></li>
              <li><Link to="/Pricing">Our Pricing</Link></li>
              <li><Link to="#">Latest News</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-footer-widget">
            <h3>Support</h3>
            <ul className="list">
              <li><Link to="/FAQ">FAQ's</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Terms &amp; Condition</Link></li>
              <li><Link to="#">Community</Link></li>
              <li><Link to="/Contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-footer-widget">
            <h3>Address</h3>
            <ul className="footer-contact-info">
              <li><i data-feather="map-pin" /> KK Road, Beside BSNL Telecom Exchange, Police Colony, Fafadih Chowk, Raipur, Chhattisgarh, 492001</li>
              <li><i data-feather="mail" /> Email: <Link to="#">nbdigitaltechnology@gmail.com</Link></li>
              <li><i data-feather="phone-call" /> Phone: <Link to="#">+ 91 9827900742</Link></li>
            </ul>
            <ul className="social-links">
              <li><Link to="#" className="facebook"><i data-feather="facebook" /></Link></li>
              <li><Link to="#" className="twitter"><i data-feather="twitter" /></Link></li>
              <li><Link to="#" className="instagram"><i data-feather="instagram" /></Link></li>
              <li><Link to="#" className="linkedin"><i data-feather="linkedin" /></Link></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-12 col-md-12">
          <div className="copyright-area">
            <p>Copyright @2019 NB Digital Technology. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
    <img src="public/assets/img/map.png" className="map" alt="map" />
    <div className="shape1"><img src="public/assets/img/shape1.png" alt="shape" /></div>
    <div className="shape8 rotateme"><img src="public/assets/img/shape2.svg" alt="shape" /></div>
  </footer>
    );
}
} 