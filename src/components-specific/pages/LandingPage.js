import React, { Component } from 'react';
import './Page.css'
import InfoTab from '../../components-stock/content/InfoTab.js'

import CoolLink from '../../components-stock/util/CoolLink'
import AppData from '../../resources/json/app-data.json'
import Select from '../../components-stock/util/Select';
//import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import ENDPOINTS from '../../resources/json/endpoints.json'

//this still makes sense, it's the version of the client side app
const appVersion = AppData.appVersionMajor+"."+AppData.appVersionMinor;

class LandingPage extends Component {

  constructor (props) {
    super(props);
    this.state = {};
    this.versionChangeHandler = this.versionChangeHandler.bind(this);
  }

  componentDidMount() {
    console.log("Component did mount, fetching versions now");
    fetch(ENDPOINTS.VERSIONS)
    .then(res => res.json())
    .then((getVersionsResponse) => {
      if(getVersionsResponse.gameVersions && getVersionsResponse.gameVersions.length>0) {
        this.setState({
          availableVersions: getVersionsResponse.gameVersions,
          currentlySelectedVersion: getVersionsResponse.gameVersions[0].id
        })
      }
      else {
        console.error("No versions no party, hombre");
      }
    })
    .catch(console.log);
  }

  versionChangeHandler(event) {
    console.log("You changed the version, big man --> " + event.target.value);
    this.setState({currentlySelectedVersion : event.target.value});
  }
  
  render() {
    //console.log("about to render LandingPage.js");
    const infoText = "Deck Manager\nSeleziona una versione del gioco a cui giocare, quindi clicca GO";
    if(this.state.availableVersions) {
      if(this.state.availableVersions.length) {
        console.log("About to render, state is\n"+JSON.stringify(this.state));
        return (
          <div className = "page">
            <InfoTab text={infoText}/>
          <label>Seleziona una versione</label>
          <Select
            options={this.state.availableVersions}
            changeHandler = {this.versionChangeHandler}
            selected={this.state.currentlySelectedVersion}/>
            <CoolLink to= {
                  {
                    "pathname" : "/pick",
                    "state" : this.state
                  }
                } buttonText = "GO"/>
          </div>
        );
      }
      else {
        return(
          <div className = "page">No versions? Something's wrong...</div>
        );
      }
    }
    else {
      return(
        <div className = "page">Loading...</div>
      );
    }
  }
}

export default LandingPage;
