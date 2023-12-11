'use client'
import { React, useState, useEffect, useRef } from 'react'
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { AiFillThunderbolt } from "react-icons/ai";
import './Category.css'

const Category = () => {

    const carouselData = [
        { id: 1, content: '1', img: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
        { id: 2, content: '2', img: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
        { id: 3, content: '3', img: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
        { id: 4, content: '4', img: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
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

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    };

    return (
        <>
            <div class=" container max-w-80 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <div class=" xl:pr-4 lg:pr-4 pt-16 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
                    {/* //// */}
                    <div className="carousel-container">
                        <Carousel afterChange={(currentSlide) => onChange(currentSlide)} ref={carouselRef} dots={false} >
                            {carouselData.map((item) => (
                                <div key={item.id}>
                                    <div style={contentStyle}>
                                        <div className='main-scale' >
                                            <div className="overlay"></div>
                                            <div className='cate-background' style={{ backgroundImage: `url(${item.img})` }} >
                                            </div>
                                            <div className="content">
                                                <h1>
                                                    {truncateText('Lorem ipsum dolor sit amet consectetur adipisicing elit.', 20)}
                                                </h1>
                                                <div className="hero-content-type">
                                                    By Admin / 19 Dec 2001 / Treveling
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
                <div class=" pt-16 lg:pl-4 xl:pl-4  rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
                    <div className='main-scale' >
                        <div className="trending-icon flex justify-center items-center text-1xl"><AiFillThunderbolt /></div>
                        <div className="content">
                    <div className="line-anii"></div>
                            <h1>
                                {truncateText('Lorem ipsum dolor sit amet consectetur adipisicing elit.', 20)}
                            </h1>
                            <div className="hero-content-type">
                                By Admin / 19 Dec 2001 / Treveling
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${carouselData[0].img})` }} className="card">
                            <div className="overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category