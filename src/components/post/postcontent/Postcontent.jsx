import React, { useEffect, useState } from "react";
import "./Postcontent.css";
import { BiSolidLike } from "react-icons/bi";
import { FaShareSquare } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import axios from "axios";

const Postcontent = ({ post , id }) => {
  const createMarkup = (html) => {
    return { __html: html };
  };

  const [shares,setShares]=useState(0)
  const [likes,setLikes]=useState(0)
  const [views,setViews]=useState(0)

  const API = "https://server.blog.digiunction.com";

  // http://[::1]:5000/api/post/6500d5cf6f9d1eb964f00d00/increment-view
  // http://[::1]:5000/api/post/6500d5cf6f9d1eb964f00d00/increment-like
  // http://[::1]:5000/api/post/6500d5cf6f9d1eb964f00d00/increment-shares

  useEffect(() => {
    axios.put(`https://server.blog.digiunction.com/api/post/${id}/increment-view`)
      .then(response => {
        // console.log(response.data.views, 'view');
        setViews(response.data.views)
        // setIsSuccess(true);
        // setSubscriptionData({});
        // message.success('Subscribe Successfully');
      })
      .catch(error => {
        // setIsSuccess(false);
      });
  }, [])

  const share=()=>{
    axios.put(`https://server.blog.digiunction.com/api/post/${id}/increment-shares`)
    .then(response => {
      setShares(response.data.shares)
      // console.log(response.data.shares, 'share');
      // setIsSuccess(true);
      // setSubscriptionData({});
      // message.success('Subscribe Successfully');
    })
    .catch(error => {
      // setIsSuccess(false);
    });
  }

  const like=()=>{
    axios.put(`https://server.blog.digiunction.com/api/post/${id}/increment-like`)
    .then(response => {
      setLikes(response.data.likes)
      // setIsSuccess(true);
      // setSubscriptionData({});
      // message.success('Subscribe Successfully');
    })
    .catch(error => {
      // setIsSuccess(false);
    });
  }

  return (
    <>
      <div className="conent-main-contaier">
        <img className="h-[80vh] w-auto mt-8" src={API + post?.image} alt="" />
        <h1 className="mt-8 w-[80%] " >{post?.title}</h1>
        <div className="container content-container" >
          <div className="ads-card shadow-sm ">
            ads....
          </div>
          <div className="content-text">
            {/* Render description */}
            <h1 style={{ color: "black" }}>{post?.description}</h1>
            {/* Render content */}
            <div style={{ color: "black" }} dangerouslySetInnerHTML={createMarkup(post?.content)} />
            <div className="like-share-main">
            <div className="likemain">
              <BiSolidLike onClick={like} className="like" />
              {likes}
              </div> 
              <div className="share-main">
              <FaShareSquare onClick={share} className="share" />
              {shares}
              </div>
              <div className="view-main">
                <IoEye/>
                {views}
              </div>
            </div>
          </div>
          <div className="ads-card shadow-sm ">
            ads....
          </div>
        </div>
        <div className="ads-line">ads...</div>
      </div>
    </>
  );
};

export default Postcontent;
