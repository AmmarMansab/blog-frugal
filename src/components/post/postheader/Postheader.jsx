import React from 'react'
import './Postheader.css'

const Postheader = () => {
  return (
    <>
       <div className="container post-header-hero ">
        <div className="overlay-post"></div>
        <div className="line-1"></div>
        <div className="line-2"></div>
         <div className="post-header-inner">
          <h1>Title heading or anyting</h1>
           <div className="post-category">
            <p>Admin</p>
            <p>19 Dec , 2001</p>
            <p>Traveling</p>
           </div>
         </div>
       </div>
    </>
  )
}

export default Postheader;