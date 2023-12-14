"use client";
import CategoryCard from "@/components/categoryPage/categoryCard";
import React, { useEffect, useState } from "react";
import styles from "./category.module.scss";
import { Pagination } from "antd";
import Hero from "@/components/categoryPage/Hero";
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
      description:
        "This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Sports Blog",
      description:
        "This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Education Blog",
      description:
        "This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "My Blog",
      description:
        "This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Your Blog",
      description:
        "This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "All is Good",
      description:
        "This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Spmething",
      description:
        "This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Hamming",
      description:
        "This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Your Blog",
      description:
        "This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "All is Good",
      description:
        "This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Spmething",
      description:
        "This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Hamming",
      description:
        "This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Spmething",
      description:
        "This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
    {
      title: "Hamming",
      description:
        "This is description if the Blog. This is description if the Blog This is description if the Blog",
      date: "2 May, 2023",
    },
  ];

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

  const CategoryCard = ({ post }) => {
    const { title, description, date, author, image } = post;
    return (
      <div className={styles1["hotle-search-results-wrapper"]}>
        <div className={styles1["bg-img-wrapper"]}>
          <Image
            src={`${API}/${image}`}
            // layout="fill" // or "responsive" depending on your use case
            objectFit="cover"
            alt=""
            placeholder="blur"
            blurDataURL="https://picsum.photos/640/360"
            width={300}
            height={100}
          />
        </div>
  
        <div className={styles1["search-results-content-wrapper"]}>
          <div className={styles1["hotel-name-wrapper"]}>
            <div className={styles1["hotel-name-container"]}>
              <div className={styles1["hotel-name"]}>{truncateText(title, 25)}</div>
            </div>
            <div className={styles1["trip-card"]}>
              {/* <Image src={""} alt="" /> */}
            </div>
          </div>
          <div className={styles1["rating-wrapper"]}>
            <div className={styles1["map-name-container"]}>
              <div className={styles1["map-container"]}>{/* <MapSVG /> */}</div>
              <span className={styles1["rating-content"]} title={"address"}>
                {truncateText(description, 50)}
              </span>
            </div>
          </div>
          <div className={styles1["info-wrapperr"]}>
            <div className={styles1["date-wrapper"]}>
              <div className={styles1["date-wrapper-item"]}>
                <span>{date}</span>
              </div>
              <div className={styles1["date-wrapper-item"]}>
                {/* <span>{2}</span> */}
              </div>
            </div>
          </div>
          <div className={styles1["total-price"]}>{""}</div>
          <div className={styles1["bottom-tab-wrapper"]}>
            <div className={styles1["name"]}>
              <div>{`${author?.firstname + " " + author?.lastname}`}</div>
            </div>
  
            <button
              className={styles1["book-now-btn"]}
              //   onClick={handleViewClick}
            >
              View
            </button>
          </div>
        </div>
      </div>
    );
  };


  return (
    <div>
      <Hero />
      <div className={styles["my-container"]}>
        <div className={styles["card"]}>
          {displayPosts.map((post, index) => (
            <React.Fragment key={index}>
              {CategoryCard({post: post})}
            </React.Fragment>
          ))}
        </div>
        <div className={styles["side-content"]}>Ammar</div>
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
