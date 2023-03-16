import React from 'react'
import Img1 from '../../../assets/1.jpg'


const ServicesGallery = ({gallery}) => {   
  return (
    <div className="gallery">
        {gallery.length > 0  ? gallery.map((image, index) =>(
            <figure className="gallery__item" key={index}>
            <img src={`../../../assets/${image.img}`}/>
        </figure>
        )): 'ssss'} 
        
    </div>
  )
}

export default ServicesGallery