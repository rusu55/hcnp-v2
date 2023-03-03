import React, {useEffect} from 'react'
import ServicesGallery from './ServicesGallery';
import ServicesList from './ServicesList';

import {services} from './data';
import { gallery } from './data';

const Services = () => {
  
  
  return (
    <section id='services' className='services pt-4 pb-4' data-aos="fade-right">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3 className="services__heading">Would you rather stay at home than go into a health care facility ?</h3>
          </div>
          <div className="col-6">
            <p>HealSoul Health Services provide patients with choices to ask for the conducting and analyzing of several lab tests on-site at no cost for prioritized patients or at 70% for people with an insurance. Additional testing can be ordered off site; those costs are the responsibility of the enquirers.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4"><ServicesGallery gallery={gallery}/></div>
          <div className="col-8 pl-4"><ServicesList services={services}/></div>
        </div>
      </div>
    </section>
  )
}

export default Services