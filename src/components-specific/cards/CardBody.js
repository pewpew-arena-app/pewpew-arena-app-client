import React, { Component } from 'react';
import './Cards.css';
import TargetNumber from './TargetNumber';

class CardBody extends Component {

  render() {

    const borderStyle = {
      border: '3px solid '+this.props.themeColor
    };

    return (
      <div className = "card-body">
        <div className = "card-body-subheader">
          {this.props.owner}
        </div>
        <div className = "card-body-text">
          {this.props.description}
        </div>
        <TargetNumber
          hitTarget = {this.props.hitTarget}
          borderStyle = {borderStyle}
          position = "BODY-RIGHT"/>
        <TargetNumber
          hitTarget = {this.props.figure}
          borderStyle = {borderStyle}
          position = "BODY-LEFT"/>
      </div>
    );
  }
}

export default CardBody;
