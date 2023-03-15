import React, {useEffect, useContext} from 'react'
import AboutIntro from './AboutIntro';
import AboutRight from './AboutRight';

import { GlobalContext } from '../../../context/Provider';
import getAboutPage from '../../../context/actions/getAboutPage';

const About = () => {
  const {aboutPageState, aboutPageDispatch} = useContext(GlobalContext)

  useEffect(()=>{
          getAboutPage(aboutPageDispatch)
    }, [])

  return (
    <section id='about' className='about'>
      <div className="container">
        <div className="row">          
          <div className="col-8"><AboutIntro/></div>
          <div className="col-4 row"><AboutRight/></div>
        </div>
      </div>
    </section>
  )
}

export default About