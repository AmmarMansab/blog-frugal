import React from 'react'
import './Subscription.css'

const Subscription = () => {
    return (
        <>
            <div className="container max-w-80 mx-auto flex justify-start items-center sm:flex-col md:flex-row lg:flex-row xl:flex-row ">
                <div className="sub-1 bg-blue-500 flex justify-start items-center flex-col ">
                    <div className="sub-cart mb-8"></div>
                    <div className="sub-cart"></div>
                </div>
                <div className="sub-2 bg-blue-500 ">
                    <div className="sub-cart-big"></div>
                </div>
            </div>
        </>
    )
}

export default Subscription