import React, { useEffect, useState } from 'react'
import user from '../assets/user.png'
import { FaUser } from "react-icons/fa";
import Side from '../component/Side';
import { Link, useLocation } from 'react-router-dom';
const Mentors = () => {



    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);


    return (
        <div className='flex'>
            <div>
                <div className="hidden lg:inline-block bg-[#fff] h-[606px] w-[280px] pl-16 pb-20">
                    <ul className="flex flex-col gap-4 mt-20 text-[#404142]">
                        <li>
                            <Link
                                to="/"
                                className={`hover:underline text-sm uppercase ${activeLink === '/' && 'text-yellow-500'}`}
                            >
                                home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={`hover:underline text-sm uppercase ${activeLink === '/about' && 'text-yellow-500'}`}
                            >
                                about
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/courses"
                                className={`hover:underline text-sm uppercase ${activeLink === '/courses' && 'text-yellow-500'}`}
                            >
                                our courses
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/mentors"
                                className={`hover:underline text-sm uppercase ${activeLink === '/mentors' && 'text-yellow-500'}`}
                            >
                                mentors
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/photo"
                                className={`hover:underline text-sm uppercase ${activeLink === '/photo' && 'text-yellow-500'}`}
                            >
                                photo gallery
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/batches"
                                className={`hover:underline text-sm uppercase ${activeLink === '/batches' && 'text-yellow-500'}`}
                            >
                                batches
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/faqs"
                                className={`hover:underline text-sm uppercase ${activeLink === '/faqs' && 'text-yellow-500'}`}
                            >
                                faq's
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/jobs"
                                className={`hover:underline text-sm mr-5 uppercase ${activeLink === '/jobs' && 'text-yellow-500'}`}
                            >
                                jobs / internships portal
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/testimonials"
                                className={`hover:underline text-sm uppercase ${activeLink === '/testimonials' && 'text-yellow-500'}`}
                            >
                                testimonials
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className={`hover:underline text-sm uppercase ${activeLink === '/login' && 'text-yellow-500'}`}
                            >
                                candidate login
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={`hover:underline text-sm uppercase ${activeLink === '/contact' && 'text-yellow-500'}`}
                            >
                                contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className='lg:flex'>
                    <h1 className='bg-[rgb(64,65,66)] font-bold text-4xl text-[#f2f2f2] flex justify-center items-center py-10 lg:py-0 px-32'>MENTORS</h1>
                    <p className='bg-[#0047AB]  text-[#f2f2f2] text-center lg:py-20 py-10 px-32 font-semibold'>
                        It is The Supreme <span className='text-[#ffba21]'>Art of the Teacher</span> To Awaken
                        Joy in Creative Expression and Knowledge.
                    </p>
                </div>
                <div>
                    <div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div class="bg-white pt-5">
                            <div className='flex justify-center items-center'>
                                <img src={user} alt="user" className='h-72' />
                            </div>
                            <div className='lg:pl-10 text-center py-6 bg-[#404142]'>
                                <h1 className='font-normal text-[#f2f2f2] '>MUHAMMAD AHMED  </h1>
                                <p className='text-[12px] uppercase text-[#f2f2f2]'>TRAINER(3d-modler)</p>
                            </div>
                        </div>
                        <div class="bg-gray-100 pt-5">
                            <div className='flex justify-center items-center'>
                                <img src={user} alt="user" className='h-72' />
                            </div>
                            <div className='lg:pl-10 text-center py-6 bg-[#fff]'>
                                <h1 className='font-normal text-[#404142] '>MUHAMMAD USAMA  </h1>
                                <p className='text-[12px] uppercase text-[#404142]'>TRAINER (DIGITAL MARKETING)</p>
                            </div>
                        </div>
                        <div class="bg-white pt-5">
                            <div className='flex justify-center items-center'>
                                <img src={user} alt="user" className='h-72' />
                            </div>
                            <div className='lg:pl-10 text-center py-6 bg-[#404142]'>
                                <h1 className='font-normal text-[#f2f2f2] '>ZAFAR  </h1>
                                <p className='text-[12px] uppercase text-[#f2f2f2]'>TRAINER (GRAPHIC DESIGN)</p>
                            </div>
                        </div>
                        <div class="bg-gray-100 pt-5">
                            <div className='flex justify-center items-center'>
                                <img src={user} alt="user" className='h-72' />
                            </div>
                            <div className='lg:pl-10 text-center py-6 bg-[#fff]'>
                                <h1 className='font-normal text-[#404142] '>HASSAN RAZA </h1>
                                <p className='text-[12px] uppercase text-[#404142]'>TRAINER (WEB DEVELOPMENT)</p>
                            </div>
                        </div>
                        <div class="bg-white pt-5">
                            <div className='flex justify-center items-center'>
                                <img src={user} alt="user" className='h-72' />
                            </div>
                            <div className='lg:pl-10 text-center py-6 bg-[#404142]'>
                                <h1 className='font-normal text-[#f2f2f2] '>MUZAMIL </h1>
                                <p className='text-[12px] uppercase text-[#f2f2f2]'>TRAINER (ANDROID DEVELOPMENT)</p>
                            </div>
                        </div>
                        <div class="bg-gray-100 pt-5">
                            <div className='flex justify-center items-center'>
                                <img src={user} alt="user" className='h-72' />
                            </div>
                            <div className='lg:pl-10 text-center py-6 bg-[#fff]'>
                                <h1 className='font-normal text-[#404142] '>HUSSAIN </h1>
                                <p className='text-[12px] uppercasetext-[#404142]'>TRAINER (ANDROID DEVELOPMENT)</p>
                            </div>
                        </div>
                        <div class="bg-white pt-5">
                            <div className='flex justify-center items-center'>
                                <img src={user} alt="user" className='h-72' />
                            </div>
                            <div className='lg:pl-10 text-center py-6 bg-[#404142]'>
                                <h1 className='font-normal text-[#f2f2f2] '>ZUBAIR  </h1>
                                <p className='text-[12px] uppercase text-[#f2f2f2]'>TRAINER (ANDROID DEVELOPMENT)</p>
                            </div>
                        </div>
                        <div class="bg-gray-100 pt-5">
                            <div className='flex justify-center items-center'>
                                <img src={user} alt="user" className='h-72' />
                            </div>
                            <div className='lg:pl-10 text-center py-6 bg-[#fff]'>
                                <h1 className='font-normal text-[#404142] '>ZEESHAN </h1>
                                <p className='text-[12px] uppercase text-[#404142]'>TRAINER (VIDEO EDITING)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mentors