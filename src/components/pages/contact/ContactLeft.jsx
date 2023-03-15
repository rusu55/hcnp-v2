import React from 'react';

import Map from '../../../assets/map-image.png';
import Support from '../../../assets/support.png';
import Message from '../../../assets/message.png';

const ContactLeft = () => {
  return (
    <>
        <div className="content-wrap">
            <div className="content-inner">
                <div className="content-left">
                    <div className="image">
                        <img src={Map} alt="" />
                    </div>
                </div>
                <div className="content">
                    <h4 className="heading"> Location</h4>
                    <div className="text">2625 Central St., Evanston, IL, 60201</div>
                </div>
            </div>
            <div className="content-inner mt-4">
                <div className="content-left">
                    <div className="image">
                        <img src={Message} alt="" />
                    </div>
                </div>
                <div className="content">
                    <h4 className="heading"> Agency Manager:</h4>
                    <div className="text">John McCarthy</div>
                    <div className="text">Phone: 847-881-5548</div>
                    <div className="text">Fax: 847-594-6022</div>
                    <div className="text">Email: info@hcnpprofessionals.com</div>

                     <h4 className="heading mt-4">Director of Nursing:</h4>
                    <div className="text">Bogdan Tarau</div>
                    <div className="text">Phone: 773-627-8643</div>
                    <div className="text">Email: bogdantarau@hcnpprofessionals.com</div>
                </div>
            </div>            
        </div>
    </>
  )
}

export default ContactLeft