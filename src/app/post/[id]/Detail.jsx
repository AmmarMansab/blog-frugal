"use client";
import Fotter from "@/components/common/fotter/Fotter";
import Postcomments from "@/components/post/postcoments/Postcomments";
import Postcontent from "@/components/post/postcontent/Postcontent";
import Postheader from "@/components/post/postheader/Postheader";
import Postnext from "@/components/post/postnext/Postnext";
import Postrelated from "@/components/post/postrelated/Postrelated";
import Writemessage from "@/components/post/writemessage/Writemessage";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useGetPostsByCategory, useGetPostByID, useGetCommentsByPostID } from "../../../app/api/blog";
import Navbar from "@/components/common/navbar/Navbar";
import { useEffect, useState } from "react";

const page = () => {
  const params = useParams();
  const { id } = params;

  const {post, postLoading} = useGetPostByID(id);
  
  const { posts, postsLoading } = useGetPostsByCategory(post?.category?._id);

  const {comments, commentsLoading} = useGetCommentsByPostID(id);

  const [comment, setComments] = useState(comments || [])
  useEffect(()=>{
    setComments(comments)
  },[comments])

  return (
    <>
    <div className='parent-of-all' >
      <Navbar/>
      <Postheader post={post} />
      <Postcontent post={post} />
      <Postrelated posts={posts} />
      <Postcomments comments={comment}/>
      <Writemessage id={id} comments={comment} setComments={setComments}/>
      <Fotter />
    </div>
    </>
  );
};

export default page;
