import Fotter from '@/components/common/fotter/Fotter'
import Tlpheader from '@/components/peakpicks/tlpheader/Tlpheader'
import { NextSeo } from 'next-seo';
import React from 'react'

const page = () => {
  const SEO = {
    title: 'Page',
    description: 'Description of your page for search engines.',
    openGraph: {
      title: 'Your Open Graph Title',
      description: 'page of frugal male fashion blog.',
      url: 'https://frugalmalefashionblog.com/',
      type: 'website',
    },
  };
  return (
    <>
    <NextSeo {...SEO} />
      <div className='parent-of-all' >
        <Tlpheader />
        <Fotter />
      </div>
    </>
  )
}

export default page