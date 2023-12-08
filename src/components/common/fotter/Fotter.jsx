import React from 'react'
import './Fotter.css'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDribbbleSquare } from "react-icons/fa";

const Fotter = () => {
    return (
        <>
            <div class="bg-blue-500 container border max-w-100 mx-auto ">
                <div class=" container border max-w-80 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {/* //// */}
                    <div class="bg-blue-500 pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 flex flex-col justify-center items-center">
                        <div className="fotter-logo flex justify-center items-center ">Digiunction</div>
                        <p className='fotter-logo-p' >Digiunction is Premium Gossip Magazine/Blog Template, aliquam neque nunc, vestibulum et aliquet.</p>
                        <div className="fotter-social flex flex-col justify-center items-center">
                            <h3>Social Icons</h3>
                            <div className="fotter-icons flex justify-between items-center ">
                                <RiInstagramFill />
                                <FaFacebook />
                                <FaSquareXTwitter />
                                <FaDribbbleSquare />
                            </div>
                        </div>
                    </div>
                    {/* //// */}
                    <div class="bg-blue-500 pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 flex flex-col justify-center items-center">
                        <div className="fotter-cate flex flex-col justify-center items-center">
                            <h3>Category</h3>
                            <div className="fotter-all-cate flex justify-center items-center mt-4 ">
                                <p>Fashion</p>
                                <p>Traveling</p>
                                <p>Desiging</p>
                                <p>Tourism</p>
                                <p>Technology</p>
                            </div>
                        </div>
                        <div className="fotter-cate flex flex-col justify-center items-center">
                            <h3>Category</h3>
                            <div className="fotter-all-cate flex justify-center items-center mt-4 ">
                                <p>Latest</p>
                                <p>Trending</p>
                                <p>Papular</p>
                                <p>Most Viewd</p>
                            </div>
                        </div>
                    </div>
                    {/* //// */}
                    <div class="bg-blue-500 pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 flex flex-col justify-center items-center">
                        <div className="fotter-card-main h-175 w-full border border-red-500 flex justify-center items-center ">
                            <div className='w-1/2 h-full border border-green-500 relative' >
                                <div className="overlay"></div>
                            </div>
                            <div className='w-1/2 h-full border border-green-500 relative' >
                                <div className="overlay"></div>
                            </div>
                        </div>
                        <div className="fotter-card-main h-175 w-full border border-red-500 flex justify-center items-center ">
                            <div className='w-1/2 h-full border border-green-500 relative' >
                                <div className="overlay"></div>
                            </div>
                            <div className='w-1/2 h-full border border-green-500 relative' >
                                <div className="overlay"></div>
                            </div>
                        </div>
                    </div>
                    {/* //// */}
                </div>
                <div className='bg-blue-500 container border max-w-100 mx-auto flex justify-around items-center ' >
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