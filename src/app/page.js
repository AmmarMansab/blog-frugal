'use client'
import React, { useState, useEffect,useRef } from 'react';
import Hero from '@/components/Home/hero/Hero'
import Category from '@/components/Home/category/Category'
import Fotter from '@/components/common/fotter/Fotter'
import Tlp from '@/components/Home/tlp/Tlp'
import Navbar from '@/components/common/navbar/Navbar'
import Subscription from '@/components/subscription/Subscription'
import Videosection from '@/components/Home/video/Videosection'
import useModal from '../utils/hooks/useModel';
import useSubscriptionForm from '@/utils/hooks/useSubscripiton';
import {Modal} from 'antd';
import { usePathname,useParams } from "next/navigation";

const page = () => {

  const currentPath = usePathname();
  const [showPopup, setShowPopup] = useState(false);
  const nameref = useRef()
  const emailref = useRef()
  const { showModal, handleOk, handleCancel, loading, visible,setVisible } = useModal();
  const { subscriptionData, handleChange, handleSubmit, isSuccess } = useSubscriptionForm();
  const handleSuccess = () => {
    emailref.current.value = '';
    nameref.current.value = '';
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true)
    }, 20000); 
    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    <>

      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="custom-modal"
        footer={null}
      >
        <div className='flex justify-start items-center' style={{ height: '80vh', marginTop: '-10vh ' }}>
          <div className="custom-modal-inner-container">
            <div className="custom-modal-inner-A" ></div>
            <div className="custom-modal-inner-B">
              <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores natus impedit perspiciatis ab magnam adipisci atque corrupti doloremque eum rem magni, officia beatae dicta veritatis deleniti fuga nemo in eligendi.</p>
              <form onSubmit={(e) => { e.preventDefault(); handleSubmit('https://server.blog.digiunction.com/api/news/create'); }} >
                <input ref={nameref} onChange={handleChange} placeholder='name' type="text" />
                <input ref={emailref} onChange={handleChange} placeholder='email' type="text" />
                <button>Submit</button>
              </form>
              {isSuccess !== null && (
                isSuccess ? handleSuccess() : handleError()
              )}
            </div>
          </div>
        </div>
      </Modal>

      <div className='parent-of-all' >
        <Navbar path={currentPath} />
        <Hero />
        <Category />
        <Tlp />
        <Subscription />
        <Videosection />
        <Fotter />
      </div>
    </>
  )
}

export default page