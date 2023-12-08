'use client'
import { React, useEffect, useRef, useState } from 'react'
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { AiFillThunderbolt } from "react-icons/ai";
import './Tlpheader.css'

const Tlpheader = () => {

    const carouselData = [
        { id: 1, content: '1', img: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
        { id: 2, content: '2', img: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
        { id: 3, content: '3', img: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
        { id: 4, content: '4', img: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
        { id: 1, content: '5', img: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
        { id: 2, content: '6', img: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
        { id: 3, content: '7', img: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
        { id: 4, content: '8', img: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
    ];

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
        console.log(currentSlide);
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

    return (
        <>
            <div class=" container border max-w-100 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                <div class="bg-blue-500 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
                    {/* //// */}
                    <div className="carousel-container">
                        <Carousel afterChange={onChange} ref={carouselRef} dots={false} responsive={responsiveSettings}>
                            {carouselData.map((item) => (
                                <div key={item.id}>
                                    <div style={contentStyle}>
                                        <div className='cate-background-peakpicks' style={{ backgroundImage: `url(${item.img})` }} >
                                            <div className="overlay"></div>
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
            </div>
        </>
    )
}

export default Tlpheader