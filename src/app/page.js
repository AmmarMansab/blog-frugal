'use client'
import { NextSeo } from 'next-seo';
import Hero from '@/components/Home/hero/Hero'
import Category from '@/components/Home/category/Category'
import Fotter from '@/components/common/fotter/Fotter'
import Tlp from '@/components/Home/tlp/Tlp'
import Navbar from '@/components/common/navbar/Navbar'
import Subscription from '@/components/subscription/Subscription'
import Videosection from '@/components/Home/video/Videosection'
import Model from '@/components/Modle/Model'
import H from '@/components/Home/hero/H';


const page = () => {

  const SEO = {
    title: 'Home Page',
    description: 'Description of your page for search engines.',
    openGraph: {
      title: 'Your Open Graph Title',
      description: 'home page of frugal male fashion blog.',
      url: 'https://frugalmalefashionblog.com/',
      type: 'website',
    },
  };

  
  return (
    <>
    <NextSeo {...SEO} />
    <Model/>
      <div className='parent-of-all' >
        <Navbar  />
        <H/>
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