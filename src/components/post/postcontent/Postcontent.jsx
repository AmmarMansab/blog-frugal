import React from "react";
import "./Postcontent.css";

const Postcontent = ({ post }) => {
  const createMarkup = (html) => {
    return { __html: html };
  };

  const API = "https://server.blog.digiunction.com";

  return (
    <>
      <div className="conent-main-contaier">
        <img className="h-[80vh] w-auto mt-8" src={API+post?.image} alt="" />
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
