import React from 'react'
import './Postheader.css'
import { formatDate } from '@/utils'
// import Showtext from '@/utils/showtext'
import Scrolldown from '@/utils/Scrolldown'

const Postheader = ({ post }) => {
  // const {truncateText}=Showtext()
  return (
    <>
      {
        post ?
          <div className="container post-header-hero " style={{ backgroundImage: `url(${"https://server.blog.digiunction.com" + post?.image})` }}>
            <Scrolldown/>
            <div className="overlay-post"></div>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="post-header-inner">
              <h1> {post?.title}</h1>
              <div className="post-category">
                <p>{post?.author?.firstname + " " + post?.author?.lastname}</p>
                <span>/</span>
                <p>{formatDate(post?.updatedAt)}</p>
                <span>/</span>
                <p>{post?.category?.name}</p>
              </div>
            </div>
          </div>
          :
          <div className="post-one-header-ske shadow-sm ">
            <div className="skeleton">
              <div className="skeleton__Big-post-header"></div>
            </div>
          </div>
      }

    </>
  )
}

export default Postheader;