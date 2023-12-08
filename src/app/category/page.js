"use client";
import CategoryCard from "@/components/categoryPage/categoryCard";
import React, { useState } from "react";
import styles from "./category.module.scss";
import { Pagination } from "antd";
import Hero from "@/components/categoryPage/Hero";

const page = () => {
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

  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayPosts = posts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  return (
    <div>
      <Hero />
      <div className={styles["my-container"]}>
        <div className={styles["card"]}>
          {displayPosts.map((post, index) => (
            <CategoryCard post={post} key={index} />
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
