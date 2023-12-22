import React from "react";
import "./Postcontent.css";

const Postcontent = ({ post }) => {
  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <>
      <div 
      className="container content-container"
      >
        {/* Render description */}
        <h1 style={{color: "black"}}>{post?.description}</h1>

        {/* Render content */}
        <div style={{color: "black"}} dangerouslySetInnerHTML={createMarkup(post?.content)} />
      </div>
    </>
  );
};

export default Postcontent;
