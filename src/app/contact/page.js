'use client'
import Fotter from '@/components/common/fotter/Fotter'
import Navbar from '@/components/common/navbar/Navbar'
import Contact from '@/components/contact/Contact'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='parent-of-all' >
                <Navbar />
                <Contact />
                <Fotter />
            </div>
        </>
    )
}

export default page