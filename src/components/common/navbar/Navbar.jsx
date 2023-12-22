'use client'
import React, { useState } from 'react'
import './Navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import logo from '../../../images/nav_logo.png'

const Navbar = () => {

  const [show, setShow] = useState(false)

  const router = useRouter();

  const handleNavigation = (route) => {
    console.log(route,'dddd');
    router.push(route);
  }

  const shownav = () => {
    // console.log('yes');
    if (show) {
      setShow(false)
      console.log();
    } else {
      setShow(true)
    }
  }

  return (
    <>
      <div className="container-nav">
        <div className="nav-logo">
          {/* <img  src={logo} /> */}
        </div>
        <div className="nav-burger">
          <RxHamburgerMenu onClick={shownav} style={{ color: 'white' }} />
        </div>
        <div className={`leftnav ${show ? 'rightnav' : ''}`}>
          <div className="left-head">
            <div className='left-input' > <input type="text" placeholder='Search Here' /> <FiSearch className='search-icon' /> </div>
            <div onClick={shownav} className="left-cross"><MdOutlineCancel /></div>
          </div>
          <div className="left-nav-main">
            <div className='left-li' onClick={() => handleNavigation('/')} >Home</div>
            <div className='left-li' onClick={() => handleNavigation('/starthere')} >StartHere</div>
            <div className='left-li' onClick={() => handleNavigation('/category')} >Categaroy</div>
            {/* <div className='left-li' onClick={() => handleNavigation('/post')} >Posts</div> */}
            <div className='left-li' onClick={() => handleNavigation('/contact')} >Contact</div>
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