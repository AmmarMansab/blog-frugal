import React from 'react'
import './Starthere.css'

const Starthere = () => {
    return (
        <>
            <div class=" flex justify-center items-center">
                <h1 className='font-bold text-4xl'  >Dress Sharp And Feel Confident Without Tons Of Clothes</h1>
            </div>
            <div class=" container border max-w-80 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <div className="bg-blue-500 pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 flex justify-center items-start ">
                    <img className='here-img' src='https://images.unsplash.com/photo-1682695796497-31a44224d6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' />
                </div>
                <div className="bg-blue-500 pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
                    <p className='here-p1 text-2xl mb-4 font-medium tracking-wide' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, cupiditate labore, optio eum pariatur voluptas. Quidem ipsam saepe odio placeat velit, blanditiis est eius.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, cupiditate labore, optio eum pariatur voluptas. Quidem ipsam saepe odio placeat velit, blanditiis est eius.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, cupiditate labore, optio eum pariatur voluptas. Quidem ipsam saepe odio placeat velit, blanditiis est eius.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, cupiditate labore, optio eum pariatur voluptas. Quidem ipsam saepe odio placeat velit, blanditiis est eius.
                    </p>
                    <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, cupiditate labore, optio eum pariatur voluptas. Quidem ipsam saepe odio placeat velit, blanditiis est eius.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Starthere