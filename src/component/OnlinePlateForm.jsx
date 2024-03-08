import React from 'react'

const OnlinePlateForm = () => {
    return (
        <div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
                <div>
                    <div className='flex justify-center items-center bg-gray-200 h-[300px] '>
                        <span className=' text-gray-100 absolute' style={{ fontSize: "12rem" }}>01</span>
                        <div className='z-10'>
                            <h3 className='uppercase pb-10 text-2xl font-semibold'>FREELANCING PLATFORMS</h3>
                            <div className='flex justify-center  '>
                                <span className='text-center'>Read Me</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center bg-gray-200 h-[300px]'>
                    <span className=' text-gray-100 absolute' style={{ fontSize: "12rem" }}>02</span>
                    <div className='z-10'>
                        <h3 className='uppercase pb-10 text-2xl font-semibold'>easy installment plans</h3>
                        <div className='flex justify-center  '>
                            <span className='text-center'>Read Me</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center bg-gray-200 h-[300px]'>
                    <span className=' text-gray-100 absolute' style={{ fontSize: "12rem" }}>03</span>
                    <div className='z-10'>
                        <h3 className='uppercase pb-10 text-2xl font-semibold'>certified certificate</h3>
                        <div className='flex justify-center  '>
                            <span className='text-center'>Read Me</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center bg-gray-200 h-[300px]'>
                    <span className=' text-gray-100 absolute' style={{ fontSize: "12rem" }}>04</span>
                    <div className='z-10'>
                        <h3 className='uppercase pb-10 text-center text-2xl font-semibold'>internship/job opportunities</h3>
                        <div className='flex justify-center  '>
                            <span className='text-center'>Read Me</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnlinePlateForm
