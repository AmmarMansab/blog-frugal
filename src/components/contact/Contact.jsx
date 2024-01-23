'use client'
import { React } from 'react'
import './Contact.css'
import Scrolldown from '../../utils/Scrolldown'
import useSendEmail from '@/utils/hooks/useSendEmail';
import Googlemap from '@/utils/googlemap/Googlemap';
import { RiInstagramFill } from "react-icons/ri";
import { BiSolidRegistered } from "react-icons/bi";
import { SiPinterest } from "react-icons/si";
import { FaReddit } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Contact = () => {
    const { sendEmail, form, inpRef1, inpRef2, inpRef3 } = useSendEmail();
    return (
        <>
            <div className="contact-hero">
                <Scrolldown />
                <div className="overlay-contact"></div>
                <div className="contact-content">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe sit sequi. Adipisci illum hic eum vel, voluptatem similique debitis sunt.</p>
                </div>
            </div>
            {/* <Googlemap /> */}
            <section id="contact">
                <div class="contact-box">
                    <div class="contact-links">
                        <h2>CONTACT US</h2>
                        <div class="links">
                            <div class="link">
                                <a className='blue-back' >
                                <RiInstagramFill style={{color:'rgb(31, 46, 67)',fontSize:'60px'}} />
                                </a>
                            </div>
                            <div class="link">
                                <a className='blue-back'>
                                    <BsTwitterX style={{color:'rgb(31, 46, 67)',fontSize:'60px'}}/>
                                </a>
                            </div>
                            <div class="link">
                                <a className='blue-back'>
                                    <SiPinterest style={{color:'rgb(31, 46, 67)',fontSize:'60px'}}/>
                                </a>
                            </div>
                            <div class="link">
                                <a className='blue-back'>
                                    <FaReddit style={{color:'rgb(31, 46, 67)',fontSize:'60px'}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="contact-form-wrapper shadow-sm ">
                        <form ref={form} onSubmit={sendEmail} >
                            <div class="form-item">
                                <input ref={inpRef1} type="text" required name='user_name' />
                                <label>Name:</label>
                            </div>
                            <div class="form-item">
                                <input ref={inpRef2} type="email" name="user_email" required />
                                <label>Email:</label>
                            </div>
                            <div class="form-item">
                                <textarea ref={inpRef3} class="" name="message" required></textarea>
                                <label>Message:</label>
                            </div>
                            <button class="submit-btn" type='submit' value='Send' >Send</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact