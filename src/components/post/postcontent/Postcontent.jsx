import React from "react";
import "./Postcontent.css";

const Postcontent = ({ post }) => {
  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <>
    <div className="conent-main-contaier">
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
