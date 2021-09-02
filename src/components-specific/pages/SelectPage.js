import React, { Component } from 'react';
import '../../components-stock/view/AppView.css';
import InfoTab from '../../components-stock/content/InfoTab.js';
import CharacterSelector from './CharacterSelector.js';
// eslint-disable-next-line
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class SelectPage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const infoText = "Scegli tre personaggi da includere nel tuo mazzo.";

    return (
      <div className = "app-view-body">
        <InfoTab text={infoText}/>
        <CharacterSelector selectedVersion={this.props.location.state.currentlySelectedVersion}/>
      </div>
    );
  }
}

export default SelectPage;
