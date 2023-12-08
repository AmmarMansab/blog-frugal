'use client'
import React, { useEffect, useMemo } from 'react'
import './Postrelated.css'
import { Carousel } from 'antd';

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

    return (
        <>
            <div className='carousel-container' >
                <Carousel afterChange={onChange} responsive={responsiveSettings} arrows>
                    <div className='related-card-main' >
                        <h3 style={contentStyle}>
                            <div className="related-card"></div>
                        </h3>
                    </div>
                    <div className='related-card-main' >
                        <h3 style={contentStyle}>
                            <div className="related-card"></div>
                        </h3>
                    </div>
                    <div className='related-card-main' >
                        <h3 style={contentStyle}>
                            <div className="related-card"></div>
                        </h3>
                    </div>
                    <div className='related-card-main' >
                        <h3 style={contentStyle}>
                            <div className="related-card"></div>
                        </h3>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Postrelated