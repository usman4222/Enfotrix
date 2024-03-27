import React from 'react'
import Graphicards from '../component/Graphicards'
import Overview from '../component/Overview'
import Batches from '../component/Batches'
import Entry from '../component/Entry'
import FeedBack from '../component/FeedBack'
import Apply from '../component/Apply'

const Courses = () => {
    return (
        <>
            <Apply />
            <div className='md:px-16 lg:px-0 lg:pl-[243px]'>
                <div className='md:flex md:gap-10 grid'>
                    <div className='bg-[#414042] px-7 py-10 flex justify-center'>
                        <div>
                            <span className='text-white uppercase font-semibold pl-2'>just</span>
                            <h2 className='text-[#ffba21] font-semibold text-6xl uppercase mt-[-10px]'><span className='text-white'>8</span>weeks</h2>
                            <div className='flex justify-end'>
                                <span className='text-white uppercase font-semibold '>program</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <span className='md:pr-10 p-7 md:p-0 text-lg font-semibold text-[#414042]'>
                            Join our Graphic Design Course and become a skilled designer in just 4 weeks!
                            Unlock numerous earning opportunities while boosting your confidence. Enroll
                            today and discover your full potential!
                        </span>
                    </div>
                </div>
                <div className='bg-[#f2f2f2] lg:px-10'>
                    <Graphicards />
                    <Overview />
                    <Batches />
                    <Entry />
                    <FeedBack />
                </div>
            </div>
        </>

    )
}

export default Courses
