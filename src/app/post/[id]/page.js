// 'use client'

import Fotter from "@/components/common/fotter/Fotter";
import Postcomments from "@/components/post/postcoments/Postcomments";
import Postcontent from "@/components/post/postcontent/Postcontent";
import Postheader from "@/components/post/postheader/Postheader";
import Postnext from "@/components/post/postnext/Postnext";
import Postrelated from "@/components/post/postrelated/Postrelated";
import Writemessage from "@/components/post/writemessage/Writemessage";
import axios from "axios";
import Image from "next/image";
// import { useParams } from 'next/navigation'

import Detail from './Detail.jsx'
// import { useEffect, useState } from "react";

export async function generateMetadata({ params }, parent) {
  console.log('generateMetadata called:', params);

  return {
    title: "New Title 011",
    description: "New Description 100",
    openGraph: {
      images: ['/some-specific-page-image.jpg'],
    },
  };
}


const page = () => {
  // const params = useParams();
  // const { id } = params

  // const [post, setPost] = useState({});
  // const [catPosts, setCatPosts] = useState([]);

  // const API = "https://server.blog.digiunction.com";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Make the API call only once and store the data
  //       const response = await axios.get(
  //         `https://server.blog.digiunction.com/api/post/get/${id}`
  //       );
  //       setPost(response.data); // Assuming the response is an array of data
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   if (typeof window !== "undefined") {
  //     // Check if running on the client side
  //     fetchData();
  //   }
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Make the API call only once and store the data
  //       const response = await axios.get(
  //         `https://server.blog.digiunction.com/api/post/category/${post?.category?._id}?page=0`
  //       );
  //       setCatPosts(response.data?.posts); // Assuming the response is an array of data
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   if (typeof window !== "undefined") {
  //     // Check if running on the client side
  //     fetchData();
  //   }
  // }, [post]);

  
  return (
    <>
      <div className='parent-of-all' >
        {/* <Postheader post={post}/>
        <Postcontent post={post}/>
        <Postrelated posts={catPosts}/>
        <Postcomments />
        <Writemessage />
        <Fotter /> */}
        {/* <Detail params={id}/> */}
      </div>
    </>
  )
}

export default page