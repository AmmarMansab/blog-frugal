'use client'
import { React, useEffect, useRef, useState } from 'react'
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { AiFillThunderbolt } from "react-icons/ai";
import { formatDate } from "@/utils";
// import Scrolldown from '@/utils/scrolldown';
import './Tlpheader.css'
import { Spin } from 'antd'
import useNavi from '@/utils/hooks/useNavi';
import { sliceText } from '@/utils/Textslice';

const Tlpheader = ({ data }) => {
    const { handleNavigation } = useNavi()
    const contentStyle = {
        margin: 0,
        height: 'max-content',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: 'transparent',
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
    const responsiveSettings = [
        {
            breakpoint: 600,  // screen size 768px and below
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 992,  // screen size 992px and below
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1200,  // screen size 1200px and below
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1600,  // screen size 1200px and below
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 20000,  // screen size 1200px and below
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
    ];

    const API = "https://server.blog.digiunction.com";

    const truncateText = (text, maxLength) => {
        return text?.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    };

    return (
        <>
            {data ? (
                <div class="peakpics-con  mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                    <div class=" pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 spin-main ">
                        <div className="carousel-container">
                            <Carousel afterChange={onChange} ref={carouselRef} dots={false} responsive={responsiveSettings}>
                                {data.map((item) => (<div onClick={() => handleNavigation(`/post/${item?._id}`)} key={item?.id}>
                                    <div style={contentStyle}>
                                        <div className="cate-carousel-main">
                                            <div className='cate-background-peakpicks' style={{ backgroundImage: `url(${API + item.image})` }} >
                                                <div className="overlay"></div>
                                                <div className="tlp-c" style={{ height: '100%' }} >
                                                    <div className="tlp-c-line-p"></div>
                                                    <div className="tlp-c-heading-pp">
                                                        {
                                                        sliceText(item?.title,25)
                                                        }
                                                    </div>
                                                    <div className="hero-content-type-tlp">
                                                        {`By Admin / ${formatDate(item?.updatedAt)} / ${item?.category?.name}`}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>))}
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
                    </div>
                </div>
            ) : (
                <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="spin_container">
                    <Spin />
                </div>
            )}
        </>)

}

export default Tlpheader