import React, {useEffect, useState, useContext} from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import {GlobalContext} from '../../../context/Provider';
import getHomePage from '../../../context/actions/getHomePage';

import Hero from '../../page-parts/hero/Hero';
import Intro from './Intro';
import {carousel} from '../../../data/hero';

const Home = () => {
  const {homePageState, homePageDispatch} = useContext(GlobalContext)

  useEffect(()=>{
    getHomePage(homePageDispatch)
  }, [])

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