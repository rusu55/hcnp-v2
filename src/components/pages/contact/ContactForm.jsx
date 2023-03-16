import React from 'react'

const ContactForm = () => {
  return (
    <>
        <div className="row gap-2 form">
            <div className="col-5">
                <label>First Name *</label>                
                <input type='text' name=''  placeholder='e.g. John Doe' ></input>
            </div>
            <div className="col-5">
            <label>Last Name *</label>               
                <input type='email' name=''  placeholder='e.g. John Doe' ></input>
            </div>
        </div>
        <div className="row gap-2 mt-2">
            <div className="col-5">
                <label>Email Address *</label>                
                <input type='text' name=''  placeholder='e.g. John Doe' ></input>
            </div>
            <div className="col-5">
            <label>Phone No *</label>                
                <input type='email' name=''  placeholder='e.g. John Doe' ></input>
            </div>
        </div>
        <div className="row gap-2 mt-2">          
            <label>Details and Services Needed *</label>
            <textarea cols="40" rows="10" />                    
            <button className="btn btn--form">Send Message</button>        
        </div>
    </>    
  )
}

export default ContactForm