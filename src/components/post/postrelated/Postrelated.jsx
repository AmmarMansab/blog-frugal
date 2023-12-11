'use client'
import React, { useEffect, useMemo ,useRef } from 'react'
import './Postrelated.css'
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'; // Import arrow icons

const contentStyle = {
    margin: 0,
    height: 'max-content',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'transparent',
    display: 'flex',  // Corrected property name
    justifyContent: 'center',  // Corrected property name
    alignItems: 'center',  // Corrected property name
};

const Postrelated = () => {

    const carouselRef = useRef(null);

    const data = [
        {
            title: 'noting',
            category: 'traveling',
            by: 'Admin',
            date: 'Dec 19 , 2001',
        },
        {
            title: 'noting',
            category: 'traveling',
            by: 'Admin',
            date: 'Dec 19 , 2001',
        },
    ]

    const onChange = (currentSlide) => {
        console.log(currentSlide);
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
    const nextSlide = () => {
        carouselRef?.current?.next();
    };

    const prevSlide = () => {
        carouselRef?.current?.prev();
    };
    return (
        <>
            <div className='carousel-container' >
                <h1>Related Products</h1>
                <Carousel afterChange={onChange} responsive={responsiveSettings} arrows  ref={carouselRef} >
                    <div className='related-card-main' >
                        <h3 style={contentStyle}>
                            <div className="related-card">1</div>
                        </h3>
                    </div>
                    <div className='related-card-main' >
                        <h3 style={contentStyle}>
                            <div className="related-card">2</div>
                        </h3>
                    </div>
                    <div className='related-card-main' >
                        <h3 style={contentStyle}>
                            <div className="related-card">3</div>
                        </h3>
                    </div>
                    <div className='related-card-main' >
                        <h3 style={contentStyle}>
                            <div className="related-card">4</div>
                        </h3>
                    </div>
                </Carousel>
                <div className="custom-arrows">
                    <button className="arrow-btn" 
                    onClick={prevSlide}
                    >
                        <LeftOutlined />
                    </button>
                    <button className="arrow-btn" 
                    onClick={nextSlide}
                    >
                        <RightOutlined />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Postrelated