import React, {useState} from 'react';
import {BiChevronRightCircle} from "react-icons/bi";

const ServicesList = ({services}) => {   
  console.log(services)
    const [current, setCurrent] = useState(0);
    const showDetails = (index) =>{
        setCurrent(index)
    }

    
  return services.length > 0 ? services.map((service, index) =>(    
    <div className="services__list" key = {index}>
        <h4 className="services__list__heading" onClick={()=>showDetails(index)}>
            <BiChevronRightCircle className={`${ current === index ? 'icon__rotate' : 'icon__back'} `} size={25} />
            {service.heading}</h4>
            <div  key={index} className={`services__list__details ${current === index ? 'services__list__details--show' : ''}`}>
                {service.descriptions.map((description, index)=>(
                  <p>{description}</p>
                ))}
            </div>   
    </div>
  )): ''
}

export default ServicesList
