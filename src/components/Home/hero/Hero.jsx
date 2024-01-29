"use client";
import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import axios from "axios"; // Import axios for API requests
import "./Hero.css"; // Import your CSS file
import { formatDate } from "@/utils";
import { useRouter } from "next/navigation";
import { useGetPosts } from '../../../app/api/blog';
import Scrolldown from '../../../utils/Scrolldown';
import useNavi from "@/utils/hooks/useNavi";
// import Showtext from "@/utils/showtext";

const contentStyle = {
  margin: 0,
  height: "max-content",
  lineHeight: "160px",  
  textAlign: "center",
  background: "transparent",
};


const Hero = () => {
  const {handleNavigation}=useNavi();
  const { posts, postsLoading } = useGetPosts();
  const carouselRef = useRef(null);
  const API = "https://server.blog.digiunction.com";
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
    <div className="carousel-container">
      <Scrolldown/>
      {
        posts.length > 0 ?
          <Carousel
            afterChange={(currentSlide) => onChange(currentSlide)}
            ref={carouselRef}
            autoplay autoplaySpeed={4000}
          >
            {posts?.map((post) => (
              <div className="hero-con" onClick={() => handleNavigation(`/post/${post?._id}`)} style={{ cursor: 'pointer' }} key={post?._id}>
                <div style={contentStyle}>
                  <div
                    className="hero-main"
                  >
                    <div className="hero-img" style={{ backgroundImage: `url(${API + post.image})` }} ></div>
                    <div  className="hero-overlay"></div>
                    <div  className="tlp-c">
                      <div className="tlp-hero-line"></div>
                      <div  className="tlp-c-heading-hero">
                        {post?.title}
                      </div>
                      <div className="hero-content-type-tlp">
                        {`By Admin / ${formatDate(post?.updatedAt)} / ${post?.category?.name}`}
                      </div>
                    </div>
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
                  <div className="skeleton__Bigimg_hero"></div>
                </div>
              </div>
            </div>
          </div>
      }
      <div className="custom-arrows">
        <button className="arrow-btn" onClick={prevSlide}>
          <LeftOutlined />
        </button>
        <button className="arrow-btn" onClick={nextSlide}>
          <RightOutlined />
        </button>
      </div>
    </div>
  );
};

export default Hero;
