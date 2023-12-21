import React from "react";

export async function generateMetadata({ params }, parent) {
    console.log('generateMetadata called:', params);
  
    return {
      title: "New Title",
      description: "New Description",
      openGraph: {
        images: ['/some-specific-page-image.jpg'],
      },
    };
  }
  

const page = ({ params }) => {
  return <h1 style={{ color: "black" }}>Ammar</h1>;
};

export default page;
