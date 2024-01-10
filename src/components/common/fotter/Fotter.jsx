'use client'
import React from 'react'
import './Fotter.css'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDribbbleSquare } from "react-icons/fa";
import { useGetPosts } from '@/app/api/blog';
import { BiSolidRegistered } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { SiPinterest } from "react-icons/si";
import { FaReddit } from "react-icons/fa6";
// import img from 'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8';

const Fotter = () => {

    const router = useRouter()
    const { posts: recentPosts, postsLoading: b } = useGetPosts();
    // console.log(recentPosts, 'rrrr');
    const API = "https://server.blog.digiunction.com";
    const truncateText = (text, maxLength) => {
        return text?.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    };

    const handleNavigation = (route) => {
        router.push(route);
    };

    return (
        <>
            <div class=" pt-8 container container-fotter max-w-100 mx-auto ">
                <div class=" container fot-main mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                    {/* //// */}
                    <div class="pt-3 pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 flex flex-col justify-start items-center">
                        <div className="fotter-logo flex justify-center items-center ">Digiunction</div>
                        <p className='fotter-logo-p' >Digiunction is Premium Gossip Magazine/Blog Template, aliquam neque nunc, vestibulum et aliquet.</p>
                        <div className="fotter-social flex flex-col justify-center items-center">
                            <h3 className='content-white' >Social Icons</h3>
                            <div className="fotter-icons flex justify-between items-center ">
                                <RiInstagramFill style={{ color: 'white' }} />
                                <SiPinterest style={{ color: 'white' }} />
                                <FaSquareXTwitter style={{ color: 'white' }} />
                                <FaReddit style={{ color: 'white' }} />
                            </div>
                        </div>
                    </div>
                    {/* //// */}
                    <div class="pt-0 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 flex flex-col justify-start items-center">
                        <div className="fotter-cate flex flex-col justify-start items-center">
                            <h3 className=' text-center content-white' >Dressing Sharp, Made Simple</h3>
                            <p className='text-center text-white ' >
                                I’ve distilled the perfect casual wardrobe down to 11 essentials every Effortless Gent needs in his closet. They’re the basic ingredients of your wardrobe. Can I send you my list of essentials? 👇🏽
                            </p>
                            <form action="">
                                <input placeholder='Name' className='h-[35px] w-full mt-4 pl-4' type="text" />
                                <input placeholder='Email' className='h-[35px] w-full mt-4 pl-4' type="text" />
                                <button className='h-[35px] w-full mt-4 sub-btn-fot ' >Subscribe</button>
                                {/* <button className='h-[35px] w-full mt-4 sub-btn-fot ' >Subscribe</button> */}
                            </form>
                        </div>
                    </div>
                    {/* //// */}
                    {/* //// */}
                    <div class=" pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 flex flex-col justify-start items-center">
                        <div className="fotter-cate flex flex-col justify-start items-center">
                            <h3 className='content-white' >Affiliate / Legal Info</h3>
                            <div className='text-white text-center' >
                                Effortless Gent (EG) is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to
                            </div>
                            <div className='text-white text-center' >
                                EG also participates in affiliate programs with other sites. EG is compensated for referring traffic and business to these companies. This comes at no extra cost to you, the reader.
                            </div>
                        </div>
                    </div>
                    {/* //// */}
                    <div class="pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 flex flex-col justify-center items-center">
                        <div className="fotter-card-main h-175 w-full  flex justify-center items-center mt-8 ">
                            {
                                recentPosts[0] ?
                                    <div className='w-1/2 h-full relative cursor-pointer fot-recents ' onClick={() => handleNavigation(`/post/${recentPosts[0]?._id}`)} >
                                        <div style={{ backgroundImage: `url(${API + recentPosts[0]?.image})` }} className="fotter-img"></div>
                                        <div className="fot-content">
                                            <h5>{truncateText(recentPosts[0]?.title, 10)}</h5>
                                        </div>
                                        <div className="overlay"></div>
                                    </div>
                                    : ''
                            }
                            {
                                recentPosts[1] ?
                                    <div className='w-1/2 h-full relative cursor-pointer fot-recents ' onClick={() => handleNavigation(`/post/${recentPosts?.[1]?._id}`)} >
                                        <div style={{ backgroundImage: `url(${API + recentPosts[1]?.image})` }} className="fotter-img"></div>
                                        <div className="fot-content">
                                            <h5>{truncateText(recentPosts[1]?.title, 10)}</h5>
                                        </div>
                                        <div className="overlay"></div>
                                    </div>
                                    : ''
                            }
                        </div>
                        <div className="fotter-card-main h-175 w-full flex justify-center items-center ">
                            {
                                recentPosts[2] ?
                                    <div className='w-1/2 h-full relative cursor-pointer fot-recents ' onClick={() => handleNavigation(`/post/${recentPosts[2]?._id}`)} >
                                        <div style={{ backgroundImage: `url(${API + recentPosts[2]?.image})` }} className="fotter-img"></div>
                                        <div className="fot-content">
                                            <h5>{truncateText(recentPosts[2]?.title, 10)}</h5>
                                        </div>
                                        <div className="overlay"></div>
                                    </div>
                                    : ''
                            }
                            {
                                recentPosts[3] ?
                                    <div className='w-1/2 h-full relative cursor-pointer fot-recents ' onClick={() => handleNavigation(`/post/${recentPosts[3]?._id}`)} >
                                        <div style={{ backgroundImage: `url(${API + recentPosts[3]?.image})` }} className="fotter-img"></div>
                                        <div className="fot-content">
                                            <h5>{truncateText(recentPosts[3]?.title, 10)}</h5>
                                        </div>
                                        <div className="overlay"></div>
                                    </div>
                                    : ''
                            }
                        </div>
                    </div>
                    {/* //// */}
                </div>
                <div className='container fotter-end  mx-auto flex justify-start items-center ' >
                    <h1 className='pt-10 pl-16 flex  ' >Developed By <a href='https://www.digiunction.com/' >Digiunction</a><BiSolidRegistered className='ml-1' /> </h1>
                </div>
            </div>
        </>
    )
}

export default Fotter