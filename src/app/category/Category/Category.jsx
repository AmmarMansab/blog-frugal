"use client";
import React, { useState } from "react";
import styles from "./category.module.scss";
import { Pagination } from "antd";
import Hero from "@/components/categoryPage/Hero";

import { useParams } from "next/navigation";
import { BsSearch } from "react-icons/bs";
import "../../../components/Home/tlp/Tlp.css"

import { useGetPostsByCategory } from "../../api/blog";
import Fotter from "@/components/common/fotter/Fotter";
import Navbar from "@/components/common/navbar/Navbar";
import { Spin } from "antd";
import useNavi from "@/utils/hooks/useNavi";
const Category = () => {
  const { handleNavigation } = useNavi();
  const params = useParams();
  const { id } = params;
  const [page, setPage] = useState(0);
  const { posts: recentPosts, postsLoading } = useGetPostsByCategory(id, page);

  let newrecentPosts = [...recentPosts, ...recentPosts];

  const API = "https://server.blog.digiunction.com";

  const pageSize = 7; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPosts = newrecentPosts?.length;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayPosts = newrecentPosts?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const truncateText = (text, maxLength) => {
    return text?.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
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
              className={`col-12 `}
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
                    {truncateText(title, 90)}
                  </p>
                  <p>{truncateText(description, 350)}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className="col-sm-12 col-md-6 col-lg-4 col-xl-4"
              onClick={() => handleNavigation(`/post/${_id}`)}
            >
              <div className={` shadow-md ${styles["cate-cart"]}`}>
                <div
                  className={`${styles["cate-cart-img"]}`}
                  style={{ backgroundImage: `url(${API + image})` }}
                ></div>
                <div className={`${styles["cate-cart-content"]}`}>
                  <h1>{truncateText(title, 20)}</h1>
                  <p>{truncateText(description, 20)}</p>
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
  return (
    <div className="parent-of-all">
      <Navbar />
      <Hero data={recentPosts} />
      <div className={styles["my-container"]}>
        <div className={` ${styles["grid-main-container"]} `}>
          <div className={`${styles["grid-main"]} ${"container"}`}>
            <div className="row ">
              {displayPosts.length > 0 ? (
                displayPosts.map((post, index) => (
                  <React.Fragment key={index}>
                    {CategoryCard({ post: post, index: index })}
                  </React.Fragment>
                ))
              ) : (
                <div className={` ${styles["skeleton-main-cate"]} container `}>
                  <div className="row">
                    <div
                      className={` ${styles["col-ske"]} col-ske col-sm-12 col-md-12 col-lg-4 col-xl-4`}
                    >
                      <div className="skeleton">
                        <div className="skeleton__Bigimg"></div>
                      </div>
                    </div>
                    <div
                      className={` ${styles["col-ske"]}  col-sm-12 col-md-12 col-lg-4 col-xl-4`}
                    >
                      <div className="skeleton">
                        <div className="skeleton__Bigimg"></div>
                      </div>
                    </div>
                    <div
                      className={`${styles["col-ske"]}  col-sm-12 col-md-12 col-lg-4 col-xl-4`}
                    >
                      <div className="skeleton">
                        <div className="skeleton__Bigimg"></div>
                      </div>
                    </div>
                    <div
                      className={` ${styles["col-ske"]} col-ske col-sm-12 col-md-12 col-lg-4 col-xl-4`}
                    >
                      <div className="skeleton">
                        <div className="skeleton__Bigimg"></div>
                      </div>
                    </div>
                    <div
                      className={` ${styles["col-ske"]} col-ske col-sm-12 col-md-12 col-lg-4 col-xl-4`}
                    >
                      <div className="skeleton">
                        <div className="skeleton__Bigimg"></div>
                      </div>
                    </div>
                    <div
                      className={` ${styles["col-ske"]} col-ske col-sm-12 col-md-12 col-lg-4 col-xl-4`}
                    >
                      <div className="skeleton">
                        <div className="skeleton__Bigimg"></div>
                      </div>
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
            {tags.length > 0 ? (
              tags.map((itemes) => {
                const { title } = itemes;
                return (
                  <div key={title} className={` ${styles["side-tag"]}`}>
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
