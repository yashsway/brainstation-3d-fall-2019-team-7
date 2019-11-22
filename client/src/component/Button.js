import React from 'react';
import './button.scss';

export default class Button extends React.Component {
  
  render() {
    
    return(
    <button className="button" onClick={this.props.clickHandler}>{this.props.text}</button>
    )
  }
}