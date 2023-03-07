import React from 'react'
import AboutIntro from './AboutIntro';
import AboutRight from './AboutRight';

const About = () => {
  return (
    <section id='about' className='about'>
      <div className="container">
        <div className="row">
          <div className="col-8"><AboutIntro/></div>
          <div className="col-4"><AboutRight/></div>
        </div>
      </div>
    </section>
  )
}

export default About