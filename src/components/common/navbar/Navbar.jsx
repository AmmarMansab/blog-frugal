'use client'
import React, { useState } from 'react'
import './Navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { Button, Dropdown } from 'antd';
import { useRouter } from 'next/navigation';
import logo from '../../../images/nav_logo.png'
import { useGetCategories } from '@/app/api/category';
// import { useRouter } from 'next/navigation';

const Navbar = () => {

  const { categories, catsLoading } = useGetCategories();
  const [show, setShow] = useState(false)
  const router = useRouter();
  const shownav = () => {
    // console.log('yes');
    if (show) {
      setShow(false)
      console.log();
    } else {
      setShow(true)
    }
  }
  const handleNavigation = (route) => {
    router.push(route);
  };
  return (
    <>
      <div className="container-nav">
        <div className="nav-logo" onClick={() => handleNavigation(`/`)} >
          {/* <img  src={logo} /> */}
        </div>
        <div className="nav-burger">
          <RxHamburgerMenu onClick={shownav} style={{ color: 'white', cursor: 'pointer', fontSize: '25px' }} />
        </div>
        <div className={`leftnav ${show ? 'rightnav' : ''}`}>
          <div className="left-head">
            <div className='left-input' > <input type="text" placeholder='Search Here' /> <FiSearch className='search-icon' /> </div>
            <div onClick={shownav} className="left-cross"><MdOutlineCancel /></div>
          </div>
          <div className="left-nav-main">
            <div className='left-li' onClick={() => handleNavigation('/')} >Home</div>
            <div className='left-li' onClick={() => handleNavigation('/starthere')} >StartHere</div>
            <div className='left-li' onClick={() => handleNavigation('/category')} >
              <Dropdown
                menu={{
                  items: categories.map(category => ({
                    key: category._id,
                    label: (
                      <a style={{textDecoration:'none'}} href={`/category/${category._id}`}>
                        {category.name}
                      </a>
                    ),
                  })),
                }}
                placement="bottomLeft"
                arrow={{
                  pointAtCenter: true,
                }}
              >
                <Button className='dropdown-btn'>Category</Button>
              </Dropdown>
            </div>
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