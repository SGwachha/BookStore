import React, { useRef } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { BsFillAlarmFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import emailjs from 'emailjs-com'

function Contact() {
    const form = useRef();

    const formsubmitted = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_sm8cxds', 'template_e2j82vm', form.current, 'B5GCwDzOMfHDEcva2')
            .then((result) => {
                alert("Your Email has been Sent!");
            }, (error) => {
                console.log("Your Email wasn't Sent");
            });
    }
    return (
        <div className='content'>
            <div className="desc">We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime. They’re also anchors for our downtowns and communities. As more and more people buy our books online, we wanted to create an easy, convenient way for you to get your books and support bookstores at the same time.</div>
            <div className="two-col">
                <div className="contact-info">
                    <div className="sm">
                        <FontAwesomeIcon icon={faPhoneSquare} />
                        <p>+977-984-696874, 01-552489</p>
                    </div>
                    <div className="sm">
                        <BsFillAlarmFill />
                        <p>Serving 7 Days a week</p>
                    </div>
                    <div className="sm">
                        <MdEmail />
                        <p>bookadmin12@booktown.com</p>
                    </div>
                </div>
                <div className="contact-form">
                    <form ref={form}  >
                        <div className="form-row">
                            <input className='form-field' type='text' id='name' placeholder='Full Name' />
                            <input className='form-field' type='email' id='name' placeholder='Email Address' />
                        </div>
                        <div className="form-row">
                            <input className='form-field' type='0-number' id='name' placeholder='Phone Number' />
                            <input className='form-field' type='text' id='name' placeholder='Address' />
                        </div>
                        <div className="form-row">
                            <textarea className='form-desc' name='message' id='message' cols='30' rows='10' placeholder='message' />
                        </div>
                        <div className="form-row">
                            <button type="submit" className='submit-btn' value={"send"} onClick={formsubmitted}>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact