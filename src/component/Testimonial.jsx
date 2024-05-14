import React from 'react'
import img6 from "../assets/img6.jpeg"
import img7 from "../assets/img7.jpeg"
import img1 from "../assets/img1.jpeg"

const Testimonial = () => {
    return (
        <div className='mt-2'>
            <div>
                <h2 className='text-center py-8  font-bold text-2xl'>STUDENT TESTINOMIALS</h2>
            </div>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 '>
                <div className='bg-[#f2f2f2]'>
                    <div className='flex justify-center items-center bg-gray-200 h-[300px] '>
                        <img src={img6} alt="user" />
                    </div>
                    <div className='py-5 text-[#414042]'>
                        <h3 className='font-bold text-xl text-center'>UMER ASLAM</h3>
                        <p className='font-semibold text-center'>(SARGODHA)</p>
                    </div>
                </div>
                <div className='pt-10 md:pt-0 bg-[#f2f2f2]'>
                    <div className='flex justify-center items-center bg-gray-200 h-[300px] '>
                        <img src={img7} alt="user" />
                    </div>
                    <div className='py-5 text-[#414042]'>
                        <h3 className='font-bold text-xl text-center'>ALI AKBAR</h3>
                        <p className='font-semibold text-center'>(SARGODHA)</p>
                    </div>
                </div>
                <div className='pt-10 lg:pt-0 bg-[#f2f2f2]'>
                    <div className='flex justify-center items-center bg-gray-200 h-[300px] '>
                        <img src={img1 } alt="user" />
                    </div>
                    <div className='py-5 text-[#414042]'>
                        <h3 className='font-bold text-xl text-center'>SAMI ULLAH AWAN</h3>
                        <p className='font-semibold text-center'>(SARGODHA)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial

