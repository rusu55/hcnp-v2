import React, {useEffect, useContext} from 'react'
import AboutIntro from './AboutIntro';
import AboutRight from './AboutRight';
import ServicesDetails from './ServicesDetails';

import { GlobalContext } from '../../../context/Provider';
import getAboutPage from '../../../context/actions/getAboutPage';

import {caregiving} from '../../../data/services';
import {nursing} from '../../../data/services';
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
        <div className="row mt-5">
          <div className="col-6 flex">
              <ServicesDetails title='Caregiving  Services We Provide:' services={caregiving}/>
          </div>
          <div className="col-6 ml-2 flex">
              <ServicesDetails title='Nursing Services We Provide' services={nursing}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About