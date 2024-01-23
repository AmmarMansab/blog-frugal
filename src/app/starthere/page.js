'use client'
import Fotter from '@/components/common/fotter/Fotter'
import Navbar from '@/components/common/navbar/Navbar'
import Starthere from '@/components/starthere/herosarthere/Starthere'
import Subscribe from '@/components/starthere/subscribe/Subscribe'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='parent-of-all' >
        <Navbar />
        <Starthere />
        <Subscribe />
        <Fotter />
      </div>
    </>
  )
}

export default page