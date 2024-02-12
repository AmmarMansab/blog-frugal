"use client";
import React, { useRef } from "react";
import "./Subscribe.css";
import useSubscriptionForm from "@/utils/hooks/useSubscripiton";

const Subscribe = () => {
  const nameref = useRef();
  const emailref = useRef();
  const { subscriptionData, handleChange, handleSubmit, isSuccess } =
    useSubscriptionForm();
  const handleSuccess = () => {
    emailref.current.value = "";
    nameref.current.value = "";
  };
  return (
    <>
      <div class=" sub-container ">
        <img
          className="sub-h-img"
          src="https://images.unsplash.com/photo-1658963654546-593c6ea57ce4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
          alt=""
        />
        <div className="sub-h-content">
          <h1 style={{ fontSize: "2rem", lineHeight: "2rem" }}>
            Embrace Frugality, Elevate Your Style{" "}
          </h1>
          <p style={{ fontSize: "1rem" }}>Dear Fashion-Conscious Frugals,</p>
          <p style={{fontSize:"1rem"}}>
            Welcome to the Frugal Male Fashion Blog, where we believe that
            frugality is not about being cheap—it&apos;s about making thoughtful and
            intentional choices that allow you to look and feel your best
            without breaking the bank.
          </p>
          <p style={{fontSize:"1rem"}}>
            In a world where consumerism often equates value with price tags,
            we&apos;re here to challenge that notion. We believe that true style and
            sophistication stem not from the price of your wardrobe, but from
            the confidence and creativity you exude in how you dress.
          </p>
          <p style={{fontSize:"1rem"}}>
            At Frugal Male Fashion Blog, we&apos;re passionate about showcasing that
            style and substance can coexist harmoniously, regardless of your
            budget. If you believe that frugality is a mindset, not a compromise
            then subscribe below to get ideas you resonate with
            directly to your inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(
                "https://server.blog.digiunction.com/api/news/create"
              );
            }}
          >
            <input
              ref={nameref}
              onChange={handleChange}
              placeholder="name"
              type="text"
            />
            <input
              ref={emailref}
              onChange={handleChange}
              placeholder="email"
              type="email"
            />
            <button>Subscribe</button>
          </form>
          {isSuccess !== null && (isSuccess ? handleSuccess() : handleError())}
        </div>
      </div>
    </>
  );
};
export default Subscribe;
