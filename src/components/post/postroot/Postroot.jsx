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

    return (
        <>
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