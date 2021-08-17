import React, { Component } from 'react';
import gameData from '../../resources/json/game-data.json';
import Select from '../../components-stock/util/Select';
// eslint-disable-next-line
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import CoolLink from '../../components-stock/util/CoolLink'

class CharacterSelector extends Component {

  constructor (props) {
    super(props);
    this.state = {
      characterList: gameData.characterList,
      currentSelect1: gameData.characterList[0],
      currentSelect2: gameData.characterList[1],
      currentSelect3: gameData.characterList[2]
    };
    this.changeHandler1 = this.changeHandler1.bind(this);
    this.changeHandler2 = this.changeHandler2.bind(this);
    this.changeHandler3 = this.changeHandler3.bind(this);
  }

  changeHandler1 (e) {
    console.log("changing currentSelect1 to "+e.target.value);
    this.setState(
      {
        "currentSelect1" : e.target.value
      }
    );
  }

  changeHandler2 (e) {
    console.log("changing currentSelect2 to "+e.target.value);
    this.setState(
      {
        "currentSelect2" : e.target.value
      }
    );
  }

  changeHandler3 (e) {
    console.log("changing currentSelect3 to "+e.target.value);
    this.setState(
      {
        "currentSelect3" : e.target.value
      }
    );
  }

  render() {

    return (
      <div className = "content-tab">
        <Select
        options={this.state.characterList}
        changeHandler = {this.changeHandler1}
        selected = {this.state.currentSelect1}/>
        <Select
        options={this.state.characterList}
        changeHandler = {this.changeHandler2}
        selected = {this.state.currentSelect2}/>
        <Select
        options={this.state.characterList}
        changeHandler = {this.changeHandler3}
        selected = {this.state.currentSelect3}/>
        <CoolLink
          buttonText="START GAME"
          to= {
            {
              "pathname" : "/play",
              "state" : this.state
            }
          }
          optStyle = {
            {
              "fontSize" : "13px"
            }
          }/>
      </div>
    );
  }
}

export default CharacterSelector;
