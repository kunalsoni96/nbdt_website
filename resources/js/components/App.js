import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route} from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Features from './pages/Features';
import Services from './pages/Services';
import Projects from './pages/Projects';
import SingleProject from './pages/SingleProject';
import Team from './pages/Team';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

export default class App extends Component {
    render() {
        return (
           <HashRouter>
            <div>
                    <Route exact path="/" component={Index} />
                    <Route path="/About" component={About} />
                    <Route path="/Features" component={Features} />
                    <Route path="/Services" component={Services} />
                    <Route path="/SingleProject" component={SingleProject} />
                    <Route path="/Projects" component={Projects} />
                    <Route path="/Team" component={Team} />
                    <Route path="/Pricing" component={Pricing} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/FAQ" component={FAQ} />
                    
            </div>
           </HashRouter>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
