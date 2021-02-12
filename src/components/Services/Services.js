import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import SingleService from './SingleService';
import './services.scss';

const Services = () => {
  const services = [
    {
      color: 'blue',
      text:
        "Une phase de découverte qui nous permet de nous plonger dans votre univers afin d’assurer un service de qualité axé sur l'amélioration de la conversion et l'augmentation de l'engagement des clients.",
      title: 'Stratégie & conception UI/UX',
    },
    {
      color: 'red',
      text:
        'Développement spécifique web & mobile. Audit de code, mise en place d’environnement, Testing, maintenance et suivi d’évolution de tout projet.',
      title: 'Dévelopement de solution et audit',
    },
    {
      color: 'green',
      text:
        'R&D. Data visualisation. OpenData. Apprentissage continu. Outils statistiques. Algorithmes.',
      title: 'Data, Machine learning & DevOps',
    },
  ];
  const width = useWindowWidth();
  const widthSize =
    width > 900 ? '' : width > 600 ? 'tablet-width' : 'small-width';
  return (
    <div className={`section-main section-services ${widthSize}`}>
      <h2 className='section-title'>
        Nos <strong>Services</strong>
      </h2>
      <p className='section-descr'>
        Agence full-services, stratégie, conception et développement.
      </p>
      <div className='section-content'>
        {width > 900 && (
          <img
            className='section-img'
            alt={'Les services de SmartXP'}
            src={`${process.env.PUBLIC_URL}/services/services-img.svg`}
          />
        )}
        <div className='services'>
          {services.map((service) => (
            <SingleService {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
