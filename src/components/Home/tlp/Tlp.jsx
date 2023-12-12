'use client'

import React, { useEffect, useState } from "react";
import "./Tlp.css";
import axios from "axios"; // Import axios for API requests
import { formatDate } from "@/utils";
import { useRouter } from 'next/navigation';

const Tlp = () => {

  const router = useRouter()

  const [topViewedData, setTopViewedData] = useState([]);
  const [topSharedData, setTopSharedData] = useState([]);
  const [topLikedData, setTopLikedData] = useState([]);

  const API = "https://server.blog.digiunction.com";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [likedResponse, sharedResponse, viewedResponse] =
          await Promise.all([
            axios.get(`${API}/api/post/top-liked`),
            axios.get(`${API}/api/post/top-shared`),
            axios.get(`${API}/api/post/top-viewed`),
          ]);

        setTopLikedData(likedResponse.data);
        setTopSharedData(sharedResponse.data);
        setTopViewedData(viewedResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (typeof window !== "undefined") {
      fetchData();
    }
  }, []); // Empty dependency array ensures the effect runs only once

  const truncateText = (text, maxLength) => {
    return text?.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const handleNavigation = (route) => {
    // console.log(route, 'dddd');
    router.push(route);
  }

  return (
    <>
      <div class=" container border max-w-80 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <div class=" pt-8 lg:pr-4 xl:pr-4 md:pr-4 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
          <div onClick={() => handleNavigation(`/post/${topViewedData?.[0]?._id}`)} className="card-tlp">
            <div className="overlay"></div>
            <div
              className="cate-background"
              style={{ backgroundImage: `url(${API + topViewedData?.[0]?.image})` }}
            ></div>
            <div className="content-tlp">
              <h1>
                {truncateText(
                  topViewedData?.[0]?.title,
                  20
                )}
              </h1>
              <div className="hero-content-type">
                {`By Admin / ${formatDate(topViewedData?.[0]?.createdAt)} / ${topViewedData?.[0]?.category?.name}`}
              </div>
              <div className="line-ani"></div>
            </div>
          </div>
        </div>
        <div class=" pt-8 xl:pr-4 lg:pr-4 xl:pl-4 lg:pl-4 md:pl-4 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
          <div onClick={() => handleNavigation(`/post/${topViewedData?.[0]?._id}`)} className="card-tlp">
            <div className="overlay"></div>
            <div
              className="cate-background"
              style={{ backgroundImage: `url(${API + topSharedData?.[0]?.image})` }}
            ></div>
            <div className="content-tlp">
              <h1>
                {truncateText(
                  topSharedData?.[0]?.title,
                  20
                )}
              </h1>
              <div className="hero-content-type">
                {`By Admin / ${formatDate(topSharedData?.[0]?.createdAt)} / ${topSharedData?.[0]?.category?.name}`}
              </div>
              <div className="line-ani"></div>
            </div>
          </div>
        </div>
        <div class=" pt-8 xl:pl-4 lg:pl-4 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
          <div onClick={() => handleNavigation(`/post/${topViewedData?.[0]?._id}`)} className="card-tlp">
            <div className="overlay"></div>
            <div
              className="cate-background"
              style={{ backgroundImage: `url(${API + topLikedData?.[0]?.image})` }}
            ></div>
            <div className="content-tlp">
              <h1>
                {truncateText(
                  topLikedData?.[0]?.title,
                  20
                )}
              </h1>
              <div className="hero-content-type">
                {`By Admin / ${formatDate(topLikedData?.[0]?.createdAt)} / ${topLikedData?.[0]?.category?.name}`}
              </div>
              <div className="line-ani"></div>
            </div>
          </div>
        </div>
      </div>
      {/* //// */}
      <div class=" mt-4 container border max-w-100 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        <div className="bg-blue-500 pl-0 pr-0 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
          <div className="paralex">
            <div className="overlay"></div>
            <div className="hero-content">
              <div className="hero-line"></div>
              <div className="hero-content-heading">
                {truncateText(
                  topViewedData?.[1]?.title,
                  50
                )}
              </div>
              <div className="hero-content-type">
                {`By Admin / ${formatDate(topViewedData?.[1]?.createdAt)} / ${topViewedData?.[1]?.category?.name}`}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //// */}
      <div class=" mt-4 container border max-w-80 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        <div className="pl-0 pr-0 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
          <div className="review">
            {/* <div className="percentage flex justify-center items-center "> 80% </div> */}
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
      </div>
    </>
  );
};

export default Tlp;
