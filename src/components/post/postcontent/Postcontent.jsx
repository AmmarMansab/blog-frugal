import React, { useEffect, useState } from "react";
import "./Postcontent.css";
import { BiSolidLike } from "react-icons/bi";
import { FaShareSquare } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import axios from "axios";
import { Button, Modal, message, Spin } from 'antd';


const Postcontent = ({ post, id }) => {
  // console.log(post[0].title ,'this is post ...');
  const createMarkup = (html) => {
    return { __html: html };
  };

  const [shares, setShares] = useState(0)
  const [likes, setLikes] = useState(0)
  const [views, setViews] = useState(0)

  const API = "https://server.blog.digiunction.com";

  // http://[::1]:5000/api/post/6500d5cf6f9d1eb964f00d00/increment-view
  // http://[::1]:5000/api/post/6500d5cf6f9d1eb964f00d00/increment-like
  // http://[::1]:5000/api/post/6500d5cf6f9d1eb964f00d00/increment-shares

  useEffect(() => {
    axios.put(`https://server.blog.digiunction.com/api/post/${id}/increment-view`)
      .then(response => {
        setViews(response.data.views)
      })
      .catch(error => {
        // setIsSuccess(false);
      });
  }, [])

  const share = () => {
    axios.put(`https://server.blog.digiunction.com/api/post/${id}/increment-shares`)
      .then(response => {
        setShares(response.data.shares)

      })
      .catch(error => {
        // setIsSuccess(false);
      });
  }

  const like = () => {

    var storedDataString = localStorage.getItem("likeid");
    var storedData = JSON.parse(storedDataString);
    if (storedData) {
      message.warning('You not like post again')
    }
    else {
      axios.put(`https://server.blog.digiunction.com/api/post/${id}/increment-like`)
        .then(response => {
          setLikes(response.data.likes)
          var jsonString = JSON.stringify(response.data._id);
          console.log(jsonString, 'llll');
          localStorage.setItem("likeid", jsonString);
          message.success('You Like on This Post')
        })
        .catch(error => {
          // setIsSuccess(false);
        });
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      {
        post ?
          <div className="conent-main-contaier">
            <h1 style={{textAlign:'center'}} className="mt-32 w-[60%] font-bold" >{post.title}</h1>
            {/* <img className="w-auto h-[80vh] mt-8" src={API + post?.image} alt="" /> */}
            <div className="w-[60vw] h-[80vh] mt-8" style={{ backgroundImage: `url(${API}${post?.image})`,backgroundSize:'cover', }} alt=""></div>
            <div className="container content-container" >
              {/* <div className="ads-card ">
                ads....
              </div> */}
              <div className="content-text m-auto ">
                {/* Render description */}
                {/* <h1 style={{ color: "black" }}>{post?.description}</h1> */}
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
                    <IoEye />
                    {views}
                  </div>
                </div>
              </div>
              {/* <div className="ads-card ">
                ads....
              </div> */}
            </div>
            {/* <div className="ads-line">
              ads...
            </div> */}
          </div>
          :
          <div className="spin_container">
            <Spin />
          </div>
      }

    </>
  );
};

export default Postcontent;
