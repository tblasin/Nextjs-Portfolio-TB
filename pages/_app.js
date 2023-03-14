import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Particles from '../components/Particle';



function Myapp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Particles />
    </>
  );
}

export default Myapp;
