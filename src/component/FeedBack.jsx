import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";


const FeedBack = () => {
    return (
        <div>
            <div className='py-10'>
                <h1 className='text-4xl font-bold p-5 md:p-0'>STUDENTS FEEDBACKS</h1>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 bg-white py-10'>
                <div className='bg-white'>
                    <div className='bg-slate-500 m-10'>
                        <div className='flex justify-end pr-10 pb-8'>
                            <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-gray-300 mt-[-30px] md:mt-[-40px] flex justify-center items-center'>
                                <FaRegCircleUser className='text-7xl md:text-8xl p-2' />
                            </div>
                        </div>
                        <div className='pb-20 px-8'>
                            <h3 className='uppercase pb-2 text-xl text-white font-bold'>Ben Cooper</h3>
                            <span>It was absoulutely Amazing
                                products and highly
                                recomended.
                            </span>
                        </div>
                        <div className='flex gap-2 px-8 text-yellow-400 text-2xl justify-center md:justify-start pb-10' >
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                    </div>
                </div>
                <div className='bg-white'>
                    <div className='bg-slate-500 m-10'>
                        <div className='flex justify-end pr-10 pb-8'>
                            <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-gray-300 mt-[-30px] md:mt-[-40px] flex justify-center items-center'>
                                <FaRegCircleUser className='text-7xl md:text-8xl p-2' />
                            </div>
                        </div>
                        <div className='pb-20 px-8'>
                            <h3 className='uppercase pb-2 text-xl text-white font-bold'>John Ruskin</h3>
                            <span>It was absoulutely Amazing
                                products and highly
                                recomended.
                            </span>
                        </div>
                        <div className='flex gap-2 px-8 text-yellow-400 text-2xl justify-center md:justify-start pb-10' >
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                    </div>
                </div>
                <div className='bg-white'>
                    <div className='bg-slate-500 m-10'>
                        <div className='flex justify-end pr-10 pb-8'>
                            <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-gray-300 mt-[-30px] md:mt-[-40px] flex justify-center items-center'>
                                <FaRegCircleUser className='text-7xl md:text-8xl p-2' />
                            </div>
                        </div>
                        <div className='pb-20 px-8'>
                            <h3 className='uppercase pb-2 text-xl text-white font-bold'>John Ruskin</h3>
                            <span>It was absoulutely Amazing
                                products and highly
                                recomended.
                            </span>
                        </div>
                        <div className='flex gap-2 px-8 text-yellow-400 text-2xl justify-center md:justify-start pb-10' >
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedBack