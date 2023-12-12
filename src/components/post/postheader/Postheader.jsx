import React from 'react'
import './Postheader.css'
import { formatDate } from '@/utils'

const Postheader = ({post}) => {

  return (
    <>
       <div className="container post-header-hero">
        <div className="overlay-post"></div>
        <div className="line-1"></div>
        <div className="line-2"></div>
         <div className="post-header-inner">
          <h1>{post?.title}</h1>
           <div className="post-category">
            <p>{post?.author?.firstname + " " + post?.author?.lastname}</p>
            <span>/</span>
            <p>{formatDate(post?.createdAt)}</p>
            <span>/</span>
            <p>{post?.category?.name}</p>
           </div>
         </div>
       </div>
    </>
  )
}

export default Postheader;