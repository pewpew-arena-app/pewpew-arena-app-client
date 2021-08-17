import React, { Component } from 'react';
import './Cards.css'

class TargetNumber extends Component {



  render() {
    let outerClassName = "";
    let innerClassName = "";
    if(this.props.position==="HEADER") {
      outerClassName = "card-target-container-header";
      innerClassName = "card-target card-target-header";
    }
    else if(this.props.position==="BODY-RIGHT") {
      outerClassName = "card-target-container-body-right";
      innerClassName = "card-target card-target-body-right";
    }
    else if(this.props.position==="BODY-LEFT") {
      outerClassName = "card-target-container-body-left";
      innerClassName = "card-target card-target-body-left";
    }
    return (
      <div className = {outerClassName}>
        <div className = {innerClassName} style = {this.props.borderStyle}>
          {this.props.hitTarget}
        </div>
      </div>
    );
  }
}

export default TargetNumber;
