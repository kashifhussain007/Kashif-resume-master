import React, { useState } from 'react';
import { VscClose, VscListSelection } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import Themetoggle from '../components/themetoggle';
import { logotext, socialprofils } from '../content_option';
import './style.css';

const Headermain = () => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle('ovhidden');
  };

  return (
    <>
      <header className='fixed-top site__header'>
        <div className='d-flex align-items-center justify-content-between'>
          <Link className='navbar-brand nav_ac' to='/'>
            {logotext}
          </Link>
          <div className='d-flex align-items-center'>
            <Themetoggle />
            <div className='menu__button  nav_ac' aria-label='menu' onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscListSelection />}
            </div>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? 'menu__opend' : ''}`}>
          <div className='bg__menu h-100'>
            <div className='menu__wrapper'>
              <div className='menu__container p-3'>
                <ul className='the_menu'>
                  <li className='menu_item '>
                    <Link onClick={handleToggle} to='/' className='my-3'>
                      Home
                    </Link>
                  </li>
                  <li className='menu_item'>
                    <Link onClick={handleToggle} to='/portfolio' className='my-3'>
                      Portfolio
                    </Link>
                  </li>
                  <li className='menu_item'>
                    <Link onClick={handleToggle} to='/about' className='my-3'>
                      About
                    </Link>
                  </li>
                  <li className='menu_item'>
                    <Link onClick={handleToggle} to='/contact' className='my-3'>
                      Contact
                    </Link>
                  </li>
                  <li className='menu_item'>
                    <Link to='https://drive.google.com/file/d/1gP5Dflao685hIRj_2GitQOIR2oY71fCq/view?usp=sharing' target='_blank' className='my-3'>
                      Resume
                    </Link>
                 </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3'>
            <div className='d-flex'>
              <a href={socialprofils.linkedin} target='_blank' rel='noreferrer'>
                LinkedIn
              </a>
              <a href={socialprofils.github} target='_blank' rel='noreferrer'>
                Github
              </a>
              <a href={socialprofils.instagram} target='_blank' rel='noreferrer'>
                Instagram
              </a>
            </div>
            <p className='copyright m-0'>Copyright © {logotext}</p>
          </div>
        </div>
      </header>
      <div className='br-top'></div>
      <div className='br-bottom'></div>
      <div className='br-left'></div>
      <div className='br-right'></div>
    </>
  );
};

export default Headermain;
