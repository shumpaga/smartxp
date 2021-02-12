import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import './footer.scss';

const Footer = () => {
  const width = useWindowWidth();
  return (
    <div className={`footer ${width > 600 ? '' : 'small-width'}`}>
      <div className='row1'>
        <div className='row1-mail'>
          Des idées de projets digitaux à éxécuter ?
          <br />
          <span>contact@smart-xp.com</span>
        </div>
        <div className='row1-contacts'>
          <span>
            <img
              alt={'France'}
              src={`${process.env.PUBLIC_URL}/footer/france-flag.svg`}
            />
          </span>{' '}
          (+33) 642426980
          <br />
          <span>
            <img
              alt={'Bénin'}
              src={`${process.env.PUBLIC_URL}/footer/benin-flag.svg`}
            />
          </span>{' '}
          (+229) 91534040
          <br />
          8AM - 5PM
        </div>
      </div>
      <div className='row2'>
        <p className='row2-text'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </p>
        <hr className='footer-hr' />
        <p className='row2-copyright'>&copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
