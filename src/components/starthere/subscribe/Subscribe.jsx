'use client'
import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
    return (
        <>
            <div class=" sub-container ">
               <img className='sub-h-img' src="https://images.unsplash.com/photo-1658963654546-593c6ea57ce4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" alt="" />
               <div className='sub-h-content' >
                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste iure quod deserunt corrupti eum impedit, </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, excepturi voluptatum amet, dolorum et nisi beatae veritatis tempore perferendis id nemo aut ullam quibusdam molestiae eos corporis quae aliquid nulla?
                </p>
                <input placeholder='name' type="text" />
                <input placeholder='email' type="email" />
                <button>Subscribe</button>
               </div>
            </div>

        </>
    )
}

export default Subscribe