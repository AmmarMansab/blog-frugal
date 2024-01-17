import React from 'react'
import './Postheader.css'
import { formatDate } from '@/utils'
import useShowtext from '../../../utils/hooks/Showtext'
import Scrolldown from '@/utils/Scrolldown'

const Postheader = ({ post }) => {
  const {truncateText}=useShowtext()
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
              <h1 style={{textAlign:'center'}} > {truncateText(post?.title, 50)}</h1>
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
          <div  className=" mt-6 post-one-header-ske shadow-sm ">
            <div className="skeleton">
              <div className="skeleton__Big-post-header"></div>
            </div>
          </div>
      }

    </>
  )
}

export default Postheader;