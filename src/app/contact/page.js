'use client'
import Fotter from '@/components/common/fotter/Fotter'
import Navbar from '@/components/common/navbar/Navbar'
import Contact from '@/components/contact/Contact'
import { NextSeo } from 'next-seo'
import React from 'react'

const page = () => {
    const SEO = {
        title: 'Contact Us Page',
        description: 'Description of your page for search engines.',
        openGraph: {
          title: 'Your Open Graph Title',
          description: 'constact us page of frugal male fashion blog.',
          url: 'https://frugalmalefashionblog.com/',
          type: 'website',
        },
      };
    return (
        <>
        <NextSeo {...SEO} />
            <div className='parent-of-all' >
                <Navbar />
                <Contact />
                <Fotter />
            </div>
        </>
    )
}

export default page