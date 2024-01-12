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
            <div className=" sub-container container max-w-80 mx-auto flex justify-start items-center sm:flex-col md:flex-row lg:flex-row xl:flex-row ">
                <div class=" sub-img"></div>
                <div className="sub-content flex justify-center items-start flex-col ">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et excepturi a vel ab nesciunt.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, inventore! Vel praesentium expedita repellat! Fuga voluptatibus provident officia dolores rerum ea! Iusto, molestiae sapiente quo dolor doloribus quia excepturi labore.</p>
                    <button onClick={showModal} >Subscribe</button>
                </div>
            </div>
        </>
    )
}

export default Subscription