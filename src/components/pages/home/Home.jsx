import React from 'react';

import Hero from '../../page-parts/hero/Hero';
import Intro from './Intro';
import {carousel} from '../../../data/hero';

const Home = () => {
  return (
    <>
      <Hero data={carousel} />
      <Intro />
    </>
  )
}

export default Home