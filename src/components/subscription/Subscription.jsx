"use client";
import { React, useState, useEffect, useRef } from "react";
import "./Subscription.css";
import { Modal } from "antd";
import useModal from "../../utils/hooks/useModel";
import useSubscriptionForm from "@/utils/hooks/useSubscripiton";

const Subscription = () => {
  const nameref = useRef();
  const emailref = useRef();
  const { showModal, handleOk, handleCancel, loading, visible } = useModal();
  const { subscriptionData, handleChange, handleSubmit, isSuccess } =
    useSubscriptionForm();
  const handleSuccess = () => {
    emailref.current.value = "";
    nameref.current.value = "";
  };
  return (
    <>
      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="custom-modal"
        footer={null}
      >
        <div
          className="flex justify-start items-center"
          style={{ marginTop: "-5rem " }}
        >
          <div className="custom-modal-inner-container">
            <div className="custom-modal-inner-A"></div>
            <div className="custom-modal-inner-B">
              <h1>Frugality is not cheap, its a choice, a lifestyle </h1>
              <p>
                All my frugal folks, I talk about how frugal ≠ cheap. You can be
                frugal and a G at the same time. We men are capable of that.
                Your aura, your haki (for anime fans) must be a magnet. You can
                attract positivity and you will, once you subscribe below
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
                  type="text"
                />
                <button>Submit</button>
              </form>
              {isSuccess !== null &&
                (isSuccess ? handleSuccess() : handleError())}
            </div>
          </div>
        </div>
      </Modal>

      <div className="sub-container container max-w-80 mx-auto flex justify-start items-center sm:flex-col flex-col md:flex-row lg:flex-row xl:flex-row " style={{marginBottom: "20px"}}>
        <div className="sub-img">
          <img
            className="sub-h-img"
            src="https://images.unsplash.com/photo-1702573848677-76956eef3258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="sub-content flex justify-center items-start flex-col ">
          <h1>Embrace Frugality, Elevate Your Style</h1>
          <p>Dear Fashion-Conscious Frugals,</p>
          <p>
            Welcome to the Frugal Male Fashion Blog, where we believe that
            frugality is not about being cheap—it&apos;s about making thoughtful
            and intentional choices that allow you to look and feel your best
            without breaking the bank.
          </p>
          <p>
            In a world where consumerism often equates value with price tags,
            we&apos;re here to challenge that notion. We believe that true style
            and sophistication stem not from the price of your wardrobe, but
            from the confidence and creativity you exude in how you dress.
          </p>
          <p>
            At Frugal Male Fashion Blog, we&apos;re passionate about showcasing
            that style and substance can coexist harmoniously, regardless of
            your budget. If you believe that frugality is a mindset, not a
            compromise then subscribe below to get ideas you resonate with
            directly to your inbox.
          </p>
          <button onClick={showModal}>Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default Subscription;
