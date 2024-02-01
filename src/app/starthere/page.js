'use client'
import Fotter from '@/components/common/fotter/Fotter'
import Navbar from '@/components/common/navbar/Navbar'
import Starthere from '@/components/starthere/herosarthere/Starthere'
import Subscribe from '@/components/starthere/subscribe/Subscribe'
import { NextSeo } from 'next-seo'
import React from 'react'

const page = () => {
  const SEO = {
    title: 'Start Here Page',
    description: 'Description of your page for search engines.',
    openGraph: {
      title: 'Your Open Graph Title',
      description: 'start her page of frugal male fashion blog.',
      url: 'https://frugalmalefashionblog.com/',
      type: 'website',
    },
  };
  return (
    <>
    <NextSeo {...SEO} />
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