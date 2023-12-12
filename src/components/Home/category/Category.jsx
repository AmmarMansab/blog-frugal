"use client";
import { React, useState, useEffect, useRef } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import axios from "axios"; // Import axios for API requests
import { AiFillThunderbolt } from "react-icons/ai";
import "./Category.css";
import { formatDate } from "@/utils";
import { useRouter } from 'next/navigation';

const Category = () => {

  const router = useRouter()

  const handleNavigation = (route) => {
    // console.log(route, 'dddd');
    router.push(route);
  }

  const [carouselData, setCarouselData] = useState([]);
  const API = "https://server.blog.digiunction.com";

  const [topViewedData, setTopViewedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [Response, viewedResponse] = await Promise.all([
          axios.get(`${API}/api/category/get-all`),
          axios.get(`${API}/api/post/top-viewed`),
        ]);

        setCarouselData(Response.data);
        setTopViewedData(viewedResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (typeof window !== "undefined") {
      fetchData();
    }
  }, []); // Empty dependency array ensures the effect runs only once
  const contentStyle = {
    margin: 0,
    height: "max-content",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "transparent",
  };

  const carouselRef = useRef(null);

  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };

  const nextSlide = () => {
    carouselRef.current.next();
  };

  const prevSlide = () => {
    carouselRef.current.prev();
  };

  const truncateText = (text, maxLength) => {
    return text?.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <>
      <div className=" container max-w-80 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className=" xl:pr-4 lg:pr-4 pt-16 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
          {/* //// */}
          <div className="carousel-container">
            <Carousel
              afterChange={(currentSlide) => onChange(currentSlide)}
              ref={carouselRef}
              dots={false}
            >
              {carouselData?.map((category) => (
                <div onClick={() => handleNavigation(`/post/${category._id}`)} key={category._id}>
                  <div style={contentStyle}>
                    <div className="main-scale">
                      <div className="overlay"></div>
                      <div
                        className="cate-background"
                        style={{
                          backgroundImage: `url(${API + category.image})`,
                        }}
                      ></div>
                      <div className="content">
                        <h1>{truncateText(category?.name, 20)}</h1>
                        <div className="hero-content-type">
                          {`By Admin / ${formatDate(category.createdAt)}`}
                        </div>
                        <div className="line-ani"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
            <div className="custom-arrows">
              <button className="arrow-btn" onClick={prevSlide}>
                <LeftOutlined />
              </button>
              <button className="arrow-btn" onClick={nextSlide}>
                <RightOutlined />
              </button>
            </div>
          </div>
          {/* //// */}
        </div>
        <div onClick={() => handleNavigation(`/post/${topViewedData?.[5]?._id}`)} class=" pt-16 lg:pl-4 xl:pl-4  rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
          <div className="main-scale">
            <div className="trending-icon flex justify-center items-center text-1xl">
              <AiFillThunderbolt />
            </div>
            <div className="content">
              <div className="line-anii"></div>
              <h1>{truncateText(topViewedData?.[5]?.title, 20)}</h1>
              <div className="hero-content-type">
                {`By Admin / ${formatDate(topViewedData?.[5]?.createdAt)} / ${topViewedData?.[5]?.category?.name
                  }`}
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${API + topViewedData[5]?.image})`,
              }}
              className="card"
            >
              <div className="overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
