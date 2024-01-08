import Detail from './Detail.jsx'

export async function generateMetadata({ params }, parent) {
  // console.log('generateMetadata called:', params);

  return {
    title: "New Title 011",
    description: "New Description 100",
    openGraph: {
      images: ['/some-specific-page-image.jpg'],
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