import React, {useState} from 'react';
import moment from 'moment/moment';

const ContactForm = () => {
    
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      }
      
      const errors = {}
     
      const [formValues, setFormValues] = useState({});
      const [formErrors, setFormErrors] = useState({});
    
      const handleChange = (event) =>{
        const {name, value} =  event.target;
    
        setFormValues({
          ...formValues,
          [name]: value
        })
      }
    
      const handleSubmit = (event) =>{
        event.preventDefault()
        const errors = validate(formValues)
        setFormErrors(errors || {});
        
        if(Object.keys(errors).length === 0) {        
           
            sendEmail()      
            setFormValues(initialValues)
          }else{
            console.log(formErrors)
            return
          }        
      }

      const sendEmail = () =>{
        const {firstName, lastName, email, message} = formValues
        fetch("https://69zxy7wcg3.execute-api.us-east-1.amazonaws.com/send",
          {
            mode: "no-cors",
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              senderName: firstName + " " + lastName,
              senderEmail: email,
              subject: "Email received from Contact Form Website",
              message: message,              
              date: moment(new Date()).format("DD/MM/YYYY")              
            })
          });     
      };

      const validate =(values) =>{
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
        if(!values.firstName){
          errors.firstName = 'First Name is required!'
        }
        if(!values.lastName){
            errors.lastName = 'Last Name is required!'
          }
        if(!values.email){
          errors.email = 'Email is required'
        }
        else if(!regex.test(values.email)){
          errors.email = 'Valid Email is required!'
        }
        if(!values.message) {
          errors.message = 'Message can not be empty!'
        }
        return errors
    }
      
  return (
    <>
    <form id='sendEmail' onSubmit={handleSubmit}>
        <div className="row gap-2 form">
            <div className="col-5">                
                <label>First Name *</label>                
                <input type='text'
                    name='firstName'
                    value={formValues.firstName}
                    placeholder='e.g. John'
                    onChange={handleChange}
                 />
            </div>
            <div className="col-5">
                <label>Last Name *</label>               
                <input type='text'
                        name='lastName'
                        value={formValues.lastName}
                        placeholder='e.g.Doe'
                        onChange={handleChange}
                    />
            </div>
        </div>
        <div className="row gap-2 mt-2">
            <div className="col-5">
                <label>Email Address *</label>                
                <input type='text'
                    name='email'
                    value={formValues.email}
                    placeholder='e.g. JohnDoe@mail.com'
                    onChange={handleChange}
                 />
            </div>
            <div className="col-5">
            <label>Phone No *</label>                
            <input type='text'
                    name='phone'
                    value={formValues.phone}
                    placeholder='e.g. 000 000 0000'
                    onChange={handleChange}
                 />
            </div>
        </div>
        <div className="row gap-2 mt-2">          
            <label>Details and Services Needed *</label>
            <textarea cols="40" rows="10"
                name='message'
                placeholder='write your message ....'
                value={formValues.message}
                onChange={handleChange}
            />                    
            <button className="btn btn--form">Send Message</button>        
        </div>
    </form>
    </>    
  )
}

export default ContactForm