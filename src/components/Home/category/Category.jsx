"use client";
import { React, useState, useEffect, useRef } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import axios from "axios"; // Import axios for API requests
import { AiFillThunderbolt } from "react-icons/ai";
import "./Category.css";
import { formatDate } from "@/utils";
import { useGetCategories } from '../../../app/api/category';
import { useGetTopViewedPosts } from '../../../app/api/blog';
import useNavi from "@/utils/hooks/useNavi";
// import Showtext from "@/utils/showtext";

const Category = () => {
  const {handleNavigation}=useNavi();
  const { categories, catsLoading } = useGetCategories();
  const { posts, postsLoading } = useGetTopViewedPosts();
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

  return (
    <>
      <div className={` container ${categories.length > 0 ? '' : 'home-cate-con'} max-w-80 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2`}>
        <div className=" xl:pr-4 lg:pr-4 pt-16 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
          {/* //// */}
          <div className="carousel-container">
            {/* //// */}
            {
              categories.length > 0 ?
                <Carousel
                  afterChange={(currentSlide) => onChange(currentSlide)}
                  ref={carouselRef}
                  dots={false}
                  autoplay autoplaySpeed={3000}
                >
                  {categories?.map((category) => (
                    <div onClick={() => handleNavigation(`/category/${category._id}`)} key={category._id} style={{cursor:'pointer'}}  >
                      <div style={contentStyle}>
                        <div className="main-scale">
                          <div className="overlay"></div>
                          <div
                            className="cate-background"
                            style={{
                              backgroundImage: `url(${API + category.image})`,
                            }}
                          ></div>
                          {/* <div className="content">
                            <h1>{truncateText(category?.name, 20)}</h1>
                            <div className="hero-content-type">
                              {`By Admin / ${formatDate(category.createdAt)}`}
                            </div>
                            <div className="line-ani"></div>
                          </div> */}
                          {/* //// */}
                          <div className="tlp-c">
                            <div className="tlp-c-line"></div>
                            <div className="tlp-c-heading-cate">
                              {category?.name}
                            </div>
                            <div className="hero-content-type-tlp">
                            {`By Admin / ${formatDate(category.createdAt)}`}
                            </div>
                          </div>
                          {/* //// */}
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
                :
                <div className="skeletoncontaine" >
                  <div className="skeletoneach1">
                    <div className="skeletoneach1-innerB">
                      <div className="skeleton">
                        <div className="skeleton__Bigimg_cate"></div>
                      </div>
                    </div>
                  </div>
                </div>
            }
            {/* //// */}
            {
              categories.length > 0 ?
                <div className="custom-arrows">
                  <button className="arrow-btn" onClick={prevSlide}>
                    <LeftOutlined />
                  </button>
                  <button className="arrow-btn" onClick={nextSlide}>
                    <RightOutlined />
                  </button>
                </div> : ''
            }
          </div>
          {/* //// */}
        </div>
        <div onClick={() => handleNavigation(`/post/${posts?.[0]?._id}`)} class=" pt-16 lg:pl-4 xl:pl-4  rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
          {/* //// */}
          {
            posts.length > 0 ?
              <div className="main-scale" style={{cursor:'pointer'}} >
                <div className="trending-icon flex justify-center items-center text-1xl">
                  <AiFillThunderbolt style={{ color: 'var(--yellow-shadow)' }} />
                </div>
                <div className="tlp-c">
                  <div className="tlp-c-line"></div>
                  <div className="tlp-c-heading">
                    {posts?.[0]?.title}
                  </div>
                  <div className="hero-content-type-tlp">
                    {`By Admin / ${formatDate(posts?.[0]?.updatedAt)} / ${posts?.[0]?.category?.name}`}
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
              </div> :
              <div className="skeletoncontaine" >
                <div className="skeletoneach1">
                  <div className="skeletoneach1-innerB">
                    <div className="skeleton">
                      <div className="skeleton__Bigimg_cate"></div>
                    </div>
                  </div>
                </div>
              </div>
          }

          {/* ///////////////////////////////////// */}

          {/* <div
            onClick={() => handleNavigation(`/post/${topLikedData?.[0]?._id}`)}
            className="card-tlp"
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
                {truncateText(topLikedData?.[0]?.title, 35)}
              </div>
              <div className="hero-content-type-tlp">
                {`By Admin / ${formatDate(topLikedData?.[0]?.updatedAt)} / ${topLikedData?.[0]?.category?.name}`}
              </div>
            </div>
          </div> */}

          {/* //////////////////////////////// */}

          {/* //// */}
        </div>
      </div>
    </>
  );
};

export default Category;
