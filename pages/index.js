
import React from 'react'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projets from '../components/Projets'
import Skills from '../components/Skills'
import Cv from '../components/Cv'




export default function Home() {
  return (
    <div>
      <Head>
        <title>Tristan Blasin / Front-End Web Developer</title>
        <meta name="description" content="Je suis développeur web front end React.Js" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projets />
      <Cv />
      <Contact />
    </div>
  )
}
