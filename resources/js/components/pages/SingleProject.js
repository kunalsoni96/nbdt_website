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
          <h2>Project Details</h2>
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
  {/* Start Project Details Area */}
  <section className="project-details-area ptb-80">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="project-details-image">
            <img src="public/assets/img/works-image/1.jpg" alt="work" />
            <link to="https://www.youtube.com/watch?v=bk7McNUjWgw" className="popup-youtube" /><i data-feather="play" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="project-details-image">
            <img src="public/assets/img/works-image/2.jpg" alt="work" />
            <link to="public/assets/img/works-image/2.jpg" className="popup-btn" /><i data-feather="plus" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="project-details-image">
            <img src="public/assets/img/works-image/4.jpg" alt="work" />
            <link to="public/assets/img/works-image/4.jpg" className="popup-btn" /><i data-feather="plus" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="project-details-image">
            <img src="public/assets/img/works-image/3.jpg" alt="work" />
            <link to="https://www.youtube.com/watch?v=bk7McNUjWgw" className="popup-youtube" /><i data-feather="play" />
          </div>
        </div>
        <div className="col-lg-12 col-md-12">
          <div className="project-details-desc">
            <h3>Network Marketing</h3>
            <p>Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei latine prop riae na, mea cu purto debitis. Primis nost rud no eos, no impedit dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise.  Ad po exerci nusquam eos te. Cu altera expet enda qui, munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui, munere oblique theophr astus ea vix modus civiu mod eratius.</p>
            <p>Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei latine prop riae na, mea cu purto debitis. Primis nost rud no eos, no impedit dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise.  Ad po exerci nusquam eos te. Cu altera expet enda qui, munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui, munere oblique theophr astus ea vix modus civiu mod eratius.</p>
            <div className="project-details-information">
              <div className="single-info-box">
                <h4>Happy Client</h4>
                <p>John Doe</p>
              </div>
              <div className="single-info-box">
                <h4>Category</h4>
                <p>Portfolio, Personal</p>
              </div>
              <div className="single-info-box">
                <h4>Date</h4>
                <p>February 28, 2019</p>
              </div>
              <div className="single-info-box">
                <h4>Share</h4>
                <ul>
                  <li><link to="#" /><i data-feather="facebook" /></li>
                  <li><link to="#" /><i data-feather="twitter" /></li>
                  <li><link to="#" /><i data-feather="instagram" /></li>
                  <li><link to="#" /><i data-feather="linkedin" /></li>
                </ul>
              </div>
              <div className="single-info-box">
                <link to="#" className="btn btn-primary" />Live Preview
              </div>
            </div>
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