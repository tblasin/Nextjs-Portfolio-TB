import Navbar from '../components/Navbar.jsx';
import '../styles/globals.css';
import Particle from '../components/Particle.jsx';
import { Component } from 'react';


function Myapp({ Component, pageProps}) {
  return (
    <>
      <Navbar />
      <Particle />
      <Component {...pageProps} />
    </>
  );
}

export default Myapp;
