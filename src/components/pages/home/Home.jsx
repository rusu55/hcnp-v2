import React, {useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '../../page-parts/hero/Hero';
import Intro from './Intro';
import {carousel} from '../../../data/hero';

const Home = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <>
      <Hero data={carousel} />
      <Intro />
    </>
  )
}

export default Home