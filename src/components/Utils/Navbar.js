import React from 'react';
import YellowBtn from './YellowBtn';
import { useWindowWidth } from '@react-hook/window-size';
import './navbar.scss';

const Navbar = () => {
  const width = useWindowWidth();
  return (
    <header className={`navbar ${width > 600 ? '' : 'small-width'}`}>
      <div className='logo'>
        <a href='/'>
          <img
            src={process.env.PUBLIC_URL + '/logo-menu.svg'}
            alt='Logo'
            title='Logo'
          />
        </a>
      </div>
      {width > 600 && (
        <nav className='navigation'>
          <ul>
            <li>
              <a className='font font-16' href='/'>
                Accueil
              </a>
            </li>
            <li>
              <a className='font font-16' href='#services'>
                Services
              </a>
            </li>
            <li>
              <a href='#realisations'>Réalisations</a>
            </li>
            <li>
              <YellowBtn text='Nous contacter' link='/contact' />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
