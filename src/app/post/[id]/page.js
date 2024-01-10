import Detail from './Detail.jsx'

export async function generateMetadata({ params }, parent) {
  // console.log('generateMetadata called:', params);

  return {
    title: "Frugal Man Fashion | Blog",
    description: "This a frugal man fashion blog",
    openGraph: {
      images: ['https://cdn.iconscout.com/icon/free/png-512/free-user-1648810-1401302.png?f=webp&w=256'],
    },
  };
}

const page = () => {
  return (
    <>
      <div className='parent-of-all' >
        <Detail/>
      </div>
    </>
  )
}

export default page