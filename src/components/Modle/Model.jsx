"use client";
import React, { useState, useEffect, useRef } from "react";
import { Modal } from "antd";
import useModal from "../../utils/hooks/useModel";
import useSubscriptionForm from "@/utils/hooks/useSubscripiton";

const Model = () => {
  const [showPopup, setShowPopup] = useState(false);
  const nameref = useRef();
  const emailref = useRef();
  const { showModal, handleOk, handleCancel, loading, visible, setVisible } =
    useModal();
  const { subscriptionData, handleChange, handleSubmit, isSuccess } =
    useSubscriptionForm();
  const handleSuccess = () => {
    emailref.current.value = "";
    nameref.current.value = "";
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 20000);
    return () => clearTimeout(timeoutId);
  }, []);

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
          style={{ height: "80vh", marginTop: "-10vh " }}
        >
          <div className="custom-modal-inner-container">
            <div className="custom-modal-inner-A"></div>
            <div className="custom-modal-inner-B">
              <h1>Frugality is not cheap, it's a choice, a lifestyle</h1>
              <p>
              All my frugal folks, I talk about how frugal ≠ cheap. You can be frugal and a G at the same time. We men are capable of that. Your aura, your haki (for anime fans) must be a magnet. You can attract positivity and you will, once you subscribe below
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
    </>
  );
};

export default Model;
