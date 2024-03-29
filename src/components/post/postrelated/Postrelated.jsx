"use client";
import React, { useEffect, useMemo, useRef } from "react";
import "./Postrelated.css";
import '../../../components/Home/tlp/Tlp.css'
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons"; // Import arrow icons
import img1 from "../../../images//fotter-bg.png";
import { formatDate } from "@/utils";
import { useRouter } from "next/navigation";
import useNavi from "@/utils/hooks/useNavi";
import { sliceText } from "@/utils/Textslice";
// import Showtext from "@/utils/showtext";

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

const Postrelated = ({ posts }) => {

  const API = "https://server.blog.digiunction.com";
  // const {truncateText}=Showtext()
  const { handleNavigation } = useNavi()
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
        <h1>Related Posts</h1>
        {
          posts.length > 0 ?
            <Carousel
              afterChange={onChange}
              responsive={responsiveSettings}
              arrows
              ref={carouselRef}
              autoplay
              autoplaySpeed={3000}
            >
              {/* 1 */}
              {
                posts[0] ?
                  <div onClick={() => handleNavigation(`/post/${posts?.[0]?._id}`)} className="related-card-main">
                    <h3 style={contentStyle}>
                      <div className="related-card">
                        <div className="overlay-related"></div>
                        <div className="hero-content">
                          <div className="hero-line"></div>
                          <div className="hero-content-heading">
                            {
                              sliceText(posts[0]?.title, 40)
                            }
                          </div>
                          <div className="hero-content-type">
                            {'By Admin / ' + formatDate(posts?.[0]?.updatedAt) + ' / ' + (posts[0]?.category?.name || 'No Category')}
                          </div>
                        </div>
                        <div
                          className="related-card-img"
                          style={{
                            backgroundImage: `url(${API + posts[0]?.image})`,
                          }}
                        ></div>
                      </div>
                    </h3>
                  </div>
                  : ''
              }
              {/* 2 */}
              {
                posts[1] ?
                  <div onClick={() => handleNavigation(`/post/${posts?.[1]?._id}`)} className="related-card-main">
                    <h3 style={contentStyle}>
                      <div className="related-card">
                        <div className="overlay-related"></div>
                        <div className="hero-content">
                          <div className="hero-line"></div>
                          <div className="hero-content-heading">
                            {
                              sliceText(posts[0]?.title, 40)
                            }
                          </div>
                          <div className="hero-content-type">
                            {'By Admin / ' + formatDate(posts?.[1]?.updatedAt) + ' / ' + (posts[1]?.category?.name || 'No Category')}
                          </div>
                        </div>
                        <div
                          className="related-card-img"
                          style={{
                            backgroundImage: `url(${API + posts[1]?.image})`,
                          }}
                        ></div>
                      </div>
                    </h3>
                  </div>
                  :
                  ''
              }
              {/* 3 */}
              {
                posts[2] ?
                  <div onClick={() => handleNavigation(`/post/${posts?.[2]?._id}`)} className="related-card-main">
                    <h3 style={contentStyle}>
                      <div className="related-card">
                        <div className="overlay-related"></div>
                        <div className="hero-content">
                          <div className="hero-line"></div>
                          <div className="hero-content-heading">
                            {
                              sliceText(posts[0]?.title, 40)
                            }
                          </div>
                          <div className="hero-content-type">
                            {'By Admin / ' + formatDate(posts?.[2]?.updatedAt) + ' / ' + (posts[2]?.category?.name || 'No Category')}
                          </div>
                        </div>
                        <div
                          className="related-card-img"
                          style={{
                            backgroundImage: `url(${API + posts[2]?.image})`,
                          }}
                        ></div>
                      </div>
                    </h3>
                  </div>
                  : ''
              }

              {/* 4 */}
              {
                posts[3] ?
                  <div onClick={() => handleNavigation(`/post/${posts?.[3]?._id}`)} className="related-card-main">
                    <h3 style={contentStyle}>
                      <div className="related-card">
                        <div className="overlay-related"></div>
                        <div className="hero-content">
                          <div className="hero-line"></div>
                          <div className="hero-content-heading">
                            {
                              sliceText(posts[0]?.title, 40)
                            }
                          </div>
                          <div className="hero-content-type">
                            {'By Admin / ' + formatDate(posts?.[3]?.updatedAt) + ' / ' + (posts[3]?.category?.name || 'No Category')}
                          </div>
                        </div>
                        <div
                          className="related-card-img"
                          style={{
                            backgroundImage: `url(${API + posts[3]?.image})`,
                          }}
                        ></div>
                      </div>
                    </h3>
                  </div>
                  : ''
              }
            </Carousel> :
            <div className='skeleton-main-cate-related  container'>
              <div className="row" >
                <div className='col-ske col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                  <div className="skeleton">
                    <div className="skeleton__Bigimg shadow-sm ">
                    </div>
                  </div>
                </div>
                <div className='col-ske col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                  <div className="skeleton">
                    <div className="skeleton__Bigimg shadow-sm ">
                    </div>
                  </div>
                </div>
                <div className='col-ske col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                  <div className="skeleton">
                    <div className="skeleton__Bigimg shadow-sm ">
                    </div>
                  </div>
                </div>
              </div>
            </div>
        }
        {
          posts.length > 0 ?
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
