import React from 'react';
import './input.scss';

export default class Input extends React.Component {

  render() {
    return(
      <input 
      className="input" 
      type="text" 
      onChange={this.props.changeHandler} 
      placeholder={this.props.placeholder}
      name={this.props.name} 
      />
    )
  }
}