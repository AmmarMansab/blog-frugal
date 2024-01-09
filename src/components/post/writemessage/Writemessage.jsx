"use client";
import React, { useState } from "react";
import "./Writemessage.css";
import { useAddCommentOnPost } from "@/app/api/blog";

const Writemessage = ({id, comments, setComments}) => {
  const { addComment, commentsLoading } = useAddCommentOnPost(id);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    // Validation logic if needed
    // console.log(name)

    // Add the comment
    const response = await addComment(message, "64908ff9eee6e5ab0a6c45c4");
    setComments([...response?.comments]);
    // console.log("Comment added successfully:", response);

    // Clear the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <form onSubmit={sendMessage} action="">
        <div className="writemessage-container">
          <div className="write-A">
            <input
              placeholder="Enter Name*"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Enter Email*"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="write-B">
            <textarea
              placeholder="Message"
              name=""
              id=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Writemessage;
