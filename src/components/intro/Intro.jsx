import React, { useEffect, useRef } from 'react';
import './Intro.scss';
import { init } from 'ityped';
import {
  SiRubyonrails,
  SiJavascript,
  SiReact,
  SiPostgresql,
  SiTypescript,
  SiRedux,
  SiMui,
  SiTailwindcss,
  SiJest,
  SiTestinglibrary,
  SiCypress,
  SiFirebase,
  SiApollographql,
  SiSwagger,
  SiDocker,
} from 'react-icons/si';

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer'],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <div className='social'>
            <SiJavascript className='icons' />
            <SiTypescript className='icons' />
            <SiReact className='icons' />
            <SiRedux className='icons' />
            <SiMui className='icons' />
            <SiTailwindcss className='icons' />
          </div>
          <div className='social'>
            <SiJest className='icons' />
            <SiTestinglibrary className='icons' />
            <SiCypress className='icons' />
            <SiApollographql className='icons' />
            <SiSwagger className='icons' />
          </div>
          <div className='social'>
            <SiRubyonrails className='icons' />
            <SiPostgresql className='icons' />
            <SiFirebase className='icons' />
            <SiDocker className='icons' />
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <img src='assets/nuri.jpg' alt='' />
          <h2>Hi There, I'm </h2>
          <h1>Nuri Lacka</h1>
          <h3>
            Front-end <span ref={textRef}></span>
          </h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt='' />
        </a>
      </div>
    </div>
  );
};

export default Intro;
