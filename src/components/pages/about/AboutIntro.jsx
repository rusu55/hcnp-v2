import React from 'react'
import { BiCheck } from "react-icons/bi";

const AboutIntro = () => {
  return (
    <div className='about__intro'>
        <div className="row">
            <div className="col-12">
                <h3 className='about__intro_heading' data-aos="fade-right">Introducing</h3>
                <h3 className="about_secondaryheading pt-2" data-aos="fade-right">“I highly appreciate your help for my family in our most difficult time. We owed everyone at @healsoul a big thank you and our life.”                    
                </h3>
                <p className='paragraph' data-aos="fade-right">More than 15 years ago, a small group of families, community activists, and civil servants in New York came together to form an organization called HealSoul. They provide services for those struggling to care for a loved one who did not "fit" into traditional health systems: stroke, Parkinson's, Alzheimer's disease, traumatic brain injury, debilitating disorders, etc. The diagnoses were different, but the families shared common challenges: few community resources, isolation, lack of information, and drastic changes in family roles.</p>
            </div>
        </div>
        <div className="row mt-2" data-aos="fade-right">
            <div className="col-12">
                <h3 className='about__heading'>Our History</h3>
                <p className='paragraph'>Home Care Nursing Professionals is a Home Nursing Agency founded by Bogdan Tarau and John McCarthy.</p>
                <p className='paragraph'>Bogdan is an Advanced Practice Registered Nurse with over a Decade of Experience in Home Health and the Acute Care Setting.</p>
                <p className='paragraph'>John is an Attorney and Accountant who has previously worked as a Caregiver</p>
                <p className='paragraph'>We are  located in Evanston, IL with clients in the North Chicagoland Area.</p>
                <p className='paragraph'>Our company values are derived from years of experience in the home health industry and through identification of areas that will improve our clients’ well being.</p>
            </div>
        </div>
        <div className="row mt-2" data-aos="fade-right">
            <div className="col-12">
            <h3 className='about__heading'>Skills</h3>
            </div>            
        </div>
        <div className="row" data-aos="fade-right">
            <div className="col-6">
                <p className="about__skills">
                    <BiCheck size={25} className='icon'/>
                    Assisting with walking from bed to wheelchair
                </p>
                <p className="about__skills">
                    <BiCheck size={25} className='icon'/>
                    Bathing, dressing and grooming assistance
                </p>
                <p className="about__skills">
                    <BiCheck size={25} className='icon'/>
                    Medication reminders
                </p>
                <p className="about__skills">
                    <BiCheck size={25} className='icon'/>
                    Safety and fall prevention
                </p>
                <p className="about__skills">
                    <BiCheck size={25} className='icon'/>
                    Status reporting to family
                </p>
                
            </div>
            <div className="col-6">
            <p className="about__skills">
                    <BiCheck size={25} className='icon'/>
                    Light housekeeping
                </p>
                <p className="about__skills">
                    <BiCheck size={25} className='icon'/>
                    Meal preparation and nutrition
                </p>
                <p className="about__skills">
                    <BiCheck size={25} className='icon'/>
                    Grocery shopping and errands
                </p>
                <p className="about__skills">
                    <BiCheck size={25} className='icon'/>
                    Assistance with light exercise
                </p>
                <p className="about__skills">
                    <BiCheck size={25} className='icon'/>
                    Transportation to social & recreational activities
                </p>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-12" data-aos="fade-right">
                <h3 className='about__heading' data-aos="fade-in">Mission and Values</h3>
                <h3 className="about_secondaryheading">Striving, Helping, Collaborating</h3>
                <p className="about__skills" >
                    <BiCheck size={25} className='icon'/>
                    Striving to help clients and their families recuperate and thrive in the comfort of their own homes.
                </p> 
                <p className="about__skills">
                    <BiCheck size={25} className='icon'/>
                    Helping people with disabilities be a part of their communities and doing what they love 
                </p>
                <p className="about__skills">
                    <BiCheck size={25} className='icon'/>
                    Collaborating with the Client and their family to reach the best possible health outcomes
                </p>
                <p className='paragraph'>We are licensed with the Illinois Department of Public Health as a Home Nursing Agency</p> 
                <p className='paragraph'>We offer caring Home Nursing Services through hiring dedicated Nurses and Home Health Aides</p> 
                <p className='paragraph'>We are accepting new clients and would love the opportunity to give you a free consultation and provide you with a plan of care that will improve your or your loved one’s well being.</p>                   
            </div>
        </div>
    </div>
  )
}

export default AboutIntro