'use client'
import Hero from '@/components/Home/hero/Hero'
import Category from '@/components/Home/category/Category'
import Fotter from '@/components/common/fotter/Fotter'
import Tlp from '@/components/Home/tlp/Tlp'
import Navbar from '@/components/common/navbar/Navbar'
import Subscription from '@/components/subscription/Subscription'
import Videosection from '@/components/Home/video/Videosection'
import Model from '@/components/Modle/Model'

const page = () => {

  return (
    <>
    <Model/>
      <div className='parent-of-all' >
        <Navbar  />
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