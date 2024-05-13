import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"
import img4 from "../assets/img4.jpeg"
import img5 from "../assets/img5.jpeg"

const ImageGrid = () => {
    return (
        <>
            <div className='grid grid-cols-12 grid-rows-5 md:grid-rows-2 gap-y-2 '>
                <div className='md:col-span-4 col-span-12 row-span-2 bg-orange-600 max-h-[400px]'>
                    <img
                        src={img5}
                        className='w-full h-full  bg-cover bg-center'
                        alt='user'
                    />
                </div>
                <div className='md:col-span-5 col-span-12 row-span-2 bg-[#404142] flex flex-col justify-center'>
                    <div>
                        <p className='text-[#f2f2f2] font-semibold px-16'>At Enfotrix, we're on a mission to inspire creativity and empower
                            individuals to thrive in the digital world. Since 2019, we've been
                            offering top-notch courses, services, and solutions in technology
                            and design. With a focus on excellence, creativity, and continuous
                            learning, we've helped countless clients and students achieve
                            their goals. Meet our dedicated team who's passionate about
                            making a difference in the world of technology and design.</p>
                    </div>
                    <div>
                        <Link><p className='uppercase text-[#ffba21] text-sm pl-16 mt-10'>read more</p></Link>
                    </div>
                </div>
                <div className='md:col-span-3 col-span-12 row-span-1 bg-[#0047AB] flex justify-center items-center text-white '>
                    <h1 className='text-4xl font-bold uppercase'>ceo <br />enfotrix</h1>
                </div>
            </div>
            <div className='grid grid-cols-12 md:grid-cols-3 md:grid-rows-2 grid-rows-6 gap-y-2 mt-2 gap-x-2'>
                <div className='md:col-span-1 col-span-6 row-span-1 bg-orange-600 max-h-[400px]'>
                    <img src={img1} alt="user" />
                </div>
                <div className='md:col-span-1 col-span-6 row-span-2 bg-red-500 flex justify-center items-center'>
                    <h2 className='text-white'>Hllo ther</h2>
                </div>
                <div className='md:col-span-1 col-span-6 row-span-1 bg-blue-600 flex justify-center items-center text-white '>
                    <img src={img2} alt="user" />
                </div>
                <div className='md:col-span-1 col-span-6 row-span-1 bg-blue-600 flex justify-center items-center text-white '>
                    <img src={img3} alt="user" />
                </div>
                <div className='md:col-span-1 col-span-6 row-span-1 bg-blue-600 flex justify-center items-center text-white '>
                    <img src={img4} alt="user" />
                </div>
            </div>
            <div className='grid grid-cols-12 grid-rows-5 md:grid-rows-2 gap-y-2 mt-2 gap-x-2'>
                <div className='md:col-span-4 col-span-12 row-span-2 py-32  max-h-[400px]'>
                    <p className='text-center text-[#414042]'>Unlock Your Potential with <br /> Enfotrix's Top Offerings</p>
                </div>
                <div className='md:col-span-4 col-span-12 row-span-2 bg-[#0047AB] flex justify-center items-center'>
                    <h2 className='text-white text-center text-4xl font-bold'>VOICES OF SUCCESS</h2>
                </div>
                <div className='md:col-span-4 col-span-12 row-span-2 flex justify-center items-center'>
                    <div>
                        <p className='text-left text-[#414042]'>Inspiring Testimonials <br /> Student Feedback <br /> Success Stories Shared <br /> Experiences</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageGrid
