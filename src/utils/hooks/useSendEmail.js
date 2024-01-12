import React from 'react'
import {message} from 'antd'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const useSendEmail = () => {
    const form = useRef();
    const inpRef1 = useRef();
    const inpRef2 = useRef();
    const inpRef3 = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        // console.log(inpRef1.current.value.length, 'dddd');
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
    return { sendEmail,form,inpRef1,inpRef2,inpRef3 }
}
export default useSendEmail