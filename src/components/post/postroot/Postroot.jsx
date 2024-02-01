'use client'
import React, { useEffect, useState } from 'react'
import Postcontent from '../postcontent/Postcontent';
import Postrelated from '../postrelated/Postrelated';
import Postheader from '../postheader/Postheader';
import Postcomments from '../postcoments/Postcomments';
import Writemessage from '../writemessage/Writemessage';
import Navbar from '@/components/common/navbar/Navbar';
import { useParams , usePathname } from 'next/navigation';
import { useGetCommentsByPostID, useGetPostByID, useGetPostsByCategory } from '@/app/api/blog';
import Fotter from '@/components/common/fotter/Fotter';
import { NextSeo } from "next-seo";


const Postroot = () => {

    const currentPath = usePathname();
    const params = useParams();
    const { id } = params;
    const { post, postLoading } = useGetPostByID(id);
    const { posts, postsLoading } = useGetPostsByCategory(post?.category?._id);
    const { comments, commentsLoading } = useGetCommentsByPostID(id);
    const [comment, setComments] = useState(comments || [])
    useEffect(() => {
        setComments(comments)
    }, [comments])

    const [seo, setSeo] = useState({
        title: 'Blog View Page',
        description: 'Description of your page for search engines.',
        openGraph: {
          title: 'Your Open Graph Title',
          description: 'blog view page of frugal male fashion blog.',
          url: 'https://frugalmalefashionblog.com/',
          type: 'website',
        },
      })

    useEffect(()=>{
        setSeo({
            title: post?.title,
            description: post?.description,
            openGraph: {
              title: 'Your Open Graph Title',
              description: 'blog view page of frugal male fashion blog.',
              url: 'https://frugalmalefashionblog.com/',
              type: 'website',
            },
        })
    }, [post])

    return (
        <>
        <NextSeo {...seo} />
            <Navbar />
            <Postcontent post={post} id={id} />
            <Postrelated posts={posts} />
            <Postheader post={post} />
            <Postcomments comments={comment} id={id} setComments={setComments} />
            <Writemessage id={id} comments={comment} setComments={setComments} />
            <Fotter />
        </>
    )
}

export default Postroot