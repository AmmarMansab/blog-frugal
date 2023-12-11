import React from 'react'
import './Tlp.css'

const Tlp = () => {

    const carouselData = [
        { id: 1, content: '1', img: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
        { id: 2, content: '2', img: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
        { id: 3, content: '3', img: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
        { id: 4, content: '4', img: 'https://images.unsplash.com/photo-1683009680116-b5c04463551d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8', },
    ];

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    };
    return (
        <>
            <div class=" container border max-w-80 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div class=" pt-8 lg:pr-4 xl:pr-4 md:pr-4 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
                    <div className="card-tlp">
                        <div className="overlay"></div>
                        <div className='cate-background' style={{ backgroundImage: `url(${carouselData[0].img})` }} ></div>
                        <div className="content-tlp">
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
                <div class=" pt-8 xl:pr-4 lg:pr-4 xl:pl-4 lg:pl-4 md:pl-4 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
                    <div className="card-tlp">
                        <div className="overlay"></div>
                        <div className='cate-background' style={{ backgroundImage: `url(${carouselData[0].img})` }} ></div>
                        <div className="content-tlp">
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
                <div class=" pt-8 xl:pl-4 lg:pl-4 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
                    <div className="card-tlp">
                        <div className="overlay"></div>
                        <div className='cate-background' style={{ backgroundImage: `url(${carouselData[0].img})` }} ></div>
                        <div className="content-tlp">
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
            {/* //// */}
            <div class=" mt-4 container border max-w-100 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                <div className="bg-blue-500 pl-0 pr-0 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
                    <div className="paralex">
                        <div className="overlay"></div>
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
            {/* //// */}
            <div class=" mt-4 container border max-w-80 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                <div className="pl-0 pr-0 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
                    <div className="review">
                        {/* <div className="percentage flex justify-center items-center "> 80% </div> */}
                        <div className='cate-background-tlp' style={{ backgroundImage: `url(${carouselData[0].img})` }} ></div>
                        <div className="overlay"></div>
                        <div className="content-tlp">
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
        </>
    )
}

export default Tlp