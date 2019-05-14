import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Navbar extends Component{
    render(){
        return(
<header id="header">
    <div className="startp-mobile-nav">
      <div className="logo">
        <Link to="/"><img src="public/assets/img/logo.png" alt="logo" /></Link>
      </div>
    </div>
    <div className="startp-nav">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light">
          <Link className="navbar-brand" to="/"><img src="public/assets/img/logo.png" alt="logo" /></Link>
          <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
            <ul className="navbar-nav nav ml-auto">
              <li className="nav-item"><Link to="/" className="nav-link active" replace>Home</Link>
                
              </li>
              <li className="nav-item"><Link to="/About" replace className="nav-link">About</Link></li>
              <li className="nav-item"><Link to="/Features" className="nav-link">Features</Link></li>
              <li className="nav-item"><Link to="/Services" className="nav-link">Services</Link></li>
              <li className="nav-item"><Link to="/Projects" className="nav-link">Projects</Link></li>
              <li className="nav-item"><Link to="/Team" className="nav-link">Team</Link></li>
              <li className="nav-item"><Link to="/Pricing" className="nav-link">Pricing</Link></li>
            </ul>
          </div>
          <div className="others-option">
            <Link to="/Contact" className="btn btn-light">Contact</Link>
          
          </div>
        </nav>
      </div> 
    </div>
  </header>
        );
}
}