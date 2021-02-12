import React, { Fragment } from 'react';
import Footer from './Utils/Footer';
import SingleSlide from './Slider/SingleSlide';
import Navbar from './Utils/Navbar';

const Contact = () => {
  const headerData = {
    filename: '1.jpeg',
    header: true,
    title: (
      <h2>
        Nous <strong>contacter</strong>
      </h2>
    ),
    text: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    ),
  };

  return (
    <Fragment>
      <Navbar />
      <SingleSlide {...headerData} />
      <Footer row1Enabled={false} />
    </Fragment>
  );
};

export default Contact;
