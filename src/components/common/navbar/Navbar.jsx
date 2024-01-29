'use client'
import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { Button, Dropdown } from 'antd';
// import { useRouter } from 'next/navigation';
import logo from '../../../images/nav_logo.png'
import { useGetCategories } from '@/app/api/category';
import useNavi from '@/utils/hooks/useNavi';
import { useRouter } from 'next/router';
import { Collapse } from 'antd';
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const currentPath = usePathname();

  const firstFiveLetters = currentPath?.substring(0, 5);

  const router = useRouter
  const { handleNavigation } = useNavi();
  const { categories, catsLoading } = useGetCategories();
  const [show, setShow] = useState(false)
  // const router = useRouter();
  // console.log(router.pathname);
  const shownav = () => {
    // console.log('yes');
    if (show) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  const items = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: 'this is all data',
    },
  ]

  const dynamicData = [
    {
      key: '1',
      content: 'Content for item 1',
    },
    {
      key: '2',
      content: 'Content for item 2',
    },
    // Add more dynamic data as needed
  ];

  const [hovered, setHovered] = useState(false);
  const leaveTimeoutRef = useRef(null);

  const handleHover = () => {
    setHovered(true);
    clearTimeout(leaveTimeoutRef.current);
  };

  const handleLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setHovered(false);
    }, 300); // Adjust the delay (in milliseconds) according to your preference
  };

  return (
    <>
      <div className={`container-nav ${firstFiveLetters === '/post' || firstFiveLetters === '/star' ? 'container-nav-activ' : ''} `}>
        <h2 className="nav-logo" onClick={() => handleNavigation(`/`)} ></h2>
        {/* {path === '/starthere' ? (
          <h2  className="nav-logo" onClick={() => handleNavigation(`/`)} >Frugal</h2>
        ) : (
          <div className="nav-logo" onClick={() => handleNavigation(`/`)}>
          </div>
        )} */}
        <div className="nav-burger">
          <RxHamburgerMenu onClick={shownav} style={{ color: 'white', cursor: 'pointer', fontSize: '25px' }} />
          {/* {path === '/starthere' ? (
            <RxHamburgerMenu onClick={shownav} style={{ color: 'black', cursor: 'pointer', fontSize: '25px' }} />
          ) : (
            <RxHamburgerMenu onClick={shownav} style={{ color: 'white', cursor: 'pointer', fontSize: '25px' }} />
          )
          } */}
        </div>
        {
          show ?
            <div className="nav-overlay" onClick={shownav} style={{ cursor: 'pointer' }} ></div>
            : <></>
        }
        <div className={`leftnav ${show ? 'rightnav' : ''}`}>
          <div className="left-head">
            <div className='left-input' > <input type="text" placeholder='Search Here' /> <FiSearch className='search-icon' /> </div>
            <div onClick={shownav} className="left-cross"><MdOutlineCancel /></div>
          </div>
          <div className="left-nav-main">
            <div className='left-li' onClick={() => handleNavigation('/')} >Home</div>
            <div className='left-li' onClick={() => handleNavigation('/starthere')} >Start Here</div>
            <div className='left-li' >
              <Collapse
                bordered={false}
                defaultActiveKey={hovered ? ['1'] : []}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <Collapse.Panel key="1" header="Categories">
                  {categories?.map((item, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }} >
                      <p onClick={() => handleNavigation(`/category/${item._id}`)} className='category-list' >{item.name}</p>
                    </div>
                  ))}
                </Collapse.Panel>
              </Collapse>
            </div>
            <div className='left-li' onClick={() => handleNavigation('/contact')} >Contact</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar