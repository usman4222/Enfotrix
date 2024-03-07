import React from 'react'

const Testimonial = () => {
    return (
        <div>
            <div>
                <h2 className='text-center py-10 mt-5 font-bold text-2xl'>STUDENT TESTINOMIALS</h2>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                <div>
                    <div className='flex justify-center items-center bg-gray-200 h-[300px] '>
                        video
                    </div>
                    <div className='pt-8'>
                        <h3 className='font-bold text-xl'>UMER ASLAM</h3>
                        <p className='font-semibold'>(SARGODHA)</p>
                    </div>
                </div>
                <div className='pt-10 md:pt-0'>
                    <div className='flex justify-center items-center bg-gray-200 h-[300px] '>
                        video
                    </div>
                    <div className='pt-8'>
                        <h3 className='font-bold text-xl'>ALI AKBAR</h3>
                        <p className='font-semibold'>(SARGODHA)</p>
                    </div>
                </div>
                <div className='pt-10 lg:pt-0'>
                    <div className='flex justify-center items-center bg-gray-200 h-[300px] '>
                        video
                    </div>
                    <div className='pt-8'>
                        <h3 className='font-bold text-xl'>SAMI ULLAH AWAN</h3>
                        <p className='font-semibold'>(SARGODHA)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial

