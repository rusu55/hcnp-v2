import React, {useContext} from 'react'
import { BiCheck, BiRadioCircleMarked } from "react-icons/bi";

import { GlobalContext } from '../../../context/Provider';
import {openModal} from '../../../context/actions/setModal';

import Img2 from '../../../assets/2.jpg';
import Img3 from '../../../assets/3.jpg';

const Employment = () => {
    const {showModal, setShowModalDispatch} = useContext(GlobalContext)
  return (
    <section id='employment' className='employment pt-4 pb-4'>
            <div className="container" data-aos="fade-right">
                <div className="row">                    
                    <div className="col-6 blue">
                        <div className="card pl-8 pr-8 mt-10">
                            <h3 className="heading">RNs</h3>
                            <p className='paragraph pt-1'>We need you to be the consultant for patients and clients who visit our center for advice on their health problems.</p>
                        </div>
                        <div className="card--body mt-5 pl-5 pr-5">
                            <h4>Responsabilities</h4>
                            <div className="tasks pt-2">
                                    <p><BiRadioCircleMarked size={25} className='icon'/>Welcome visitors, clients and patients</p>
                                    <p><BiRadioCircleMarked size={25} className='icon'/>Carry out the billing services</p>
                                    <p><BiRadioCircleMarked size={25} className='icon'/>Make phone calls to check the status</p>
                                    <p><BiRadioCircleMarked size={25} className='icon'/>Set up scheduling & answering meetings</p>
                            </div>
                            <div className=' button row'>
                                <button className='btn__primary mt-4' onClick={() => openModal(setShowModalDispatch)}>Apply for RN Job</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={Img2} alt="" />
                    </div>
                </div>
                <div className="row"> 
                <div className="col-6">
                        <img src={Img3} alt="" />
                    </div>                   
                    <div className="col-6 blue">
                        <div className="card pl-8 pr-8 mt-10">
                            <h3 className="heading">Home Health Aides</h3>
                            <p className='paragraph'>We need you to be the consultant for patients and clients who visit our center for advice on their health problems.</p>
                        </div>
                        <div className="card--body mt-5 pl-5 pr-5">
                            <h4>Responsabilities</h4>
                            <div className="tasks">
                                    <p><BiRadioCircleMarked size={25} className='icon'/>Welcome visitors, clients and patients</p>
                                    <p><BiRadioCircleMarked size={25} className='icon'/>Carry out the billing services</p>
                                    <p><BiRadioCircleMarked size={25} className='icon'/>Make phone calls to check the status</p>
                                    <p><BiRadioCircleMarked size={25} className='icon'/>Set up scheduling & answering meetings</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    </section>
  )
}

export default Employment