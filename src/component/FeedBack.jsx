import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";


const FeedBack = () => {
    return (
        <div>
            <div className='py-10'>
                <h1 className='text-4xl font-bold p-5 md:p-0 text-[#414042]'>STUDENTS FEEDBACKS</h1>
            </div>
            <div className='grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 py-10'>
                <div>
                    <div className='bg-white'>
                        <div className='flex justify-end pr-10 pb-8'>
                            <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] border border-[#f2f2f2] bg-white mt-[-30px] md:mt-[-40px] flex justify-center items-center'>
                                <FaRegCircleUser className='text-[#414042] text-7xl md:text-8xl p-2' />
                            </div>
                        </div>
                        <div className='pb-20 px-10'>
                            <h3 className='uppercase pb-2 text-xl text-[#414042] font-bold'>Ben Cooper</h3>
                            <span className='text-[#414042]'>It was absoulutely Amazing
                                products and highly
                                recomended.
                            </span>
                        </div>
                        <div className='flex gap-2 px-8 text-[#ffba21] text-2xl justify-center md:justify-start pb-10' >
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-white'>
                        <div className='flex justify-end pr-10 pb-8'>
                            <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] border border-[#f2f2f2] bg-white mt-[-30px] md:mt-[-40px] flex justify-center items-center'>
                                <FaRegCircleUser className='text-[#414042] text-7xl md:text-8xl p-2' />
                            </div>
                        </div>
                        <div className='pb-20 px-10'>
                            <h3 className='uppercase pb-2 text-xl text-[#414042] font-bold'>John Ruskin</h3>
                            <span className='text-[#414042]'>It was absoulutely Amazing
                                products and highly
                                recomended.
                            </span>
                        </div>
                        <div className='flex gap-2 px-8 text-[#ffba21] text-2xl justify-center md:justify-start pb-10' >
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-white '>
                        <div className='flex justify-end pr-10 pb-8'>
                            <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] border border-[#f2f2f2] bg-white mt-[-30px] md:mt-[-40px] flex justify-center items-center'>
                                <FaRegCircleUser className='text-[#414042] text-7xl md:text-8xl p-2' />
                            </div>
                        </div>
                        <div className='pb-20 px-10'>
                            <h3 className='uppercase pb-2 text-xl text-[#414042] font-bold'>John Ruskin</h3>
                            <span className='text-[#414042]'>It was absoulutely Amazing
                                products and highly
                                recomended.
                            </span>
                        </div>
                        <div className='flex gap-2 px-8 text-[#ffba21] text-2xl justify-center md:justify-start pb-10' >
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