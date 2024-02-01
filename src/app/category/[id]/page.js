'use client'
import { NextSeo } from "next-seo";
import Category from "../Category/Category";

const page = () => {
  const SEO = {
    title: 'Category Page',
    description: 'Description of your page for search engines.',
    openGraph: {
      title: 'Your Open Graph Title',
      description: 'category page of frugal male fashion blog.',
      url: 'https://frugalmalefashionblog.com/',
      type: 'website',
    },
  };
  return (
    <>
    <NextSeo {...SEO} />
    <Category/>
    </>
  );
};

export default page;
