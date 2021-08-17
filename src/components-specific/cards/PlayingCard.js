import React, { Component } from 'react';
import './Cards.css'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import gameData from '../../resources/json/game-data.json';

class PlayingCard extends Component {

  constructor (props) {
    super(props);
    this.state = {
      "expanded": props.expanded
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    if(this.state.expanded)
      this.setState({
        "expanded":false
      });
    else {
      this.setState({
        "expanded":true
      });
    }
  }

  render() {
    return (
      <div className = "card">
        <CardHeader
          title = {this.props.card.title}
          hitTarget = {this.props.card.hitTarget}
          index = {this.props.index}
          toggleFunction = {this.toggle}
          discardFunction = {this.props.discardFunction}
          banishFunction = {this.props.banishFunction}
          owner = {this.props.card.owner}
          themeColor = {gameData.characters[this.props.card.owner].color}
          isExpanded = {this.state.expanded}/>
        {
          this.state.expanded
          ? <CardBody
              description = {this.props.card.description}
              hitTarget = {this.props.card.hitTarget}
              owner = {this.props.card.owner}
              themeColor = {gameData.characters[this.props.card.owner].color}
              figure = {this.props.card.figure}/>
          : null
        }
      </div>
    );
  }
}

export default PlayingCard;
