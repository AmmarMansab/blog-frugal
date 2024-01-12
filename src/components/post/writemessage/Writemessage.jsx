"use client";
import React, { useState, useEffect } from "react";
import "./Writemessage.css";
import { useAddCommentOnPost } from "@/app/api/blog";

const Writemessage = ({ id, comments, setComments }) => {
  const { addComment, commentsLoading } = useAddCommentOnPost(id);

  const [localdata, setLocaldata] = useState(null)
  useEffect(() => {
    var storedJsonString = localStorage.getItem('userId');
    var retrievedData = JSON.parse(storedJsonString);
    setLocaldata(retrievedData)
  }, [localdata])

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    var storedJsonString = localStorage.getItem('userId');
    var retrievedData = JSON.parse(storedJsonString);
    if (retrievedData != null && retrievedData != undefined) {
      const response = await addComment(message, firstname, lastname, email);
      setComments([...response?.comments]);
      setLocaldata(response?.comments[response?.comments?.length - 1]?.author._id)
    }
    else {
      const response = await addComment(message, firstname, lastname, email);
      var jsonString = JSON.stringify(response?.comments[response?.comments?.length - 1]?.author._id);
      localStorage.setItem('userId', jsonString);
      setComments([...response?.comments]);
      setLocaldata(response?.comments[response?.comments?.length - 1]?.author._id)
    }
    // console.log(,'tttt');
    setFirstname("");
    setLastname("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <form onSubmit={sendMessage} action="">
        <div className="writemessage-container">
          {!localdata ? (
            <div className="write-A">
              <>
                <input
                  placeholder="Enter First Name*"
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                  placeholder="Enter Last Name*"
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <input
                  placeholder="Enter Email*"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </>
            </div>
          ) : (
            'Send Comments'
          )}
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
