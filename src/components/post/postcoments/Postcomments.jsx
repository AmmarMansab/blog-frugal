'use client'
import { React, useState, useEffect } from 'react'
import './Postcomments.css'
import { IoArrowRedoSharp } from "react-icons/io5";

const Postcomments = () => {


    const comments = [
        {
            img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
            message: ' COMMENT NUMBER 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.',
            date: 'Dec ,19,2001',
            replay: []
        },
        {
            img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
            message: ' COMMENT NUMBER 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.',
            date: 'Dec ,19,2001',
            replay: [
                {
                    img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
                    message: ' COMMENT NUMBER 2-1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.',
                    date: 'Dec ,19,2001',
                    replay: [
                        {
                            img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
                            message: ' COMMENT NUMBER 2-1-1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.',
                            date: 'Dec ,19,2001',
                            replay: [
                                {
                                    img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
                                    message: ' COMMENT NUMBER 2-1-1-1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.',
                                    date: 'Dec ,19,2001',
                                    replay: [
                                        {
                                            img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
                                            message: ' COMMENT NUMBER 2-1-1-2 lorem1',
                                            date: 'Dec ,19,2001',
                                            replay: []
                                        },
                                        {
                                            img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
                                            message: ' COMMENT NUMBER 2-1-1-3  lorem2',
                                            date: 'Dec ,19,2001',
                                            replay: [
                                                {
                                                    img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
                                                    message: ' COMMENT NUMBER 2-1-1-3-1 lorem2-inner and inner',
                                                    date: 'Dec ,19,2001',
                                                    replay: [
                                                        {
                                                            img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
                                                            message: ' COMMENT NUMBER 2-1-1-3-1-1  lorem2',
                                                            date: 'Dec ,19,2001',
                                                            replay: [
                                                                {
                                                                    img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
                                                                    message: 'COMMENT NUMBER 2-1-1-1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.COMMENT NUMBER 2-1-1-1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis. COMMENT NUMBER 2-1-1-3-1-1  lorem2',
                                                                    date: 'Dec ,19,2001',
                                                                    replay: [],
                                                                },
                                                            ]
                                                        },
                                                    ],
                                                    ///
                                                },
                                            ]
                                        },
                                    ],
                                },
                            ]
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
                            message: ' COMMENT NUMBER 2-2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.',
                            date: 'Dec ,19,2001',
                            replay: [],
                        },
                    ]
                },
                {
                    img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
                    message: 'COMMENT NUMBER 2-3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.',
                    date: 'Dec ,19,2001',
                    replay: [],
                },
                {
                    img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
                    message: 'COMMENT NUMBER 2-4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.',
                    date: 'Dec ,19,2001',
                    replay: [],
                },
                {
                    img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
                    message: 'COMMENT NUMBER 2-5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.',
                    date: 'Dec ,19,2001',
                    replay: [],
                },
            ]
            //
        },
        {
            img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
            message: ' COMMENT NUMBER 3 Second LAST COMMent Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.',
            date: 'Dec ,19,2001',
            replay: [
                {
                    img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
                    message: 'COMMENT NUMBER 3-1 C1 COMMent Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.',
                    date: 'Dec ,19,2001',
                    replay: []
                },
                {
                    img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
                    message: ' COMMENT NUMBER 3-2 C2 COMMent Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.',
                    date: 'Dec ,19,2001',
                    replay: []
                },
            ]
        },
        {
            img: 'https://images.unsplash.com/photo-1701435136147-85d0d3f66358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
            message: 'COMMENT NUMBER 4 LAST COMMent Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus assumenda aliquam necessitatibus quasi quaerat asperiores repellendus sequi ipsam fuga, non ab aut? Facilis quidem ipsum obcaecati, labore eligendi officiis.',
            date: 'Dec ,19,2001',
            replay: []
        },
    ]



    const Comment = ({ message, date, replay, img, index }) => {
        const [showAllReplies, setShowAllReplies] = useState(false);
        const [showtextarea, setShowtextarea] = useState(false)
        const handleSubmit = (e) => {
            setShowtextarea(false);
            e.preventDefault();
        };

        return (
            <>
                <div className={` ${index ? 'bottom-border' : ''}`} ></div>
                <div className='comments-main'>
                    <div className="comments-inner-main">
                        <div className="comments-left">
                            <div className="auther-img" style={{ backgroundImage: `url(${img})` }} ></div>
                        </div>
                        <div className="comments-right">
                            <div className="comments-right-A">
                                <h3>Jhon Doe {index} </h3>
                                <div className="rep-commoents">
                                    <h3>{date}</h3> <p className='rep-slas' >|</p> <h6 onClick={() => setShowtextarea(!showtextarea)} >Replay</h6>
                                </div>
                            </div>
                            <div className="comments-right-B">
                                <p>{message}</p>
                            </div>
                        </div>
                    </div>
                    {/* // */}
                    {
                        showtextarea ?
                            <form onSubmit={handleSubmit} className='comments-form' action="">
                                <textarea placeholder='Write Here....' name="" id="" cols="30" rows="10"></textarea>
                                <button >Submit</button>
                            </form>
                            : ''
                    }
                    {/* // */}
                    {replay.length > 0 && (
                        <>
                            <div className='comments-inner'>
                                {showAllReplies
                                    ? replay.map((reply, index) => (
                                        <>
                                            {index === 0 ? <IoArrowRedoSharp className='left-arrow-comments' /> : ''}
                                            <Comment key={index} {...reply} />
                                        </>
                                    ))
                                    : replay.slice(0, 0).map((reply, index) => (
                                        <>
                                            <h1>arrow</h1>
                                            <Comment key={index} {...reply} />
                                        </>
                                    ))}
                            </div>
                            {replay.length >= 1 && (
                                <div className="showmore-main">
                                    <button className='showmore-btn' onClick={() => setShowAllReplies(!showAllReplies)}>
                                        {showAllReplies ? 'Hide Replies' : 'Show All Replies'}
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>

            </>
        );
    };

    const CommentList = ({ comments }) => (
        <div className='commentList'  >
            {comments.map((comment, index) => (
                <Comment key={index} {...comment} index={index} />
            ))}
        </div>
    );

    return (
        <>

            <h1 className='comments-heading' >Commentss</h1>
            <div class="comments-block">
                <div class="form-area">
                    <form action="#" class="comment-form validate-form">
                        {/* Your form inputs go here */}
                    </form>
                </div>

                <CommentList comments={comments} />
            </div>
        </>
    );
};

export default Postcomments;