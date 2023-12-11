import React from 'react'
import './Starthere.css'

const Starthere = () => {

    const data = [
        {
            id: '1234567'
            , img: 'https://images.unsplash.com/photo-1701666469271-fd6c65a1e7d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur enim deleniti iste a cupiditate illum rem. Eos a ratione quia velit architecto, fugit obcaecati laboriosam necessitatibu',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque nesciunt nihil facere minus ab eveniet suscipit dignissimos ullam, molestias sapiente saepe soluta reprehenderit repellat placeat ipsum, error provident earum?',
        },
        {
            id: '1234567'
            , img: 'https://images.unsplash.com/photo-1701921188059-daa354b6a91c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur enim deleniti iste a cupiditate illum rem. Eos a ratione quia velit architecto, fugit obcaecati laboriosam necessitatibu',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque nesciunt nihil facere minus ab eveniet suscipit dignissimos ullam, molestias sapiente saepe soluta reprehenderit repellat placeat ipsum, error provident earum?',
        },
        {
            id: '1234567'
            , img: 'https://images.unsplash.com/photo-1682687219570-4c596363fd96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur enim deleniti iste a cupiditate illum rem. Eos a ratione quia velit architecto, fugit obcaecati laboriosam necessitatibu',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque nesciunt nihil facere minus ab eveniet suscipit dignissimos ullam, molestias sapiente saepe soluta reprehenderit repellat placeat ipsum, error provident earum?',
        },
        {
            id: '1234567'
            , img: 'https://images.unsplash.com/photo-1701674397460-82694a5da42b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur enim deleniti iste a cupiditate illum rem. Eos a ratione quia velit architecto, fugit obcaecati laboriosam necessitatibu',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque nesciunt nihil facere minus ab eveniet suscipit dignissimos ullam, molestias sapiente saepe soluta reprehenderit repellat placeat ipsum, error provident earum?',
        },
    ]

    return (
        <>
            <div className='here-main' >
                <div class=" flex justify-center items-center">
                    <h1 className=' here-main-heading mt-14 mb-14 font-bold text-4xl'  >Dress Sharp And Feel Confident Without Tons Of Clothes</h1>
                </div>
                <div class=" container  max-w-80 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                    <div className="pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1 flex justify-start items-start ">
                        <img className='here-img mb-14' src='https://images.unsplash.com/photo-1682695796497-31a44224d6d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' />
                    </div>
                    <div className="pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
                        <p className='here-p1 text-2xl mb-4 font-medium tracking-wide' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, </p>
                        <p className='here-p2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, cupiditate labore, optio eum pariatur voluptas. Quidem ipsam saepe odio placeat velit, blanditiis est eius.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, cupiditate labore, optio eum pariatur voluptas. Quidem ipsam saepe odio placeat velit, blanditiis est eius.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, cupiditate labore, optio eum pariatur voluptas. Quidem ipsam saepe odio placeat velit, blanditiis est eius.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, cupiditate labore, optio eum pariatur voluptas. Quidem ipsam saepe odio placeat velit, blanditiis est eius.
                        </p>
                        <br />
                        <p className='here-p2' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sequi totam consectetur suscipit quisquam quae, cupiditate labore, optio eum pariatur voluptas. Quidem ipsam saepe odio placeat velit, blanditiis est eius.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container max-w-80 mx-auto flex ">
                <div class=" pr-2 pb-0 rounded-md w-1/1">
                    <h1 className='here-heading' >Latest</h1>
                    <div class="flex flex-col justify-start items-start">
                        {
                            data.map((items) => {
                                const { id, img, title, des } = items
                                return (
                                    <>
                                        <div class="  mt-8  here-card h-max-content w-95 flex justify-center items-center flex-col">
                                            <img style={{ boxShadow: '0px 7px 23px -8px rgba(0,0,0,0.75);' }} src={img} alt="" />
                                            <h2>{title}</h2>
                                            <p>{des}</p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div class=" pr-2 pb-0 rounded-md w-1/1">
                    <h1 className='here-heading'  >Trending</h1>
                    {
                        data.map((items) => {
                            const { id, img, title, des } = items
                            return (
                                <>
                                    <div class="  mt-8  here-card-2 h-max-content w-95 flex justify-start items-start ">
                                        <img src={img} alt="" />
                                        <h2 >{title}</h2>
                                        {/* <p>{des}</p> */}
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Starthere