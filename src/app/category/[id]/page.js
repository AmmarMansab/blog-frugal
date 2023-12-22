"use client";
import CategoryCard from "@/components/categoryPage/categoryCard";
import React, { useEffect, useState } from "react";
import styles from "./category.module.scss";
import { Pagination } from "antd";
import Hero from "@/components/categoryPage/Hero";
import Navbar from "@/components/common/navbar/Navbar";
import Fotter from "@/components/common/fotter/Fotter";
import { CiSearch } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import styles1 from "../../../components/categoryPage/category.module.scss";
import Image from "next/image";
import { useParams } from "next/navigation";
import axios from 'axios'


const page = () => {

  const params = useParams();
  const { id } = params

  const [recentPosts, setRecentPosts] = useState([]);


  const API = "https://server.blog.digiunction.com";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse] =
          await Promise.all([
            axios.get(`${API}/api/post/category/${id}?page=0`),
          ]);

        setRecentPosts(postsResponse.data?.posts);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (typeof window !== "undefined") {
      fetchData();
    }
  }, [id]); // Empty dependency array ensures the effect runs only once
  const pageSize = 8; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const posts = [
    {
      title: "Fashion Blog",
      img: 'https://images.unsplash.com/photo-1703028408833-ff4033ce37ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
      description:
        "This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Sports Blog",
      img: 'https://images.unsplash.com/photo-1703028408833-ff4033ce37ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
      description:
        "This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Education Blog",
      img: 'https://images.unsplash.com/photo-1703028408833-ff4033ce37ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
      description:
        "This is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "My Blog",
      img: 'https://images.unsplash.com/photo-1703028408833-ff4033ce37ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
      description:
      "This is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Fashion Blog",
      img: 'https://images.unsplash.com/photo-1703028408833-ff4033ce37ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
      description:
      "This is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Sports Blog",
      img: 'https://images.unsplash.com/photo-1703028408833-ff4033ce37ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
      description:
      "This is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Education Blog",
      img: 'https://images.unsplash.com/photo-1703028408833-ff4033ce37ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
      description:
      "This is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "My Blog",
      img: 'https://images.unsplash.com/photo-1703028408833-ff4033ce37ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
      description:
      "This is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Fashion Blog",
      img: 'https://images.unsplash.com/photo-1703028408833-ff4033ce37ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
      description:
      "This is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Sports Blog",
      img: 'https://images.unsplash.com/photo-1703028408833-ff4033ce37ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
      description:
      "This is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Education Blog",
      img: 'https://images.unsplash.com/photo-1703028408833-ff4033ce37ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
      description:
      "This is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "My Blog",
      img: 'https://images.unsplash.com/photo-1703028408833-ff4033ce37ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
      description:
      "This is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Fashion Blog",
      img: 'https://images.unsplash.com/photo-1703028408833-ff4033ce37ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
      description:
      "This is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Sports Blog",
      img: 'https://images.unsplash.com/photo-1703028408833-ff4033ce37ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
      description:
      "This is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Education Blog",
      img: 'https://images.unsplash.com/photo-1703028408833-ff4033ce37ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
      description:
      "This is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "My Blog",
      img: 'https://images.unsplash.com/photo-1703028408833-ff4033ce37ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
      description:
      "This is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the BlogThis is description if the Blog. This is description if the Blog This is description if the Blog This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },

  ];

  const tags = [
    {
      title: 'Fashion',
    },
    {
      title: 'Trevaling',
    },
    {
      title: 'Education',
    },
    {
      title: 'Science',
    },
    {
      title: 'Lands',
    },
  ]

  const totalPosts = recentPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayPosts = recentPosts?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const truncateText = (text, maxLength) => {
    return text?.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const CategoryCard = ({ post, index }) => {
    const { title, description, date, author, img } = post;
    return (
      <>



        <div className={` ${styles['full-card']}`} >
              <div className={`${styles['full-card-a']}`} ></div>
              <div className={`${styles['full-card-b']}`} >
                <h1>{truncateText(title, 20)}</h1>
                <p>{truncateText(description, 200)}</p>
              </div>
        </div>

        {/* <div className={` shadow-md ${styles['cate-cart']}`} >
          <div className={`${styles['cate-cart-img']}`} style={{ backgroundImage: `url(${img})` }} ></div>
          <div className={`${styles['cate-cart-content']}`} >
            <h1>{truncateText(title, 20)}</h1>
            <p>{truncateText(description, 20)}</p>
          </div>
        </div> */}
      </>
    );
  };


  return (
    <div>
      <Hero />
      <div className={styles["my-container"]}  >
        <div className={` ${styles['grid-main-container']} `}>
          {/* <div className={`${styles['grid-main']} justify-center items-center flex-col flex  sm:justify-center sm:items-center sm:flex-col lg:grid xl:grid md:grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3`}>
            {posts.map((post, index) => (
              <React.Fragment key={index}>
                {CategoryCard({ post: post })}
              </React.Fragment>
            ))}
          </div> */}
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 lg:grid-cols-1 " >
          {posts.map((post, index) => (
              <React.Fragment key={index}>
                {CategoryCard({ post: post })}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className={styles["side-content"]}>

          <div className={styles["side-search"]}>
            <input placeholder="Search Related Tags ...." /><BsSearch style={{ marginLeft: '10px' }} />
          </div>

          <div className={`${styles['side-tag-main']}`} >
            {
              tags.map((itemes) => {
                const { title } = itemes
                return (
                  <>
                    <div className={` ${styles['side-tag']}`} >{title}</div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={totalPosts}
        onChange={handlePageChange}
        style={{
          marginTop: "0px",
          textAlign: "center",
          backgroundColor: "antiquewhite",
        }}
      />
    </div>
  );
};

export default page;
