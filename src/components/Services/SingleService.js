import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import './singleService.scss';

const SingleService = ({ color, text, title }) => {
  const width = useWindowWidth();
  const widthSize =
    width > 900 ? '' : width > 600 ? 'tablet-width' : 'small-width';
  return (
    <div className={`service ${widthSize} `}>
      <div className={`service-title ${color}`}>
        <h3>{title}</h3>
      </div>
      <div className='service-descr'>
        <img
          alt={title}
          src={`${process.env.PUBLIC_URL}/services/${color}-icon.svg`}
        />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SingleService;
