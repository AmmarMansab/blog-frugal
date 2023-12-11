import Hero from '@/components/Home/hero/Hero'
import Category from '@/components/Home/category/Category'
import Fotter from '@/components/common/fotter/Fotter'
import Tlp from '@/components/Home/tlp/Tlp'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <Category />
      <Tlp />
      <Fotter />
    </>
  )
}

export default page