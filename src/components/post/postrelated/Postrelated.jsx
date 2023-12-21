"use client";
import React, { useEffect, useMemo, useRef } from "react";
import "./Postrelated.css";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons"; // Import arrow icons
import img1 from "../../../images//fotter-bg.png";

const contentStyle = {
  margin: 0,
  height: "max-content",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "transparent",
  display: "flex", // Corrected property name
  justifyContent: "center", // Corrected property name
  alignItems: "center", // Corrected property name
};

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const Postrelated = ({ posts }) => {
  const carouselRef = useRef(null);

  // console.log(posts)

  const data = [
    {
      title: "noting",
      category: "traveling",
      by: "Admin",
      date: "Dec 19 , 2001",
      // img:'../../../images//fotter-bg.png',
    },
    {
      title: "noting",
      category: "traveling",
      by: "Admin",
      date: "Dec 19 , 2001",
      // img:img1,
    },
  ];

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const responsiveSettings = [
    {
      breakpoint: 600, // screen size 768px and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992, // screen size 992px and below
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200, // screen size 1200px and below
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1600, // screen size 1200px and below
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 20000, // screen size 1200px and below
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ];
  const nextSlide = () => {
    carouselRef?.current?.next();
  };

  const prevSlide = () => {
    carouselRef?.current?.prev();
  };
  return (
    <>
      <div className="carousel-container">
        <h1>Related Products</h1>
        <Carousel
          afterChange={onChange}
          responsive={responsiveSettings}
          arrows
          ref={carouselRef}
        >
          <div className="related-card-main">
            <h3 style={contentStyle}>
              <div className="related-card">
                <div
                  className="related-card-img"
                  //  style={{backgroundImage:`url(${data[0].img})`}}
                ></div>
              </div>
            </h3>
          </div>
          <div className="related-card-main">
            <h3 style={contentStyle}>
              <div className="related-card">
                <div className="overlay-related"></div>
                <div className="hero-content">
                  <div className="hero-line"></div>
                  <div className="hero-content-heading">
                    {truncateText(
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                      50
                    )}
                  </div>
                  <div className="hero-content-type">
                    By Admin / 19 Dec 2001 / Treveling
                  </div>
                </div>
                <div
                  className="related-card-img"
                  //  style={{backgroundImage:`url(${data[0].img})`}}
                ></div>
              </div>
            </h3>
          </div>
          <div className="related-card-main">
            <h3 style={contentStyle}>
              <div className="related-card">
                <div className="overlay-related"></div>
                <div className="hero-content">
                  <div className="hero-line"></div>
                  <div className="hero-content-heading">
                    {truncateText(
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                      50
                    )}
                  </div>
                  <div className="hero-content-type">
                    By Admin / 19 Dec 2001 / Treveling
                  </div>
                </div>
                <div
                  className="related-card-img"
                  //  style={{backgroundImage:`url(${data[0].img})`}}
                ></div>
              </div>
            </h3>
          </div>
          <div className="related-card-main">
            <h3 style={contentStyle}>
              <div className="related-card">
                <div className="overlay-related"></div>
                <div className="content-related">
                  <div className="hero-content">
                    <div className="hero-line"></div>
                    <div className="hero-content-heading">
                      {truncateText(
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        50
                      )}
                    </div>
                    <div className="hero-content-type">
                      By Admin / 19 Dec 2001 / Treveling
                    </div>
                  </div>
                </div>
                <div
                  className="related-card-img"
                  //  style={{backgroundImage:`url(${data[0].img})`}}
                ></div>
              </div>
            </h3>
          </div>
        </Carousel>
        <div className="custom-arrows">
          <button className="arrow-btn-left" onClick={prevSlide}>
            <LeftOutlined />
          </button>
          <button className="arrow-btn-right" onClick={nextSlide}>
            <RightOutlined />
          </button>
        </div>
      </div>
    </>
  );
};

export default Postrelated;
