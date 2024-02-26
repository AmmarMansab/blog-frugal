// Import necessary libraries and components
"use client";
import React, { useState, useEffect, useRef } from "react";
import { Dropdown, Menu, Drawer } from "antd";
import { useGetCategories } from "@/app/api/category";
import useNavi from "@/utils/hooks/useNavi";
import Link from "next/link";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { RiInstagramFill } from "react-icons/ri";
import { SiPinterest } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import bLogo from "../../../images/blogo.svg";
import wLogo from "../../../images/wLogo.svg";
import Image from "next/image";

// Navbar component
const Navbar = () => {
  // Hooks and state variables
  const { handleNavigation } = useNavi();
  const { categories } = useGetCategories();
  const [currentScrollTop, setCurrentScrollTop] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const cate = categories?.map((item) => (
    <Menu.Item
      key={item._id}
      onClick={() => handleNavigation(`/category/${item._id}`)}
    >
      {item.name}
    </Menu.Item>
  ));

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const onClose = () => {
    setOpen(false);
  };

  // Render the Navbar component
  return (
    <>
      <nav
        className=" nav  z-0 relative shadow-lg transition-all duration-300"
        x-data="{open:false,menu:false, lokasi:false}"
      >
        <div className="relative w-[100%] z-10  shadow">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0" href="#">
                  <Image
                    src={bLogo}
                    alt="Frugal Male Fashion Blog"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="hidden lg:block lg:ml-2">
                  <div className="flex">
                    <Link
                      href="/"
                      prefetch={false}
                      className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Home
                    </Link>
                    <Link
                      href="/starthere"
                      prefetch={false}
                      className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Start Here
                    </Link>
                    <div className="ml-4  rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700">
                      <Dropdown
                        placement="bottomLeft"
                        arrow
                        overlay={<Menu>{cate}</Menu>}
                      >
                        <div className="mr-2 ml-2 pt-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700">
                          Category
                        </div>
                      </Dropdown>
                    </div>
                    {/* <Link href='/contact' className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700">Contact</Link> */}
                    <Link
                      href="/contact"
                      prefetch={false}
                      className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex px-2 lg:ml-6 lg:justify-end">
                {/* <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-center"> */}
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <form method="get" action="#" className="relative z-50">
                    <div class="flex justify-center items-center row">
                      <RiInstagramFill
                        style={{
                          color: "black",
                          fontSize: "27px",
                          marginLeft: "10px",
                          cursor: "pointer",
                        }}
                      />
                      <a
                        href="https://www.pinterest.com/FMFblog"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiPinterest
                          style={{
                            color: "black",
                            fontSize: "27px",
                            marginLeft: "10px",
                            cursor: "pointer",
                          }}
                        />
                      </a>
                      <FaSquareXTwitter
                        style={{
                          color: "black",
                          fontSize: "27px",
                          marginLeft: "10px",
                          cursor: "pointer",
                        }}
                      />
                      <FaReddit
                        style={{
                          color: "black",
                          fontSize: "27px",
                          marginLeft: "10px",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex lg:hidden">
                <button
                  onClick={showDrawer}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                  aria-label="Main menu"
                  aria-expanded="false"
                >
                  <FiMenu className="text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Drawer
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"left"}
      >
        <div class="flex justify-center items-start flex-col h-200">
          <div className="w-full flex justify-end">
            <RxCross1
              onClick={onClose}
              class="text-black cursor-pointer mb-8"
            />
          </div>
          <Image
            src={bLogo}
            alt="Description of the image"
            width={100}
            height={100}
          />
          <Link
            href="/"
            prefetch={false}
            className="w-full pl-4 pb-2 pt-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
            style={{ color: "black" }}
          >
            Home
          </Link>
          <Link
            href="/starehere"
            prefetch={false}
            className="w-full pl-4 pb-2 pt-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
            style={{ color: "black" }}
          >
            Start Here
          </Link>
          <Link
            href="/contact"
            prefetch={false}
            className=" w-full pl-4 pb-2 pt-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 "
            style={{ color: "black" }}
          >
            Conact
          </Link>
        </div>
        <Dropdown placement="bottomLeft" arrow overlay={<Menu>{cate}</Menu>}>
          <div className=" pl-4 pb-2 pt-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700">
            Category
          </div>
        </Dropdown>
      </Drawer>
    </>
  );
};

// Export the Navbar component
export default Navbar;
