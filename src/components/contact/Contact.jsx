'use client'
import { React, useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import { message } from 'antd';

const Contact = () => {

    const form = useRef();
    const inpRef1 = useRef();
    const inpRef2 = useRef();
    const inpRef3 = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(inpRef1.current.value.length, 'dddd');

        if (inpRef1.current.value.length > 0 && inpRef2.current.value.length > 0 && inpRef3.current.value.length > 0) {
            emailjs.sendForm('service_htg21em', 'template_pvs7qjo', form.current, '3wD6wJr6Eh18hDdvi')
                .then((result) => {
                    message.success('Email Send')
                    inpRef1.current.value = ''
                    inpRef2.current.value = ''
                    inpRef3.current.value = ''
                }, (error) => {
                    message.error('Email Not Send')
                });
        }
        else {
            message.warning('Fill All Filds')
        }
    };

    return (
        <>
           <div className="contact-hero">
            <div className="overlay-contact"></div>
           </div>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe
                        title="Google Map"
                        className="gmap_iframe"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?width=100%&amp;height=80vh&amp;hl=en&amp;q=2880 Broadway, New York&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                    <a href="https://embed-googlemap.com">google maps code generator</a>
                </div>
                <style>
                    {`.mapouter{position:relative;text-align:right;width:100%;height:80vh;}
        .gmap_canvas {overflow:hidden;background:none!important;width:100%;height:80vh;}
        .gmap_iframe {width:100%!important;height:80vh!important;}`}
                </style>
            </div>
            <section id="contact">
                <div class="contact-box">
                    <div class="contact-links">
                        <h2>CONTACT US</h2>
                        <div class="links">
                            <div class="link">
                                <a><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
                            </div>
                            <div class="link">
                                <a><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
                            </div>
                            <div class="link">
                                <a><img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" /></a>
                            </div>
                            <div class="link">
                                <a><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
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