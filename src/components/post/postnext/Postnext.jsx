import React from 'react'
import './Postnext.css'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Postnext = () => {
    return (
        <>
            <div className=" container container-next-privews ">
                <div className="prevous-btn pn-btn"><IoIosArrowRoundBack /> Previous Post</div>
                <div className="shoial-icons">
                     <FaPinterest className='pn-icon' />
                     <RiInstagramFill className='pn-icon'/>
                     <FaFacebook className='pn-icon' />
                     <BsTwitterX className='pn-icon'/>
                </div>
                <div className="next-btn pn-btn">  Next Post <IoIosArrowRoundForward /></div>
            </div>
        </>
    )
}

export default Postnext