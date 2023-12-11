import Fotter from "@/components/common/fotter/Fotter";
import Postcomments from "@/components/post/postcoments/Postcomments";
import Postcontent from "@/components/post/postcontent/Postcontent";
import Postheader from "@/components/post/postheader/Postheader";
import Postnext from "@/components/post/postnext/Postnext";
import Postrelated from "@/components/post/postrelated/Postrelated";
import Writemessage from "@/components/post/writemessage/Writemessage";
import Image from "next/image";
// import Carousel from "@/components/home/Carousel";
// import Postheader from "@/components/post/Postheader";
// import Postcomments from "@/components/post/Postcomments";
// import Relatedpost from "@/components/post/Relatedpost";
// import NextPreviouspost from "@/components/post/NextPreviouspost";
// import Postcontent from "@/components/post/Postcontent";


const page = () => {

  const carouseldata = [
    {
      id: '11887',
      img: 'http://placehold.it/2000x1420',
      title: 'FEATURED CAROUSEL POSTS A',
      by: 'Admin',
      date: 'Dec 19, 2001',
      category: 'Fashion',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor repellendus est necessitatibus quis illum cupiditate porro, quo, mollitia maiores cum accusamus, tempora modi voluptatum ullam fugiat officiis maxime consectetur dolorem!',
    },
  ]

  return (
    <>
    <Postheader/>
    <Postcontent/>
    <Postnext/>
    <Postrelated/>
    <Postcomments/>
    <Writemessage/>
    <Fotter/>
    </>
  )
}

export default page