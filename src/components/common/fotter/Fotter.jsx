"use client";
import React, { useRef, useState } from "react";
import "./Fotter.css";
import { FaFacebook } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";
import { useGetPosts } from "@/app/api/blog";
import { useRouter } from "next/navigation";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { BiSolidRegistered } from "react-icons/bi";
import { SiPinterest } from "react-icons/si";
import { FaReddit } from "react-icons/fa6";
import axios from "axios";
import { message } from "antd";
import useSubscriptionForm from "../../../utils/hooks/useSubscripiton";
// import Showtext from '@/utils/showtext';
import useNavi from "@/utils/hooks/useNavi";
import { sliceText } from "@/utils/Textslice";
import Image from "next/image";
import wLogo from "../../../images/wLogo.svg";
// import img from 'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8';

const Fotter = () => {
  const router = useRouter();
  const { subscriptionData, handleChange, handleSubmit, isSuccess } =
    useSubscriptionForm();
  const { handleNavigation } = useNavi();
  const { posts: recentPosts, postsLoading: b } = useGetPosts();
  const API = "https://server.blog.digiunction.com";
  const emailref = useRef();
  const nameref = useRef();
  const handleSuccess = () => {
    emailref.current.value = "";
    nameref.current.value = "";
  };

  return (
    <>
      <div class=" pt-8 container container-fotter max-w-100 mx-auto ">
        <div class=" container fot-main mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {/* //// */}
          <div class="pt-12 pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 flex flex-col justify-start items-center">
            <div className="fotter-logo flex justify-center items-center ">
            <Image
                    src={wLogo}
                    alt="Frugal Male Fashion Blog"
                    width={200}
                    height={150}
                    className="logo"
                    style={{paddingBottom: "20px", marginTop: "20px"}}
                  />
            </div>
            <p className="fotter-logo-p text-sx ">
              FMF is a premier male fashion blog/gossip site. We are committed to promote the idea that frugality is not about being cheap. It's a choice one should be proud of!
            </p>
            <div className="fotter-social flex flex-col justify-center items-center">
              <h3 className="content-white">Social Icons</h3>
              <div className="fotter-icons flex justify-between items-center ">
                <RiInstagramFill style={{ color: "white" }} />
                <SiPinterest style={{ color: "white" }} />
                <FaSquareXTwitter style={{ color: "white" }} />
                <FaReddit style={{ color: "white" }} />
              </div>
            </div>
          </div>
          {/* //// */}
          <div class="pt-0 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 flex flex-col justify-start items-center">
            <div className="fotter-cate flex flex-col justify-start items-center">
              <h3 className=" text-center content-white">
                Dressing Frugal ≠ Being Cheap
              </h3>
              <p className="text-center text-white text-sx ">
                I talk about how dressing frugally doesnt mean being cheap.
                Its all about how you carry yourself. Your aura, your haki (for
                anime lovers) should be a magnet. You are capable of that.
                Subscribe below 👇🏽 and Ill tell you how!
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
                  placeholder="Name"
                  name="name"
                  className="h-[35px] w-full mt-4 pl-4"
                  type="text"
                />
                <input
                  ref={emailref}
                  onChange={handleChange}
                  placeholder="Email"
                  name="email"
                  className="h-[35px] w-full mt-4 pl-4"
                  type="text"
                />
                <button
                  type="submit"
                  className="h-[35px] w-full mt-4 sub-btn-fot"
                >
                  Subscribe
                </button>
              </form>
              {isSuccess !== null &&
                (isSuccess ? handleSuccess() : handleError())}
            </div>
          </div>
          {/* //// */}
          {/* //// */}
          <div class=" pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 flex flex-col justify-start items-center">
            <div className="fotter-cate flex flex-col justify-start items-center">
              <h3 className="content-white">Affiliate / Legal Info</h3>
              <div className="text-white text-center text-sx ">
                Frugal Male Fashion Blog (FMF blog) is a participant in the
                Amazon Services LLC Associates Program, an affiliate advertising
                program designed to provide a means for sites to earn
                advertising fees by advertising and linking to
              </div>
              <div className="text-white text-center">
                FMF also participates in affiliate programs with other sites.
                FMF is compensated for referring traffic and business to these
                companies. This comes at no extra cost to you, the reader.
              </div>
            </div>
          </div>
          {/* //// */}
          <div class="pr-10 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 flex flex-col justify-center items-center">
            <div className="fotter-card-main h-175 w-full  flex justify-center items-center mt-8 ">
              {recentPosts[0] ? (
                <div
                  className="w-1/2 h-full relative cursor-pointer fot-recents "
                  onClick={() =>
                    handleNavigation(`/post/${recentPosts[0]?._id}`)
                  }
                >
                  <div
                    style={{
                      backgroundImage: `url(${API + recentPosts[0]?.image})`,
                    }}
                    className="fotter-img"
                  ></div>
                  <div className="fot-content">
                    <h5>{sliceText(recentPosts[0]?.title, 35)}</h5>
                  </div>
                  <div className="overlay"></div>
                </div>
              ) : (
                ""
              )}
              {recentPosts[1] ? (
                <div
                  className="w-1/2 h-full relative cursor-pointer fot-recents "
                  onClick={() =>
                    handleNavigation(`/post/${recentPosts?.[1]?._id}`)
                  }
                >
                  <div
                    style={{
                      backgroundImage: `url(${API + recentPosts[1]?.image})`,
                    }}
                    className="fotter-img"
                  ></div>
                  <div className="fot-content">
                    <h5>{sliceText(recentPosts[1]?.title, 35)}</h5>
                  </div>
                  <div className="overlay"></div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="fotter-card-main h-175 w-full flex justify-center items-center ">
              {recentPosts[2] ? (
                <div
                  className="w-1/2 h-full relative cursor-pointer fot-recents "
                  onClick={() =>
                    handleNavigation(`/post/${recentPosts[2]?._id}`)
                  }
                >
                  <div
                    style={{
                      backgroundImage: `url(${API + recentPosts[2]?.image})`,
                    }}
                    className="fotter-img"
                  ></div>
                  <div className="fot-content">
                    <h5>{sliceText(recentPosts[2]?.title, 35)}</h5>
                  </div>
                  <div className="overlay"></div>
                </div>
              ) : (
                ""
              )}
              {recentPosts[3] ? (
                <div
                  className="w-1/2 h-full relative cursor-pointer fot-recents "
                  onClick={() =>
                    handleNavigation(`/post/${recentPosts[3]?._id}`)
                  }
                >
                  <div
                    style={{
                      backgroundImage: `url(${API + recentPosts[3]?.image})`,
                    }}
                    className="fotter-img"
                  ></div>
                  <div className="fot-content" style={{ textAlign: "center" }}>
                    <h5>{sliceText(recentPosts[3]?.title, 35)}</h5>
                  </div>
                  <div className="overlay"></div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          {/* //// */}
        </div>
        <div className="container fotter-end  mx-auto flex justify-start items-center ">
          <h1 className="pt-10 pl-16 flex  ">
            Made with &#10084; by Digiunction
            {/* <a href="https://www.digiunction.com/">Digiunction</a> */}
            {/* <BiSolidRegistered className="ml-1" />{" "} */}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Fotter;
