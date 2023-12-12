'use client'
import React, { useState } from 'react'
import './Navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {

  const [show,setShow]=useState(false)

  const shownav=()=>{
    // console.log('yes');
    if(show){
      setShow(false)
      console.log();
    }else{
      setShow(true)
    }
  }

  return (
    <>
      <div className="container-nav">
        <div className="nav-logo">
          Logo Of Blogs
        </div>
        <div className="nav-burger">
          <RxHamburgerMenu onClick={shownav} style={{ color: 'white' }} />
        </div>
          <div className={`leftnav ${show? 'rightnav' :'' }`}>
            <div className="left-head">
              <div className='left-input' > <input type="text" placeholder='Search Here' /> <FiSearch className='search-icon' /> </div>
              <div onClick={shownav} className="left-cross"><MdOutlineCancel/></div>
            </div>
             <div className="left-nav-main">
               <div className='left-li' >Home</div>
               <div className='left-li' >StartHere</div>
               <div className='left-li' >Posts</div>
               <div className='left-li' >Contact</div>
               <div className='left-li' >Categaroy</div>
             </div>
             {/* <div className="trending-nav">
               <div className="trending-nav-card"></div>
               <div className="trending-nav-card"></div>
               <div className="trending-nav-card"></div>
               <div className="trending-nav-card"></div>
             </div> */}
          </div>
      </div>
    </>
  )
}

export default Navbar