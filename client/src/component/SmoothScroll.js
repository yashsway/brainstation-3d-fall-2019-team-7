import React from 'react';
import Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// https://scotch.io/tutorials/implementing-smooth-scrolling-in-react

export default class SmoothScroll extends React.Component {

  render () {

    return (
      
      <Link
        activeClass="active"
        to="section1" // the element
        spy={true} // make Link selected when scroll is at its targets position
        smooth={true}
        offset={-70} // scroll additional px (like padding)
        duration= {500} //  time of the scroll animation, can be a number or a function 
      />
    )
  }
}