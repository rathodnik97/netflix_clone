import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () =>{
        if (window.scrollY > 100) {
          handleShow(true);
        }else handleShow(false);
      });
      return () => {
        window.removeEventListener("scroll");
      };
    }, []);

  return (
    <div className={'nav ${show && "nav__black"}'}>
      <img className='nav_logo'
      src='https://commons.wikimedia.org/wiki/File:Netflix_2015_logo.svg#/media/File:Netflix_2015_logo.svg'
      alt='Netflix logo'
      />
      <img className='nav_avtar'
      src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
      alt='Netflix logo'
      />
    </div>
  );
}

export default Nav;
