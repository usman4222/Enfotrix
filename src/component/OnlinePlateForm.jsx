import React from 'react'

const OnlinePlateForm = () => {
    return (
        <div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
                <div>
                    <div className='flex justify-center items-center bg-[#F2F2F2] h-[330px] '>
                        <span className=' text-white absolute font-bold' style={{ fontSize: "12rem" }}>01</span>
                        <div className='z-10'>
                            <h3 className='uppercase pb-10 text-center text-2xl text-[#414042] font-semibold'>FREELANCING PLATFORMS</h3>
                            <div className='flex justify-center'>
                                <span className='text-center text-[#414042] text-lg font-semibold'>Read More</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center bg-[#F2F2F2] h-[330px]'>
                    <span className=' text-white absolute font-bold' style={{ fontSize: "12rem" }}>02</span>
                    <div className='z-10'>
                        <h3 className='uppercase pb-10 text-2xl text-center text-[#414042] font-semibold'>easy installment plans</h3>
                        <div className='flex justify-center  '>
                            <span className='text-center text-[#414042] text-lg font-semibold'>Read More</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center bg-[#F2F2F2] h-[330px]'>
                    <span className='text-white absolute font-bold' style={{ fontSize: "12rem" }}>03</span>
                    <div className='z-10'>
                        <h3 className='uppercase pb-10 text-2xl text-[#414042] font-semibold'>certified certificate</h3>
                        <div className='flex justify-center  '>
                            <span className='text-center text-lg text-[#414042] font-semibold'>Read More</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center bg-[#F2F2F2] h-[330px]'>
                    <span className=' text-white absolute font-bold' style={{ fontSize: "12rem" }}>04</span>
                    <div className='z-10'>
                        <h3 className='uppercase pb-10 text-center text-[#414042] text-2xl font-semibold'>internship/job opportunities</h3>
                        <div className='flex justify-center  '>
                            <span className='text-center text-lg text-[#414042] font-semibold'>Read More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnlinePlateForm
