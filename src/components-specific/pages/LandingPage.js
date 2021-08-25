import React, { Component } from 'react';
import './Page.css'
import InfoTab from '../../components-stock/content/InfoTab.js'

import CoolLink from '../../components-stock/util/CoolLink'
import AppData from '../../resources/json/app-data.json'

//this still makes sense, it's the version of the client side app
const appVersion = AppData.appVersionMajor+"."+AppData.appVersionMinor;

class LandingPage extends Component {


  render() {
    //console.log("about to render LandingPage.js");
    const infoText = "Deck Manager versione "+appVersion;

    return (
      <div className = "page">
        <InfoTab text={infoText}/>
        <CoolLink to="/pick" buttonText = "GO"/>
      </div>
    );
  }
}

export default LandingPage;
