import React from 'react';
import './Topbar.scss';
import { FaTwitterSquare, FaGithub, FaLinkedin} from 'react-icons/fa';

const Topbar = ({menuOpen, setMenuOpen}) => {


  return (
    <div className={"topbar " + (menuOpen && "active")} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Logo.</a>
          <div className="itemContainer">
            <a href="https://github.com/Nuri1977" target='_blank' rel="noreferrer" className='icon'><FaGithub className='icon'/></a>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/nuri-lacka/" target='_blank' rel="noreferrer" className='icon'><FaLinkedin className='icon'/></a>
          </div>
          <div className="itemContainer">
            <a href="https://twitter.com/LackaNuri" target='_blank' rel="noreferrer" className='icon'><FaTwitterSquare className='icon'/></a>
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