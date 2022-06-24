import React, { useEffect, useRef } from 'react';
import './Intro.scss';
import { init } from 'ityped';
import { SiRubyonrails, SiJavascript, SiReact, SiPostgresql } from "react-icons/si";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer"],
    });
  }, []);

  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/nuri.jpg" alt="" />
          <div>
            <h3>Stack: JavaScript, React, Rails</h3>
          </div>
          <div className='social'>
            <SiRubyonrails className='icons'/>
            <SiJavascript className='icons'/>
            <SiReact className='icons'/>
            <SiPostgresql className='icons'/>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Nuri Lacka</h1>
          <h3>Full-stack <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro