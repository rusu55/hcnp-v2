import React, {useEffect, useState} from 'react'
import Logo from '../../../assets/logo.jpg'

const Nav = () => {

  const [toggle, setToggle] = useState(false);


  let oldValue = 0;
  let newValue =0;

  useEffect(()=>{
      setToggle()
  }, []);

  useEffect(()=>{
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  const handleScroll = () =>{
    const element = document.querySelector('.header')
    newValue = window.pageYOffset;

    if (oldValue < newValue && window.scrollY > 400 && window.innerWidth > 992 ) {      
      element.classList.add('fixedNav'); 

    }
    if (oldValue < newValue && window.scrollY > 560 && window.innerWidth > 992 ) {      
      element.classList.add('floatNav'); 

    } else if (oldValue > newValue &&  window.scrollY < 450 && window.innerWidth > 992) {
      element.classList.remove('floatNav');
      element.classList.remove('fixedNav');
    }
    oldValue = newValue   
  }

  const handleToggle = () =>{
    setToggle(!toggle)
  };

  return (
    <>
    <nav className='nav'>
      <div className='navbar'>
        <img className='logo' alt="" src={Logo} />
        <ul className={toggle ? 'flex nav-open' : 'flex nav-close'} onClick={()=>handleToggle()}>
                <li><a className='main__nav__link' href='#'>Home</a></li>
                <li><a className='main__nav__link' href='#about'>About Us</a></li>
                <li><a className='main__nav__link' href='#services'>Services</a></li>
                <li><a className='main__nav__link' href='#employment'>Employment</a></li>
                <li><a className='main__nav__link' href='#contact'>Contat Us</a></li>
            </ul>
      </div>      
       </nav> 
       
        <div className={toggle ? 'toggle-close' : 'toggle-open'} onClick={()=>handleToggle()}>
          <span></span>
          <span></span>
          <span></span>
        </div> 
        <div className="toggle__background"></div>               
    </> 
  )
}

export default Nav