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
                    <div className="text">USA, New York - 1060 Str. First Avenue 1</div>
                </div>
            </div>
            <div className="content-inner pt-4">
                <div className="content-left">
                    <div className="image">
                        <img src={Support} alt="" />
                    </div>
                </div>
                <div className="content">
                    <h4 className="heading"> CALL CENTER</h4>
                    <div className="text">24/7 Support
1800 567 8990 - 1800 345 454</div>
                </div>
            </div>
            <div className="content-inner pt-4">
                <div className="content-left">
                    <div className="image">
                        <img src={Message} alt="" />
                    </div>
                </div>
                <div className="content">
                    <h4 className="heading"> EMAIL US</h4>
                    <div className="text">thememove@healsoul.com
themesun@healsoul.com</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactLeft