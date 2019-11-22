import React from 'react';
import Button from './Button';

export default class Search extends React.Component {

  render () {

    return (
      
      <form className="nav__form">
        <input className="nav__search" type="text" placeholder="Search" />
        <div className="nav__flex-box">
          {/* <Link className="nav__link" to="/upload"> */}
            {/* <Button />  */}
            {/* may not need it */}
          {/* </Link> */}
        </div>
      </form>
    )
  }
}