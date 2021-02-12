import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import TextLoop from 'react-text-loop';
import './clients.scss';

const Clients = () => {
  const width = useWindowWidth();
  return (
    <div className={`section-clients ${width > 600 ? '' : 'small-width'} `}>
      <div className='clients'>
        <div className='clients-blur'> </div>
        <div className='clients-content'>
          <img
            alt={'ESGC VAK Ecole Supérieure de Génie Civil VERECHAGUINE A.K.'}
            src={`${process.env.PUBLIC_URL}/clients/esgcvak.png`}
          />
        </div>
      </div>
      <div className='clients-text-loop'>
        Ils nous font confiance car{' '}
        <TextLoop>
          <span>nous sommes jeunes et dynamiques</span>
          <span>nous travaillons de l'idée à sa réalisation</span>
          <span>nous apportons une expertise riche et variée</span>
          <span>nous transformons leur entreprise</span>
          <span>
            nos solutions sont efficaces, optimales et
            <br />
            rapides
          </span>
        </TextLoop>
      </div>
      <img
        className='clients-main-img'
        alt={'Team Work Desk'}
        src={`${process.env.PUBLIC_URL}/clients/team-work.svg`}
      />
    </div>
  );
};

export default Clients;
