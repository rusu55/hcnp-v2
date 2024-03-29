import React, {useState} from 'react'
import ContactForm from './ContactForm';
import ContactLeft from './ContactLeft';

const Contact = () => { 
  return (
    <section id='contact' className='contact'>
      <div className="container" data-aos="fade-right">
        <div className="row">
          <div className="col-4"><ContactLeft/></div>
          <div className="col-8"><ContactForm /></div>
        </div>
      </div>
    </section>
  )
}

export default Contact