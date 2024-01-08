"use client";
import React, { useEffect, useMemo, useRef } from "react";
import "./Postrelated.css";
import '../../../components/Home/tlp/Tlp.css'
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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const truncateText = (text, maxLength) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};
const Postrelated = ({ posts }) => {

  const relatedpost = []

  const carouselRef = useRef(null);
  const onChange = (currentSlide) => { };
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
        {
          relatedpost.length > 0 ?
            <Carousel
              afterChange={onChange}
              responsive={responsiveSettings}
              arrows
              ref={carouselRef}
            >
              {/* 1 */}
              <div className="related-card-main">
                <h3 style={contentStyle}>
                  <div className="related-card">
                    <div className="overlay-related"></div>
                    <div className="hero-content">
                      <div className="hero-line"></div>
                      <div className="hero-content-heading">
                        {truncateText(
                          " 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                          35
                        )}
                      </div>
                      <div className="hero-content-type">
                        By Admin / 19 Dec 2001 / Treveling
                      </div>
                    </div>
                    <div
                      className="related-card-img"
                    ></div>
                  </div>
                </h3>
              </div>
              {/* 2 */}
              <div className="related-card-main">
                <h3 style={contentStyle}>
                  <div className="related-card">
                    <div className="overlay-related"></div>
                    <div className="hero-content">
                      <div className="hero-line"></div>
                      <div className="hero-content-heading">
                        {truncateText(
                          "2 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                          35
                        )}
                      </div>
                      <div className="hero-content-type">
                        By Admin / 19 Dec 2001 / Treveling
                      </div>
                    </div>
                    <div
                      className="related-card-img"
                    ></div>
                  </div>
                </h3>
              </div>
              {/* 3 */}
              <div className="related-card-main">
                <h3 style={contentStyle}>
                  <div className="related-card">
                    <div className="overlay-related"></div>
                    <div className="hero-content">
                      <div className="hero-line"></div>
                      <div className="hero-content-heading">
                        {truncateText(
                          "3 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                          35
                        )}
                      </div>
                      <div className="hero-content-type">
                        By Admin / 19 Dec 2001 / Treveling
                      </div>
                    </div>
                    <div
                      className="related-card-img"
                    ></div>
                  </div>
                </h3>
              </div>
              {/* 4 */}
              <div className="related-card-main">
                <h3 style={contentStyle}>
                  <div className="related-card">
                    <div className="overlay-related"></div>
                    <div className="hero-content">
                      <div className="hero-line"></div>
                      <div className="hero-content-heading">
                        {truncateText(
                          "4 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                          35
                        )}
                      </div>
                      <div className="hero-content-type">
                        By Admin / 19 Dec 2001 / Treveling
                      </div>
                    </div>
                    <div
                      className="related-card-img"
                    ></div>
                  </div>
                </h3>
              </div>
            </Carousel> :
            <div className='skeleton-main-cate-related  container'>
              <div className="row" >
                <div className='col-ske col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                  <div className="skeleton">
                    <div className="skeleton__Bigimg shadow-sm ">
                      {/* DDFDFDF */}
                    </div>
                  </div>
                </div>
                <div className='col-ske col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                  <div className="skeleton">
                    <div className="skeleton__Bigimg shadow-sm ">
                      {/* DFDFDFDF */}
                    </div>
                  </div>
                </div>
                <div className='col-ske col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                  <div className="skeleton">
                    <div className="skeleton__Bigimg shadow-sm ">
                      {/* DFDFDF */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        }
        {
          relatedpost.length > 0 ?
            <div className="custom-arrows">
              <button className="arrow-btn-left" onClick={prevSlide}>
                <LeftOutlined />
              </button>
              <button className="arrow-btn-right" onClick={nextSlide}>
                <RightOutlined />
              </button>
            </div> : ''
        }
      </div>
    </>
  );
};

export default Postrelated;
