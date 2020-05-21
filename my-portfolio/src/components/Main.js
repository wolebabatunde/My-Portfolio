import React from 'react';
import {Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Project from './Project';
import Resume from './Resume'

const Main = () =>(
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/project" component={Project}/>
        <Route path="/resume" component={Resume}/>

        
    </Switch>
)
export default Main;