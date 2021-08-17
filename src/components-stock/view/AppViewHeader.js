import React, { Component } from 'react';
import './AppView.css'
import gameData from '../../resources/json/game-data.json'
// eslint-disable-next-line
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class AppViewHeader extends Component {
/*
  constructor (props) {
    super(props);
    this.state = {
      text: props.text
    };
  }
*/
  render() {
    return (
      <div className = "app-view-header">
        <Link to="/">
          {gameData.gameName}
        </Link>
      </div>
    );
  }
}

export default AppViewHeader;
