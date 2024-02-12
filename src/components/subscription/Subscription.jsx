'use client'
import { React, useState, useEffect,useRef } from 'react'
import './Subscription.css'
import { Modal } from 'antd';
import useModal from '../../utils/hooks/useModel';
import useSubscriptionForm from '@/utils/hooks/useSubscripiton';

const Subscription = () => {
    const nameref = useRef()
    const emailref = useRef()
    const { showModal, handleOk, handleCancel, loading, visible } = useModal();
    const { subscriptionData, handleChange, handleSubmit, isSuccess } = useSubscriptionForm();
    const handleSuccess = () => {
        emailref.current.value = '';
        nameref.current.value = '';
    };
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
            <div className=" sub-container container max-w-80 mx-auto flex justify-start items-center sm:flex-col flex-col md:flex-row lg:flex-row xl:flex-row ">
                <div class=" sub-img"></div>
                <div className="sub-content flex justify-center items-start flex-col ">
                    <h1 style={{fontSize:"2.5rem"}}>Embrace Frugality, Elevate Your Style</h1>
                    <p style={{fontSize:"1.2rem"}}>Dear Fashion-Conscious Frugals,</p>
                    <p style={{fontSize:"1.2rem"}}>Welcome to the Frugal Male Fashion Blog, where we believe that frugality is not about being cheap—it&apos;s about making thoughtful and intentional choices that allow you to look and feel your best without breaking the bank.</p>
                    <p style={{fontSize:"1.2rem"}}>In a world where consumerism often equates value with price tags, we&apos;re here to challenge that notion. We believe that true style and sophistication stem not from the price of your wardrobe, but from the confidence and creativity you exude in how you dress.</p>
                    <p style={{fontSize:"1.2rem"}}>At Frugal Male Fashion Blog, we&apos;re passionate about showcasing that style and substance can coexist harmoniously, regardless of your budget. If you believe that frugality is a mindset, not a compromise then subscribe below to get ideas you resonate with directly to your inbox.</p>
                    <button onClick={showModal} >Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default Subscription