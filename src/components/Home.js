import React from 'react';
import Navbar from './Layout/Navbar';
import Services from './Layout/Services';
import Slider from './Layout/Slider';

const Home = () => {
  return (
    <div className=''>
      <div className=''>
        <div className=''>
          <Navbar />
          <Slider />
          <Services />
          <div style={{ background: 'blue', height: '1000px', zIndex: '2' }}>
            BODY
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
