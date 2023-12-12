import Fotter from '@/components/common/fotter/Fotter'
import Tlpheader from '@/components/peakpicks/tlpheader/Tlpheader'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='parent-of-all' >
        <Tlpheader />
        <Fotter />
      </div>
    </>
  )
}

export default page