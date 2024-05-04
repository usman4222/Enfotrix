import React, { useEffect } from "react";
import course from "../assets/course.jpg";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import Companies from "./Companies";
import SkillSec from "../Components/SkillSec";
import OnlinePlateForm from "./OnlinePlateForm";
import ImageGrid from "../screens/ImageGrid";
import Testimonial from "./Testimonial";
import Reviews from "./Reviews";
import DemoCards from "./DemoCards";
import Performance from "./Performance";


const Main = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <div className="md:flex md:justify-around relative">
                <div className="md:leading-10 hidden lg:inline-block pr-16">
                    <ul className="flex flex-col bg-white">
                        <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
                            <Link to="/" className="hover:underline text-sm pb-8">
                                HOME
                            </Link>
                        </li>
                        <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
                            <Link to="/about" className="hover:underline text-sm">
                                ABOUT US
                            </Link>
                        </li>
                        <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
                            <Link to="/courses" className="hover:underline text-sm ">
                                OUR COURSES
                            </Link>
                        </li>
                        <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
                            <Link to="/mentors" className="hover:underline text-sm ">
                                MENTORS
                            </Link>
                        </li>
                        <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
                            <Link to="/gallery" className="hover:underline text-sm  ">
                                PHOTO GALLERY
                            </Link>
                        </li>
                        <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
                            <Link to="/batches" className="hover:underline text-sm ">
                                BATCHES
                            </Link>
                        </li>
                        <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
                            <Link to="/faqs" className="hover:underline text-sm ">
                                FAQS
                            </Link>
                        </li>
                        <li className="mb-2 md:mb-0 pb-2 pl-14 w-[130%]">
                            <Link to="/job-internship" className="hover:underline text-sm ">
                                JOB / INTERNSHIP PORTAL
                            </Link>
                        </li>
                        <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
                            <Link to="/testimonials" className="hover:underline text-sm ">
                                TESTIMONIALS
                            </Link>
                        </li>
                        <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
                            <Link to="/login" className="hover:underline text-sm ">
                                CANDIDATE LOGIN
                            </Link>
                        </li>
                        <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
                            <Link to="/contact" className="hover:underline text-sm ">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <div className="relative h-[80%]">
                        <img src={course} className=" md:w-screen bg-cover relative" alt="Course" />
                        <div className="absolute inset-0 bg-[#0047ab] opacity-80 flex items-center justify-center">  </div>
                        <div className="text-white text-center z-10 absolute top-0 left-0">
                            <div className="flex justify-evenly items-center flex-col md:flex-row lg:w-[69.1rem] md:w-[48rem] h-[28rem] md:pb-32 font-bold md:text-5xl text-lg">
                                <div className="md:text-left flex pl-10 md:pl-0 pt-10 md:pt-0 md:flex-col gap-2">
                                    <p>2,000+</p>
                                    <p>Candidates</p>
                                    <p>Trained</p>
                                </div>
                                <div className="text-left flex md:flex-col pl-12 md:pl-0 pt-2 md:pt-0 gap-2">
                                    <p>5+</p>
                                    <p>Years Of</p>
                                    <p>Experience</p>
                                </div>
                            </ div>
                        </div>
                    </div>
                    <div className="bg-[#ffba21] h-[20%] flex items-center justify-evenly">
                        <div className="flex items-center w-[30%] gap-5">
                            <div><IoLocationSharp className="lg:text-6xl md:text-3xl text-[#414042]" /></div>
                            <p className="text-[#414042] font-semibold md:text-sm ">Enfotrix (Pvt.)Ltd Main zafarullah
                                chowk, Sargodha</p>
                        </div>
                        <div className="flex items-center w-[25%] gap-5">
                            <div><BiLogoGmail className="text-xl text-[#414042]" /></div>
                            <p className="text-[#414042] lg:text-xl md:text-sm font-semibold">contact@Enfotrix.com</p>
                        </div>
                        <div className="flex items-center w-[25%] gap-5">
                            <div><FaPhoneAlt className="text-xl text-[#414042]" /></div>
                            <p className="text-[#414042] text-xl md:text-sm font-bold">+92 315 5658095</p>
                        </div>
                        <div className="">
                            <div className="bg-[#f2f2f2] flex lg:py-6 md:py-[18px] px-5 justify-center items-center rounded-tl-[50px] rounded-tr-[50px]">
                                <div className="bg-[#0047ab] lg:w-16 md:w-10 lg:h-16 md:h-10 flex justify-center items-center rounded-[50px]">
                                    <FaPlus className=" text-[#f2f2f2] text-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div >
            <Companies />
            <SkillSec />
            <OnlinePlateForm />
            <ImageGrid />
            <Performance />
            <Testimonial />
            <Reviews />
            <DemoCards />
        </>
    );
};

export default Main;

{/*
                <div className="md:absolute left-0 top-0 h-full"></div>
<section className="bg-[#ffba21] text-white py-16 pl-5 md:pl-5 lg:pl-16 md:px-20 md:py-10 font-bold flex relative">
<div>
</div>
</section> */}
