"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./category.module.scss";
import { Pagination } from "antd";
import Hero from "@/components/categoryPage/Hero";
import { BsSearch } from "react-icons/bs";
import "../../../components/Home/tlp/Tlp.css"

import { useGetPostsByCategory } from "../../api/blog";
import Fotter from "@/components/common/fotter/Fotter";
import Navbar from "@/components/common/navbar/Navbar";
import { Spin } from "antd";
import useNavi from "@/utils/hooks/useNavi";
import { usePathname, useParams } from "next/navigation";
import { sliceText } from "@/utils/Textslice";
const Category = () => {
  const { handleNavigation } = useNavi();

  const params = useParams();
  const { id } = params;
  const [page, setPage] = useState(0);
  const { posts: recentPosts, postsLoading, uniqueTags, count } = useGetPostsByCategory(id, page);

  const API = "https://server.blog.digiunction.com";

  const pageSize = 7; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(0);

  const totalPosts = count//newrecentPosts?.length;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setPage(page-1)
    // console.log(page)
  };

  let isSpecialCard;

  const CategoryCard = ({ post, index }) => {
    isSpecialCard = index % 10 === 0;
    const { title, description, updatedAt, author, image, _id } = post;
    return (
      <>
        {isSpecialCard ? (
          <>
            <div
              className={` sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 `}
              onClick={() => handleNavigation(`/post/${_id}`)}
            >
              <div
                style={{ backgroundColor: "var(--sky)" }}
                className={` shadow-md min-h-[350px] max-h-full mb-8 flex justify-around items-center rounded-10 xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col ${styles["special-card-cate"]}`}
              >
                <div
                  style={{ backgroundImage: `url(${API + image})` }}
                  className={`${styles["full-card-a"]}`}
                ></div>
                <div className={`${styles["full-card-b"]}`}>
                  <p className={`${styles["full-heading"]}`}>
                    {sliceText(title, 100)}
                  </p>
                  <p>{sliceText(description, 350)}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 gap-2" onClick={() => handleNavigation(`/post/${_id}`)} style={{marginBottom: "20px"}}>
              <div className={`shadow-md p-4 bg-white rounded-lg cursor-pointer`} style={{ backgroundColor: '#ebf9fa', height: '100%' }}>
                <div className={`${styles["cate-cart-img"]}`} style={{ backgroundImage: `url(${API + image})` }}></div>
                <div className={`mt-4 ${styles["cate-cart-content"]} `}>
                  <h1 className="text-xl font-semibold mb-2">{sliceText(title, 45)}</h1>
                  <p className="text-sm text-gray-600">{sliceText(description, 110)}</p>
                </div>
              </div>
              </div>
          </>
        )}
      </>
    );
  };

  const tags = [
    {
      title: "Fashion",
    },
    {
      title: "Trevaling",
    },
    {
      title: "Education",
    },
    {
      title: "Science",
    },
    {
      title: "Lands",
    },
  ];
  const [tagPosts, setTagPosts] = useState([]);
  const handleTagClick = useCallback(
    async (title) => {
      try {
        // Make API call
        const response = await fetch(
          `https://server.blog.digiunction.com/api/post/by-tag/${title}?page=${0}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        // Parse JSON response
        const data = await response.json();

        // Update state with fetched data
        setP(data?.posts);
      } catch (error) {
        console.error("Error:", error);
      }
    },
    [0]
  );

  return (
    <div className="parent-of-all">
      <Navbar />
      <Hero data={recentPosts} />
      <div className={styles["my-container"]}>
        <div className={` ${styles["grid-main-container"]} `}>
          <div className={`${styles["grid-main"]} ${"container"}`}>
            <div className="grid grid-cols-12  md:gap-8 ">
              {recentPosts.length > 0 ? (
                recentPosts?.map((post, index) => (
                  <React.Fragment key={index}>
                    {CategoryCard({ post: post, index: index })}
                  </React.Fragment>
                ))
              ) : (
                <div className={` ${styles["skeleton-main-cate"]} grid grid-cols-12 `}>
                    <div
                      className={` ${styles["col-ske"]} col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4 `}
                    >
                      <div className="skeleton">
                        <div className="skeleton__Bigimg"></div>
                      </div>
                    </div>
                    <div
                      className={` ${styles["col-ske"]}  col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4 `}
                    >
                      <div className="skeleton">
                        <div className="skeleton__Bigimg"></div>
                      </div>
                    </div>
                    <div
                      className={`${styles["col-ske"]}  col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4 `}
                    >
                      <div className="skeleton">
                        <div className="skeleton__Bigimg"></div>
                      </div>
                    </div>
                    <div
                      className={` ${styles["col-ske"]} col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4 `}
                    >
                      <div className="skeleton">
                        <div className="skeleton__Bigimg"></div>
                      </div>
                    </div>
                    <div
                      className={` ${styles["col-ske"]} col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4 `}
                    >
                      <div className="skeleton">
                        <div className="skeleton__Bigimg"></div>
                      </div>
                    </div>
                    <div
                      className={` ${styles["col-ske"]} col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4 `}
                    >
                      <div className="skeleton">
                        <div className="skeleton__Bigimg"></div>
                      </div>
                    </div>
                    <div
                      className={` ${styles["col-ske"]} col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4 `}
                    >
                      <div className="skeleton shadow-lg ">
                        <div className="skeleton__Bigimg"></div>
                      </div>
                    </div>
                    <div
                      className={` ${styles["col-ske"]} col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4 `}
                    >
                      <div className="skeleton shadow-lg ">
                        <div className="skeleton__Bigimg"></div>
                      </div>
                    </div>
                    <div
                      className={` ${styles["col-ske"]} col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4 `}
                    >
                      <div className="skeleton shadow-lg ">
                        <div className="skeleton__Bigimg"></div>
                      </div>
                    </div>
                    <div
                      className={` ${styles["col-ske"]} col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4 `}
                    >
                      <div className="skeleton shadow-lg ">
                        <div className="skeleton__Bigimg"></div>
                      </div>
                    </div>
              
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles["side-content"]}>
          <div className={styles["side-search"]}>
            <input placeholder="Search Related Tags ...." />
            <BsSearch style={{ marginLeft: "10px" }} />
          </div>
          <div className={`${styles["side-tag-main"]}`}>
            {uniqueTags?.length > 0 ? (
              uniqueTags?.map((title) => {
                return (
                  <div key={title} className={` ${styles["side-tag"]}`} onClick={() => handleTagClick(title)}>
                    {title}
                  </div>
                );
              })
            ) : (
              <div className={`${styles["side-tag-spin"]}`}>
                <Spin size="medium" />
              </div>
            )}
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
          backgroundColor: "white",
        }}
      />
      <Fotter />
    </div>
  );
};

export default Category;
