import React from 'react'

const NoticeSection = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white'>
                <div className='hidden md:block'>
                    <div className='flex justify-center items-center  h-[300px]'>
                        <div>

                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center  h-[200px] bg-[#FFBA21]'>
                    <h2 className='text-4xl font-bold text-[#414042]'>COURSES</h2>
                </div>
                <div className='flex justify-center items-center  h-[300px] bg-[#F2F2F2]'>
                    <div className='p-10'>
                        <h3 className='text-lg font-bold text-[#414042] pb-2'>PLEASE NOTE</h3>
                        <p className='text-base text-[#414042]'>Our online classes are conducted
                            via <span className='font-bold'>Zoom</span>. For fee information,
                            please refer to the respective
                            course pages or contact us
                            directly for details</p>
                    </div>
                </div>
                <div className='flex justify-center items-center  h-[300px] bg-white'>
                    <div className='p-10'>
                        <p className='text-base text-[#414042]'>
                            <span className='font-bold'>At Enfotrix,</span> we offer a diverse range
                            of courses and services designed
                            to empower you with the skills and
                            expertise you need to succeed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoticeSection
