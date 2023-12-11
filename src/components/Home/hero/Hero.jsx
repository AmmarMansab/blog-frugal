'use client'
import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './Hero.css'; // Import your CSS file

const contentStyle = {
    margin: 0,
    height: 'max-content',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'transparent',
};


const Hero = () => {
    const carouselData = [
        { id: 1, title: '1', by: 'admin', category: 'treveling', img: 'https://images.unsplash.com/photo-1682687982134-2ac563b2228b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
        { id: 2, title: '2', by: 'admin', category: 'treveling', img: 'https://images.unsplash.com/photo-1682687982134-2ac563b2228b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
        { id: 3, title: '3', by: 'admin', category: 'treveling', img: 'https://images.unsplash.com/photo-1682687982134-2ac563b2228b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
        { id: 4, title: '4', by: 'admin', category: 'treveling', img: 'https://images.unsplash.com/photo-1682687982134-2ac563b2228b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
    ];

    const carouselRef = useRef(null);

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    };

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    const nextSlide = () => {
        carouselRef.current.next();
    };

    const prevSlide = () => {
        carouselRef.current.prev();
    };

    return (
        <div className="carousel-container">
            <Carousel afterChange={(currentSlide) => onChange(currentSlide)} ref={carouselRef}>
                {carouselData.map((item) => (
                    <div key={item.id}  >
                        <div style={contentStyle}>
                            <div className='hero-main' style={{ backgroundImage: `url(${item.img})` }} >
                                <div className="hero-overlay"></div>
                                <div className="hero-content">
                                    <div className="hero-line"></div>
                                    <div className='hero-content-heading'>
                                        {truncateText('Lorem ipsum dolor sit amet consectetur adipisicing elit.', 50)}
                                    </div>
                                    <div className="hero-content-type">
                                        By Admin / 19 Dec 2001 / Treveling
                                    </div>
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
    );
};

export default Hero;
