// Import necessary libraries and components
import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, Menu } from 'antd';
import { useGetCategories } from '@/app/api/category';
import useNavi from '@/utils/hooks/useNavi';
import './Navbar.css'

// Navbar component
const Navbar = () => {
  // Hooks and state variables
  const { handleNavigation } = useNavi();
  const { categories } = useGetCategories();
  const [currentScrollTop, setCurrentScrollTop] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      console.log(window.scrollY,'llll');
      const a = window.pageYOffset;
      const b = navbar.clientHeight; // Move this line here
      setCurrentScrollTop(a);

      if (lastScrollTop < currentScrollTop && a > b + b) {
        setIsScrollingUp(true);
      } else if (lastScrollTop > currentScrollTop && !(a <= b)) {
        setIsScrollingUp(false);
      }

      setLastScrollTop(a);
    };

    const navbar = document.querySelector('nav'); // Move this line here
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };


  }, [currentScrollTop, lastScrollTop,window.scrollY]);

  const cate = categories?.map((item) => (
    <Menu.Item key={item._id} onClick={() => handleNavigation(`/category/${item._id}`)}>
      {item.name}
    </Menu.Item>
  ));

  // Render the Navbar component
  return (
    <>
      <nav 
        className=" nav  z-0 relative shadow-lg transition-all duration-300" x-data="{open:false,menu:false, lokasi:false}"
      >
        <div className="relative w-[100%] z-10 bg-yellow-300 shadow">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0" href="#">
                  <img className="block lg:hidden h-12 w-16" src="https://imlovefood.com/wp-content/themes/mypanganthema/img/logo_small.png" alt="Logo" />
                  <img className="hidden lg:block h-12 w-auto" src="https://imlovefood.com/wp-content/themes/mypanganthema/img/logo_small_gray.png" alt="Logo" />
                </div>
                <div className="hidden lg:block lg:ml-2">
                  <div className="flex">
                    <div onClick={() => handleNavigation('/')} className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700">Home</div>
                    <div onClick={() => handleNavigation('/starthere')} className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700">Start Hear</div>
                    <div onClick={() => handleNavigation('/contact')} className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700">Contact</div>
                    <div className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700">
                      <Dropdown
                        menu={cate}
                        placement="bottomLeft"
                        arrow
                      >
                        <div className="ml-8 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 font-semibold hover:bg-yellow-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700">
                          Category
                        </div>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">Search</label>
                  <form method="get" action="#" className="relative z-50">
                    <button type="submit" id="searchsubmit" className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    <input type="text" name="s" id="s" className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-yellow-200 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out" placeholder="Search" />
                  </form>
                </div>
              </div>
              <div className="flex lg:hidden">
                <button onClick={() => menu = !menu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                  <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div x-show="menu" className="block md:hidden">
            <div className="px-2 pt-2 pb-3">
              <div className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Location</div>
              <div className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Article</div>
              <div className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Recipe</div>
              <div className="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Promo</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

// Export the Navbar component
export default Navbar;
