"use client";
import { React, useState, useEffect } from "react";
import "./Postcomments.css";
import { IoArrowRedoSharp } from "react-icons/io5";
import { formatDate, formatDateTime } from "@/utils";
import Writemessage from "../writemessage/Writemessage";
import { useAddReplyToComment } from "@/app/api/blog";

const Postcomments = ({ comments, id, setComments }) => {

  const [load, setLoad] = useState(true)

  // console.log(data,'data...');

  const Comment = ({ content, createdAt, replies, img, _id, index, author }) => {
    img = 'https://cdn.iconscout.com/icon/free/png-512/free-user-1648810-1401302.png?f=webp&w=256'
    const [showAllReplies, setShowAllReplies] = useState(false);
    const [showtextarea, setShowtextarea] = useState(false);
    const [replyContent, setReplyContent] = useState("");

    const { addReply } = useAddReplyToComment();

    const handleSubmit = async (e) => {
      setShowtextarea(false);
      e.preventDefault();

      const response = await addReply(id, _id, replyContent, "64908ff9eee6e5ab0a6c45c4");
      setComments([...response]);
    };

    return (
      <>
        <div className={` ${index ? "bottom-border" : ""}`}></div>
        <div className="comments-main">
          <div className="comments-inner-main">
            <div className="comments-left">
              <div
                className="auther-img"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </div>
            <div className="comments-right">
              <div className="comments-right-A">
                <h3>{`${author?.firstname} ${author?.lastname}`} </h3>
                <div className="rep-commoents">
                  <h3>{formatDateTime(createdAt)}</h3>{" "}
                  <p className="rep-slas">|</p>{" "}
                  <h6 onClick={() => setShowtextarea(!showtextarea)}>Replay</h6>
                </div>
              </div>
              <div className="comments-right-B">
                <p>{content}</p>
              </div>
            </div>
          </div>
          {/* // */}
          {showtextarea ? (
            <form onSubmit={handleSubmit} className="comments-form" action="">
              <textarea
                placeholder="Write Here...."
                name=""
                id=""
                cols="30"
                rows="10"
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
              ></textarea>
              <button>Submit</button>
            </form>
          ) : (
            ""
          )}
          {/* // */}
          {replies?.length > 0 && (
            <>
              <div className="comments-inner">
                {showAllReplies
                  ? replies?.map((reply, index) => (
                    <>
                      {index === 0 ? (
                        <IoArrowRedoSharp className="left-arrow-comments" />
                      ) : (
                        ""
                      )}
                      <Comment key={index} {...reply} />
                    </>
                  ))
                  : replies?.slice(0, 0).map((reply, index) => (
                    <>
                      <h1>arrow</h1>
                      <Comment key={index} {...reply} />
                    </>
                  ))}
              </div>
              {replies?.length >= 1 && (
                <div className="showmore-main">
                  <button
                    className="showmore-btn"
                    onClick={() => setShowAllReplies(!showAllReplies)}
                  >
                    {showAllReplies ? "Hide Replies" : "Show All Replies"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </>
    );
  };
  const CommentList = ({ comments }) => (
    <div className="commentList">
      {comments?.length > 0 ? (
        comments?.map((comment, index) => (
          <Comment key={index} {...comment} index={index} />
        ))
      ) : (
        !load ?
          <div className="skeleton-main-cate-related  container">
            <div className="row">
              <div className="col-ske col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="skeleton">
                  <div className="skeleton__Comments shadow-sm "></div>
                </div>
              </div>
              <div className="col-ske col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="skeleton">
                  <div className="skeleton__Comments shadow-sm "></div>
                </div>
              </div>
              <div className="col-ske col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="skeleton">
                  <div className="skeleton__Comments shadow-sm "></div>
                </div>
              </div>
            </div>
          </div> 
          :'No Comments Founds !'
      )}
    </div>
  );

  return (
    <>
      <h1 className="comments-heading">Comments</h1>
      <div class="comments-block">
        <div class="form-area">
          <form action="#" class="comment-form validate-form">
            {/* Your form inputs go here */}
          </form>
        </div>

        <CommentList comments={comments} />
      </div>
    </>
  );
};

export default Postcomments;
