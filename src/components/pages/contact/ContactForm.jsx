import React from 'react'

const ContactForm = () => {
  return (
    <>
        <div className="row gap-2">
            <div className="col-5">
                <label>Full name *</label>
                <br/>
                <input type='text' name=''  placeholder='e.g. John Doe' ></input>
            </div>
            <div className="col-5">
            <label>Full name *</label>
                <br/>
                <input type='email' name=''  placeholder='e.g. John Doe' ></input>
            </div>
        </div>
        <div className="row gap-2 mt-2">
            <div className="col-5">
                <label>Full name *</label>
                <br/>
                <input type='text' name=''  placeholder='e.g. John Doe' ></input>
            </div>
            <div className="col-5">
            <label>Full name *</label>
                <br/>
                <input type='email' name=''  placeholder='e.g. John Doe' ></input>
            </div>
        </div>
        <div className="row gap-2 mt-2">
          <div className="col-12">
          <label>Full name *</label>
          <textarea cols="40" rows="10"></textarea>
          </div>          
        </div>
        <div className="col-12  flex">
            <button className="btn btn--form">Send Message</button>
        </div>
    </>    
  )
}

export default ContactForm