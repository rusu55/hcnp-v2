import React, {useContext} from 'react'

import Modal from '../../page-parts/modal/Modal';
import { GlobalContext } from '../../../context/Provider';
import {closeModal} from '../../../context/actions/setModal';

const EmploymentModal = () => {
    const {showModal, setShowModalDispatch} = useContext(GlobalContext)
  return (
    <Modal className='modal'>
      <h3 className='mt-5'>Apply for Job</h3>
           
        <div className="row gap-2 form mt-5">
            <div className="col-5">
                <label>Name *</label>                
                <input type='text' name=''  placeholder='e.g. John Doe' ></input>
            </div>
            <div className="col-5">
            <label>Email *</label>               
                <input type='email' name=''  placeholder='e.g. John Doe' ></input>
            </div>
        </div>
        <div className="row gap-2 mt-2">
            <div className="col-5">
                <label>Phone *</label>                
                <input type='text' name=''  placeholder='e.g. John Doe' ></input>
            </div>
            <div className="col-5">
            <label>Job *</label>                
                <div className='select-box'>                    
                    <select>
                        <option selected>Select JOB</option>
                        <option value="0">RN Job</option>
                        <option value="1">Home Health Aid</option>
                    </select>                    
                </div>
            </div>
        </div>
        <div className='row'>
            <button className='btn' >Apply</button>
         </div>
        <div className='toggle-close' onClick={()=>closeModal(setShowModalDispatch)}>
            <span></span>
            <span></span>
            <span></span>
        </div> 
        <div className="toggle__background"></div> 
        
    </Modal>
  )
}

export default EmploymentModal
