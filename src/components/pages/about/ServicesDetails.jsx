import React from 'react';

import Service from './Service';

const ServicesDetails = ({services, title}) => {    
  return (
    <div className="about__services" data-aos=''>
      <h3 className="service__title">
        {title}
      </h3>
        {
            services.map((service, index) => (
                <Service key={index} service={service} />
            ))
        }
    </div>
  )
}

export default ServicesDetails