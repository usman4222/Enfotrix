import React from 'react'
import Graphicards from '../component/Graphicards'

const Courses = () => {
    return (
        <div className='px-16'>
            <div className='md:flex md:gap-10 grid'>
                <div className='bg-gray-950 px-7 py-10 flex justify-center'>
                    <div>
                        <span className='text-white uppercase font-semibold pl-2'>just</span>
                        <h2 className='text-yellow-200 font-semibold text-6xl uppercase mt-[-10px]'><span className='text-white'>8</span>weeks</h2>
                        <div className='flex justify-end'>
                            <span className='text-white uppercase font-semibold '>program</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <span className='md:pr-10 p-7 md:p-0 text-lg font-semibold'>
                        Join our Graphic Design Course and become a skilled designer in just 4 weeks!
                        Unlock numerous earning opportunities while boosting your confidence. Enroll
                        today and discover your full potential!
                    </span>
                </div>
            </div>
            <Graphicards/>
        </div>
    )
}

export default Courses