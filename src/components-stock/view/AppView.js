import React, { Component } from 'react';
import './AppView.css'
import AppViewHeader from './AppViewHeader';
//import AppViewBody from './AppViewBody';
import LandingPage from '../../components-specific/pages/LandingPage'
import PlayPage from '../../components-specific/pages/PlayPage'
import SelectPage from '../../components-specific/pages/SelectPage'
// eslint-disable-next-line
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class AppView extends Component {

  render() {
    //console.log("about to render AppView.js");
    return (
      <div className = "app-view">
        <AppViewHeader />
        <Route exact path="/" component={LandingPage}/>
        <Route path="/pick" component={SelectPage}/>
        <Route path="/play" component={PlayPage}/>
      </div>
    );
  }
}

export default AppView;
