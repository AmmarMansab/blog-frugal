'use client'
import Fotter from '@/components/common/fotter/Fotter'
import Navbar from '@/components/common/navbar/Navbar'
import Starthere from '@/components/starthere/herosarthere/Starthere'
import Subscribe from '@/components/starthere/subscribe/Subscribe'
import React from 'react'
import { usePathname,useParams } from "next/navigation";

const page = () => {
  const currentPath = usePathname();
  return (
    <>
      <div className='parent-of-all' >
        <Navbar path={currentPath} />
        <Starthere />
        <Subscribe />
        <Fotter />
      </div>
    </>
  )
}

export default page