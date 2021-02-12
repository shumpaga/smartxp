import React from 'react';
import './singleService.scss';

const SingleService = ({ color, text, title }) => {
  return (
    <div className='service'>
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
