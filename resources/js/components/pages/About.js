import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
export default class About extends Component{
    render(){
        return(
          <div>
  <Navbar />
  {/* End Navbar Area */}
  {/* Start Page Title */}
  <div className="page-title-area">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <h2>About Us</h2>
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
  {/* Start About Area */}
  <section className="about-area ptb-80">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="about-image">
            <img src="public/assets/img/1.png" alt="image" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="about-content">
            <div className="section-title">
              <h2>About Us</h2>
              <div className="bar" />
              <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis egestas ante, sed viverra nunc tincidunt nec nteger nonsed condimntum elit, sit amet feugiat lorem. Proin tempus sagittis velit vitae scelerisque.</p>
            <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
            <p>Business-to-business metrics analytics value proposition funding angel investor entrepreneur alpha ramen equity gamification. Social proof partner network research.</p>
          </div>
        </div>
      </div>
      <div className="about-inner-area">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="about-text">
              <h3>Our History</h3>
              <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="about-text">
              <h3>Who we are</h3>
              <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End About Area */}
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
  {/* Start Footer Area */}
 <Footer />
  {/* End Footer Area */}
  <div className="go-top"><i data-feather="arrow-up" /></div>
</div>

        
            );
    }
}