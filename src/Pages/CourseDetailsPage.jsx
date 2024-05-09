import React from 'react'
import Side from '../component/Side'

const CourseDetailsPage = () => {
    return (
        <>

            <div className='flex '>
                <Side/>
                <div className='w-[100%]'>
                    <div>
                        <div className='bg-blue-500 w-auto h-96 '>
                            <div className='flex justify-between items-center pt-[300px] md:pt-[320px]'>
                                <div className='flex justify-center items-center w-[100%] md:w-[65%] lg:w-[50%]'>
                                    <h3 className='font-bold text-lg text-white text-center '>YOUR STEPS TOWARDS A BETTER TOMORROW</h3>
                                </div>
                                <div className='bg-white hidden md:block md:w-[35%] lg:w-[50%] h-2'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex bg-yellow-400 md:bg-transparent justify-center items-center '>
                        <div className='md:bg-yellow-400 py-20  md:px-28'><h2 className='text-black font-bold text-4xl uppercase'>courses</h2></div>
                        <div className='w-[100%] bg-white hidden md:block'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseDetailsPage
