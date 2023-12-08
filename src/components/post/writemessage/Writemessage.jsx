'use client'
import React from 'react'
import './Writemessage.css'

const Writemessage = () => {
    const sendmessage=(e)=>{
        e.preventDefault();
    }
  return (
    <>
    <form onSubmit={sendmessage} action="">
     <div className='writemessage-container' >
         <div className="write-A">
            <input placeholder='Your Name*' type="text" />
            <input placeholder='Your Email*' type="text" />
            <input placeholder='Your Subject*' type="text" />
         </div>
         <div className="write-B">
            <textarea placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
         </div>
         <button type='submit'  >Submit</button>
     </div>
    </form>
    </>
  )
}

export default Writemessage