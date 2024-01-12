'use client'
import React from 'react'
import './Starthere.css'
import {
    useGetTopViewedPosts,
    useGetPosts,
    useGetTopSharedPosts,
    useGetTopLikedPosts,
} from "@/app/api/blog";
import '../../../components/Home/tlp/Tlp.css'
import { useRouter } from "next/navigation";
import useNavi from '@/utils/hooks/useNavi';


const Starthere = () => {

    const {handleNavigation} = useNavi()
    const { posts: topViewedData, postsLoading: a } = useGetTopViewedPosts();
    const { posts: recentPosts, postsLoading: b } = useGetPosts();
    const { posts: topSharedData, postsLoading: c } = useGetTopSharedPosts();
    const { posts: topLikedData, postsLoading: d } = useGetTopLikedPosts();

    const API = "https://server.blog.digiunction.com";

    return (
        <>
            <div className='here-main' >
                <div class=" flex justify-center items-center">
                    <h1 className=' here-main-heading mt-14 mb-14 font-bold text-4xl'  >Dress Sharp And Feel Confident Without Tons Of Clothes</h1>
                </div>
                <div class=" container  max-w-80 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                    <div className="pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 flex justify-start items-start ">
                        <img className='here-img mb-14' src='https://images.unsplash.com/photo-1682695796497-31a44224d6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' />
                    </div>
                    <div className="pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
                        <p className='here-p1 text-2xl mb-4 font-medium tracking-wide' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, </p>
                        <p className='here-p2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, cupiditate labore, optio eum pariatur voluptas. Quidem ipsam saepe odio placeat velit, blanditiis est eius.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, cupiditate labore, optio eum pariatur voluptas. Quidem ipsam saepe odio placeat velit, blanditiis est eius.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, cupiditate labore, optio eum pariatur voluptas. Quidem ipsam saepe odio placeat velit, blanditiis est eius.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, cupiditate labore, optio eum pariatur voluptas. Quidem ipsam saepe odio placeat velit, blanditiis est eius.
                        </p>
                        <br />
                        <p className='here-p2' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, cupiditate labore, optio eum pariatur voluptas. Quidem ipsam saepe odio placeat velit, blanditiis est eius.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container max-w-80 mx-auto flex starthere-con ">
                <div class=" pr-2 pb-0 rounded-md starthere-p w-1/2 ">
                    <h1 className='here-heading' >Latest</h1>
                    <div class="flex flex-col justify-start items-start">
                        {
                            recentPosts.length > 0 ?
                                recentPosts.map((items,index) => {
                                    const { _id, image, title, description } = items
                                    if(index===0){
                                        return (
                                            <>
                                                <div onClick={() => handleNavigation(`/post/${_id}`)}  class="  mt-8  here-card h-max-content w-95 flex justify-center items-center flex-col ">
                                                    <img style={{ boxShadow: '0px 7px 23px -8px rgba(0,0,0,0.75);' }} src={API + image} alt="" />
                                                    <h2>{title}</h2>
                                                    <p>{description}</p>
                                                </div>
                                            </>
                                        )
                                    }
                                    else{
                                        return
                                    }
                                }) :
                                <div className='skeleton-main-cate-related  container mb-6 '>
                                    <div className="row" >
                                        <div className='col-ske col-sm-12 col-md-12 col-lg-12 col-xl-12 '>
                                            <div className="skeleton">
                                                <div className="skeleton__Bigimg-sh-l-t shadow-sm ">
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-ske col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-6 '>
                                            <div className="skeleton">
                                                <div className="skeleton__Bigimg-sh-l-b shadow-sm ">
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-ske col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-6'>
                                            <div className="skeleton">
                                                <div className="skeleton__Bigimg-sh-l-mb shadow-sm ">
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-ske col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                            <div className="skeleton">
                                                <div className="skeleton__Bigimg-sh-l-mb shadow-sm ">
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-ske col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                            <div className="skeleton">
                                                <div className="skeleton__Bigimg-sh-l-mb shadow-sm ">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div  class=" pr-2 pb-0 rounded-md starthere-p w-1/2  ">
                    <h1 className='here-heading'  >Trending</h1>
                    {
                        topViewedData.length > 0 ?
                            // data.map((items) => {
                            topViewedData.map((items,index) => {
                                const { _id, image, title, description } = items
                                if(index <= 3){
                                    return (
                                        <>
                                            <div onClick={() => handleNavigation(`/post/${_id}`)} class="  mt-8  here-card-2 h-max-content w-95 flex justify-start items-start  ">
                                                <div style={{backgroundImage:`url(${API + image})`, boxShadow: '0px 7px 23px -8px rgba(0,0,0,0.75);'}} className="viewimg"></div>
                                                <h2 >{title}</h2>
                                            </div>
                                        </>
                                    )
                                }
                                else{
                                    return
                                }
                            }) :
                            <>
                                {/* // 1 */}
                                <div className='skeleton-main-cate-related  container mt-6'>
                                    <div className="row" >
                                        <div className='col-ske col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                                            <div className="skeleton">
                                                <div className="skeleton__Bigimg-sh-r-t shadow-sm ">
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-ske col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                                            <div className="skeleton">
                                                <div className="skeleton__Bigimg-sh-r-b shadow-sm ">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* // 2nd */}
                                <div className='skeleton-main-cate-related  container mt-6 mb-6 '>
                                    <div className="row" >
                                        <div className='col-ske col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                                            <div className="skeleton">
                                                <div className="skeleton__Bigimg-sh-r-t shadow-sm ">
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-ske col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                                            <div className="skeleton">
                                                <div className="skeleton__Bigimg-sh-r-b shadow-sm ">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default Starthere