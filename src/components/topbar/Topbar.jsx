import React from 'react';
import './Topbar.scss';

const Topbar = ({menuOpen, setMenuOpen}) => {


  return (
    <div className={"topbar " + (menuOpen && "active")} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Logo.</a>
          <div className="itemContainer">
            <span>+389 71 241 827</span>
          </div>
          <div className="itemContainer">
            <span>nurilacka@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar