"use client";
import { React, useState, useEffect, useRef } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import axios from "axios"; // Import axios for API requests
import { AiFillThunderbolt } from "react-icons/ai";
import "./Category.css";
import { formatDate } from "@/utils";
import { useRouter } from 'next/navigation';

import { useGetCategories } from '../../../app/api/category';
import { useGetTopViewedPosts } from '../../../app/api/blog';


const Category = () => {

  const { categories, catsLoading } = useGetCategories();
  const { posts, postsLoading } = useGetTopViewedPosts();

  const router = useRouter()

  const handleNavigation = (route) => {
    router.push(route);
  }

  const API = "https://server.blog.digiunction.com";

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
              {categories?.map((category) => (
                <div onClick={() => handleNavigation(`/category/${category._id}`)} key={category._id}>
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
        <div onClick={() => handleNavigation(`/post/${posts?.[0]?._id}`)} class=" pt-16 lg:pl-4 xl:pl-4  rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
          <div className="main-scale">
            <div className="trending-icon flex justify-center items-center text-1xl">
              <AiFillThunderbolt />
            </div>
            <div className="content">
              <div className="line-anii"></div>
              <h1>{truncateText(posts?.[0]?.title, 20)}</h1>
              <div className="hero-content-type">
                {`By Admin / ${formatDate(posts?.[0]?.createdAt)} / ${
                  posts?.[0]?.category?.name
                }`}
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${API + posts[0]?.image})`,
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
