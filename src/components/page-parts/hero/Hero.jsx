import React, {useState, useEffect} from 'react';

const Hero = ({data}) =>{
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = data.length;
  const autoScroll = true;
	let slideInterval
	let intervalTime = 8000;

  useEffect(()=> {setCurrentSlide(0)}, []);
  useEffect(()=>{
        auto();
        return () => clearInterval(slideInterval)
   },[currentSlide]);

   const auto = () =>{
		slideInterval = setInterval(nextSlide, intervalTime);
	}

  const nextSlide = () =>{
		setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1)
	}

  return (
    <div className="slider">
        {data.map((slide,index)=>(
            <div className={index === currentSlide ? 'slide-item current' : 'slide-item'} id={index === currentSlide -1 ? 'close' : ''}>
                <div className={index === currentSlide ? 'item current' : 'item'}>
                    <h2>{slide.title}</h2>
                    <p>{slide.text}</p>
                </div>
                <img src={`../../../assets/${slide.image}`} alt="" />
            </div>
        ))}        
    </div>
  )
}

export default Hero