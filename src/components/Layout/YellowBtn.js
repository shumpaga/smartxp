import React from 'react';
import './yellowBtn.scss';

const YellowBtn = ({ text, link }) => {
  return (
    <a className='yellow-btn' href={link}>
      {text}
    </a>
  );
};

export default YellowBtn;
