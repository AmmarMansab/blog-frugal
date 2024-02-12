"use client";

import React, { useEffect, useState } from "react";
import "./Tlp.css";
import axios from "axios"; // Import axios for API requests
import { formatDate } from "@/utils";
import { useRouter } from "next/navigation";
import { MdSignalWifiStatusbarConnectedNoInternet1 } from "react-icons/md";
import useNavi from "@/utils/hooks/useNavi";
import {
  useGetTopViewedPosts,
  useGetPosts,
  useGetTopSharedPosts,
  useGetTopLikedPosts,
} from "../../../app/api/blog";

import {sliceText} from '../../../utils/Textslice';

const Tlp = () => {
  const { posts: topViewedData, postsLoading: a } = useGetTopViewedPosts();
  const { posts: recentPosts, postsLoading: b } = useGetPosts();
  const { posts: topSharedData, postsLoading: c } = useGetTopSharedPosts();
  const { posts: topLikedData, postsLoading: d } = useGetTopLikedPosts();
  const { handleNavigation } = useNavi()

  // console.log(recentPosts, 'recentposts....', 'recentloading....', b,);

  const [loading, setLoading] = useState(false);
  const [reloadComponent, setReloadComponent] = useState(false);
  const router = useRouter();
  const API = "https://server.blog.digiunction.com";
  const handleReload = () => {
    setReloadComponent(!reloadComponent);
  };


  return (
    <>
      <div class="  container max-w-80 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <div class=" pt-8 lg:pr-4 xl:pr-4 md:pr-4 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
          {
            d === false && topLikedData.length > 0 ?
              <div
                onClick={() => handleNavigation(`/post/${topLikedData?.[0]?._id}`)}
                className="card-tlp "
                style={{ cursor: 'pointer' }}
              >
                <div className="overlay"></div>
                <div
                  className="tlp-c-card-img"
                  style={{
                    backgroundImage: `url(${API + topLikedData?.[0]?.image})`,
                  }}
                ></div>
                <div className="overlay-related"></div>
                <div className="tlp-c">
                  <div className="tlp-c-line"></div>
                  <div className="tlp-c-heading">
                  {sliceText(topLikedData?.[0]?.title, 35)}
                  </div>
                  <div className="hero-content-type-tlp">
                    {`By Admin / ${formatDate(topLikedData?.[0]?.updatedAt)} / ${ topLikedData?.[0]?.category?.name}` }
                  </div>
                </div>
              </div>
              :
              // loading !== true ?
              <div className="skeletoncontaine shadow-lg " >
                <div className="skeletoneach1">
                  <div className="skeletoneach1-innerB">
                    <div className="skeleton">
                      <div className="skeleton__Bigimg"></div>
                    </div>
                  </div>

                </div>
              </div>
            // :
            // <div className="d-flex justify-content-center align-item-center">
            //   <div className="d-flex justify-content-center align-items-center flex-column">
            //     <MdSignalWifiStatusbarConnectedNoInternet1 style={{ fontSize: '29px' }} />
            //     <h6>Something Wrong</h6>
            //     <button className="wrongbtn" onClick={handleReload}>
            //       Reload
            //     </button>
            //   </div>
            // </div>
          }
        </div>
        <div class=" pt-8 xl:pr-4 lg:pr-4 xl:pl-4 lg:pl-4 md:pl-4 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
          {
            c === false && topSharedData.length > 0 ?
              <div
                onClick={() => handleNavigation(`/post/${topSharedData?.[0]?._id}`)}
                className="card-tlp"
                style={{ cursor: 'pointer' }}
              >
                <div className="overlay"></div>
                <div
                  className="tlp-c-card-img"
                  style={{
                    backgroundImage: `url(${API + topSharedData?.[0]?.image})`,
                  }}
                ></div>
                <div className="overlay-related"></div>
                <div className="tlp-c">
                  <div className="tlp-c-line"></div>
                  <div className="tlp-c-heading">
                    {sliceText(topSharedData?.[0]?.title, 35)}
                  </div>
                  <div className="hero-content-type-tlp">
                    {`By Admin / ${formatDate(topSharedData?.[0]?.updatedAt)} / ${topSharedData?.[0]?.category?.name}`}
                  </div>
                </div>
              </div>
              :
              // loading !== true ?
              <div className="skeletoncontaine shadow-lg " >
                <div className="skeletoneach1">
                  <div className="skeletoneach1-innerB">
                    <div className="skeleton">
                      <div className="skeleton__Bigimg"></div>
                    </div>
                  </div>

                </div>
              </div>
            // :
            // <div className="d-flex justify-content-center align-item-center">
            //   <div className="d-flex justify-content-center align-items-center flex-column">
            //     <MdSignalWifiStatusbarConnectedNoInternet1 style={{ fontSize: '29px' }} />
            //     <h6>Something Wrong</h6>
            //     <button className="wrongbtn" onClick={handleReload}>
            //       Reload
            //     </button>
            //   </div>
            // </div>
          }

        </div>
        <div class=" pt-8 xl:pl-4 lg:pl-4 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
          {/* //// */}
          {
            b === false && recentPosts.length > 0 ?
              <div
                onClick={() => handleNavigation(`/post/${recentPosts?.[0]?._id}`)}
                className="card-tlp"
                style={{ cursor: 'pointer' }}
              >
                <div className="overlay"></div>
                <div
                  className="tlp-c-card-img"
                  style={{
                    backgroundImage: `url(${API + recentPosts?.[0]?.image})`,
                  }}
                ></div>
                <div className="overlay-related"></div>
                <div className="tlp-c">
                  <div className="tlp-c-line"></div>
                  <div className="tlp-c-heading">
                  {sliceText(recentPosts?.[0]?.title, 35)}
                  </div>
                  <div className="hero-content-type-tlp">
                    {`By Admin / ${formatDate(recentPosts?.[0]?.updatedAt)} / ${recentPosts?.[0]?.category?.name}`}
                  </div>
                </div>
              </div>
              :
              // loading !== true ?
              <div className="skeletoncontaine shadow-lg " >
                <div className="skeletoneach1">
                  <div className="skeletoneach1-innerB">
                    <div className="skeleton">
                      <div className="skeleton__Bigimg"></div>
                    </div>
                  </div>
                </div>
              </div>
            // :
            // <div className="d-flex justify-content-center align-item-center">
            //   <div className="d-flex justify-content-center align-items-center flex-column">
            //     <MdSignalWifiStatusbarConnectedNoInternet1 style={{ fontSize: '29px' }} />
            //     <h6>Something Wrong</h6>
            //     <button className="wrongbtn" onClick={handleReload}>
            //       Reload
            //     </button>
            //   </div>
            // </div>
          }
          {/* ////////////////////////////////////// */}
          {

          }
          {/* //////////////////////////////////// */}
          {/* //// */}
        </div>
      </div >
      {/* //// */}
      < div class=" mt-4 container container-paralex max-w-100 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1" >
        <div className="bg-blue-500 pl-0 pr-0 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
          <div className="tlpe-main">
            <div className="paralex">
              <div className="paralex-img"></div>
              <div className="overlay"></div>
              <div className="hero-content">
                {/* <div className="hero-line"></div> */}
                <div className="hero-content-heading">
                  
                </div>
                <div className="hero-content-type">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* //// */}
      {/* <div class=" mt-4 container border max-w-80 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        <div className="pl-0 pr-0 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
          <div className="review">
            <div
              className="cate-background-tlp"
              style={{ backgroundImage: `url(${API + topViewedData?.[2]?.image})` }}
            ></div>
            <div className="overlay"></div>
            <div className="content-tlp">
              <h1>
                {truncateText(
                  topViewedData?.[2]?.title,
                  20
                )}
              </h1>
              <div className="hero-content-type">
                {`By Admin / ${formatDate(topViewedData?.[2]?.createdAt)} / ${topViewedData?.[2]?.category?.name}`}
              </div>
              <div className="line-ani"></div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Tlp;
