import React from 'react'
import Img1 from '../../../assets/doc-avatar.jpg';

const AboutRight = () => {
  return (
    <>
    <div className="card" data-aos="fade-right">
        <div className="imgBox">
            <img src={Img1} alt="" />
        </div>
        <div className="content">
          <div className="details">
              <h2>Tarau Bogdan<br/><span>Nurse Practitioner</span></h2>
              <div className="data">
                  <h3><span></span>Qualifications</h3>
                  <p className='pt-4'>Master in Science</p>
                  <p>University</p>
              </div>
              <div className="data">
                  <h3><span></span>Language</h3>
                  <p className='pt-4'>English</p>
                  <p>Romanian</p>
              </div>
          </div>
        </div>
    </div>
    <div className="card" data-aos="fade-right">
        <div className="imgBox">
            <img src={Img1} alt="" />
        </div>
        <div className="content">
          <div className="details">
              <h2>Tarau Bogdan<br/><span>Nurse Practitioner</span></h2>
              <div className="data">
                  <h3><span></span>Qualifications</h3>
                  <p className='pt-4'>Master in Science</p>
                  <p>University</p>
              </div>
              <div className="data">
                  <h3><span></span>Language</h3>
                  <p className='pt-4'>English</p>
                  <p>Romanian</p>
              </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default AboutRight