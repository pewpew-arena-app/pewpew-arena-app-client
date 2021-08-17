import React, { Component } from 'react';
import './Select.css'

class Select extends Component {

  // Expected props:
  // - selected: string, currently selected option
  // - options: array, all possible options
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
      console.log("A handler was passed from above, using it.");
      this.props.changeHandler(event);
  }

  render() {
    return (
      <div >
        <select value={this.props.selected} onChange={this.handleChange}>
        {this.props.options.map(
          (optionItem) => (
            <option key={optionItem} value={optionItem}>{optionItem}</option>
          )
        )}
        </select>
      </div>
    );
  }
}

export default Select;
