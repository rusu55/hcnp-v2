import React from 'react';
import { BiCheck } from "react-icons/bi";

const Service = ({service}) => {
  return (
    <p className='service__card'>      
        <BiCheck size={25} className='icon'/>{service.desc}
    </p>
  )
}

export default Service