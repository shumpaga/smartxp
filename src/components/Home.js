import React, { Fragment } from 'react';
import Clients from './Layout/Clients';
import Navbar from './Layout/Navbar';
import Services from './Layout/Services';
import Slider from './Layout/Slider';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Slider />
      <Services />
      <Clients />
    </Fragment>
  );
};

export default Home;
