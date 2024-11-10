import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import '../app/style/contact.css';

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className='contact-grid md:grid-cols-2'>
        <div className='container-space'>
            <h2 className='container-heading' data-aos="zoom-in-up">Contact Us</h2>
            <p className='container-text' data-aos="zoom-in-up">
                Drop me a line,give me a call,or send me a message by submitting the following form.
            </p>
            <div className='container-flex' data-aos="zoom-in-up">
            <MdOutlineEmail size={30}/>daniyalashraf9790@gmail.com
            </div>
            <div className='container-flex' data-aos="zoom-in-up">
            <BsTelephone size={30}/>(92)3173762160
            </div>
            </div>
            <div className='contact-space'>
                <div className='form' data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text" className='input-field'
                    id='name'/>
                </div>
                <div className='form' data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="text" className='input-field'
                    id='email'/>
                </div>
                <div className='form' data-aos="zoom-in-up">
                    <label htmlFor="msg">Message</label>
                    <textarea className='text-area-field'
                    id='msg' rows={8}></textarea>
                </div>
                <button className='button' data-aos="zoom-in-up">Send</button>
            </div>
        </div>
      </div>
    
  )
}

export default Contact
