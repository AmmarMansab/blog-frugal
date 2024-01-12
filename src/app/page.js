import Hero from '@/components/Home/hero/Hero'
import Category from '@/components/Home/category/Category'
import Fotter from '@/components/common/fotter/Fotter'
import Tlp from '@/components/Home/tlp/Tlp'
import React from 'react'
import Navbar from '@/components/common/navbar/Navbar'
import Subscription from '@/components/subscription/Subscription'
import Videosection from '@/components/Home/video/Videosection'

const page = () => {
  return (
    <>
      <div className='parent-of-all' >
        <Navbar/>
        <Hero />
        <Category />
        <Tlp />
        <Subscription/>
        <Videosection/>
        <Fotter />
      </div>
    </>
  )
}

export default page