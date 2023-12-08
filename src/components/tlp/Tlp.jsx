import React from 'react'
import './Tlp.css'

const Tlp = () => {
    return (
        <>
            <div class=" container border max-w-80 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div class="bg-blue-500 pr-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
                    <div className="card-tlp">
                        <div className="overlay"></div>
                    </div>
                </div>
                <div class="bg-blue-500 pr-2 pl-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
                    <div className="card-tlp">
                        <div className="overlay"></div>
                    </div>
                </div>
                <div class="bg-blue-500 pl-2 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
                    <div className="card-tlp">
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>
            {/* //// */}
            <div class=" mt-4 container border max-w-100 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                <div className="bg-blue-500 pl-0 pr-0 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
                    <div className="paralex">
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>
            {/* //// */}
            <div class=" mt-4 container border max-w-80 mx-auto grid grid-cols-1 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                <div className="bg-blue-500 pl-0 pr-0 pb-0 rounded-md sm:w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
                     <div className="review">
                        <div className="percentage flex justify-center items-center "> 80% </div>
                        <div className="overlay"></div>
                     </div>
                </div>
            </div>
        </>
    )
}

export default Tlp