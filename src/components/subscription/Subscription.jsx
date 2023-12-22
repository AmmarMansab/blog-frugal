'use client'
import { React, useState, useEffect } from 'react'
import './Subscription.css'
import { Modal } from 'antd';

const Subscription = () => {

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <Modal
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                className="custom-modal" // Apply the custom CSS class
                footer={null} // This removes the default footer with buttons
            >
                <div className='flex justify-start items-center' style={{ height: '80vh',marginTop:'-10vh'}}>
                  <div className="custom-modal-inner-container">
                    <div className="custom-modal-inner-A" ></div>
                    <div className="custom-modal-inner-B">
                        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores natus impedit perspiciatis ab magnam adipisci atque corrupti doloremque eum rem magni, officia beatae dicta veritatis deleniti fuga nemo in eligendi.</p>
                        <input placeholder='anything' type="text" />
                        <input placeholder='anyting' type="text" />
                        <button>Submit</button>
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