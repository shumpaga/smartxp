import React, { Fragment } from 'react';
import Clients from './Clients/Clients';
import Services from './Services/Services';
import Slider from './Slider/Slider';
import Footer from './Utils/Footer';
import Navbar from './Utils/Navbar';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Slider />
      <Services />
      <Clients />
      <Footer />
    </Fragment>
  );
};

export default Home;
