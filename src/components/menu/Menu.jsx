import React from 'react';
import './Menu.scss';

const Menu = ({menuOpen, setMenuOpen}) => {
  const togleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={togleMenu}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={togleMenu}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={togleMenu}>
          <a href="#works">Works</a>
        </li>
        <li onClick={togleMenu}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={togleMenu}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu