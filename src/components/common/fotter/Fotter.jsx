import React from 'react'
import './Fotter.css'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDribbbleSquare } from "react-icons/fa";
// import img from 'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8';

const Fotter = () => {
    return (
        <>
            <div class=" pt-8  container container-fotter max-w-100 mx-auto ">
                <div class=" container max-w-80 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {/* //// */}
                    <div class=" pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 flex flex-col justify-center items-center">
                        <div className="fotter-logo flex justify-center items-center ">Digiunction</div>
                        <p className='fotter-logo-p' >Digiunction is Premium Gossip Magazine/Blog Template, aliquam neque nunc, vestibulum et aliquet.</p>
                        <div className="fotter-social flex flex-col justify-center items-center">
                            <h3 className='content-white' >Social Icons</h3>
                            <div className="fotter-icons flex justify-between items-center ">
                                <RiInstagramFill style={{ color: 'white' }} />
                                <FaFacebook style={{ color: 'white' }} />
                                <FaSquareXTwitter style={{ color: 'white' }} />
                                <FaDribbbleSquare style={{ color: 'white' }} />
                            </div>
                        </div>
                    </div>
                    {/* //// */}
                    <div class="pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 flex flex-col justify-center items-center">
                        <div className="fotter-cate flex flex-col justify-center items-center">
                            <h3 className='content-white' >Category</h3>
                            <div className="fotter-all-cate flex justify-center items-center mt-4 ">
                                <p className='content-white'>Fashion</p>
                                <p className='content-white'>Traveling</p>
                                <p className='content-white'>Desiging</p>
                                <p className='content-white'>Tourism</p>
                                <p className='content-white'>Technology</p>
                            </div>
                        </div>
                        <div className="fotter-cate flex flex-col justify-center items-center">
                            <h3 className='content-white'>Category</h3>
                            <div className="fotter-all-cate flex justify-center items-center mt-4 ">
                                <p className='content-white'>Latest</p>
                                <p className='content-white'>Trending</p>
                                <p className='content-white'>Papular</p>
                                <p className='content-white'>Most Viewd</p>
                            </div>
                        </div>
                    </div>
                    {/* //// */}
                    <div class=" pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 flex flex-col justify-center items-center">
                        <div className="fotter-card-main h-175 w-full  flex justify-center items-center ">
                            <div className='w-1/2 h-full relative' >
                                <div className="fotter-img"></div>
                                <div className="overlay"></div>
                            </div>
                            <div className='w-1/2 h-full relative' >
                                <div className="fotter-img"></div>
                                <div className="overlay"></div>
                            </div>
                        </div>
                        <div className="fotter-card-main h-175 w-full flex justify-center items-center ">
                            <div className='w-1/2 h-full relative' >
                                <div className="fotter-img"></div>
                                <div className="overlay"></div>
                            </div>
                            <div className='w-1/2 h-full relative' >
                                <div className="fotter-img"></div>
                                <div className="overlay"></div>
                            </div>
                        </div>
                    </div>
                    {/* //// */}
                </div>
                <div className='container fotter-end max-w-100 mx-auto flex justify-around items-center ' >
                    <h1 className='p-2' >All Reserved By Digiunciton</h1>
                    <div className="fotter-nav h-full  flex justify-between items-center">
                        <p>Contanct</p>
                        <p>Contanct</p>
                        <p>Contanct</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fotter