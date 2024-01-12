import React from 'react'
import './Scrolldown.css'

const scrolldown = () => {
    return (
        <>
            <span class="scroll-btn">
                <a href="#">
                    <span class="mouse">
                        <span>
                        </span>
                    </span>
                </a>
                <p className='sd-p' >scroll down</p>
            </span>
        </>
    )
}

export default scrolldown