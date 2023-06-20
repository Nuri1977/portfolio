import React from 'react';
import './Topbar.scss';

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            {!menuOpen ? (
              <img src="assets/nl-high-resolution-logo-black-on-transparent-background.png" alt="logo" height='40px'/>
            ) : (
              <img src="assets/nl-high-resolution-logo-white-on-transparent-background.png" alt="logo" height='40px'/>
            )}
          </a>
        </div>

        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
