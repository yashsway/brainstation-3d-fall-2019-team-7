import React from 'react';
import './burger.scss';
import {slide as Menu} from 'react-burger-menu';
// https://github.com/negomi/react-burger-menu

// note that <Burger /> must be place on top, or it won't show

export default class Burger extends React.Component {
  showSettings (e) {
    e.preventDefault();
  }

  render () {

    return (
      <Menu isOpen={true} width={ 280 } >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
      </Menu>
      
    )
  }
}