'use client'
import Fotter from '@/components/common/fotter/Fotter'
import Navbar from '@/components/common/navbar/Navbar'
import Contact from '@/components/contact/Contact'
import React from 'react'
import { usePathname,useParams } from "next/navigation";

const page = () => {
    const currentPath = usePathname();
    return (
        <>
            <div className='parent-of-all' >
                <Navbar path={currentPath} />
                <Contact />
                <Fotter />
            </div>
        </>
    )
}

export default page