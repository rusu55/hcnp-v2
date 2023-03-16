import React from 'react'

import Modal from '../../page-parts/modal/Modal'

const EmploymentModal = () => {
  return (
    <Modal className='modal'>
      <h3>Apply for Job</h3>
      <small>Fill out all the fields.</small>
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
    </Modal>
  )
}

export default EmploymentModal
