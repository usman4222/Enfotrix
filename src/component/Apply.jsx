import React from "react";
import course from "../assets/course.jpg";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Apply = () => {
    return (
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
            <div>
                <img src={course} className="md:h-[70vh] h-[36vh] md:w-screen bg-cover" />
                <div className="md:absolute left-0 top-0 h-full"></div>
                <section className="bg-[#0047ab] text-white py-16 pl-5 md:pl-5 lg:pl-16 md:px-20 md:py-10 font-bold flex relative">
                    <div>
                        <h2 className=" text-[26px] font-semibold ">CERTIFIED</h2>
                        <h1 className="text-4xl lg:text-5xl md:text-4xl font-semibold">
                            GRAPHIC DESIGN <br /> PROGRAM
                        </h1>
                    </div>
                </section>
            </div>
            <div className="   bg-[#414042] md:w-[50%] lg:w-[30%] md:absolute md:right-0 md:-bottom-[1px]">
                <div className="bg-white text-[#414042] flex justify-center py-4 md:px-20">
                    <h1 className="text-2xl font-bold">COURSE TRACKS</h1>
                </div>
                <div className="bg-[#414042] flex flex-col items-center  py-6">
                    <div className="text-center md:text-center  md:font-bold font-bold">
                        <h1 className="md:text-center text-center text-[#f2f2f2] text-lg pb-2 uppercase">
                            for regular classes
                        </h1>
                        <button className="bg-[#ffba21] flex flex-col md:items-center items-center md:rounded-xl rounded-md py-1">
                            <span className="md:text-[28px] md:rounded-2xl rounded-xl text-lg px-10 text-[#414042]">
                                APPLY NOW{" "}
                            </span>
                            <span className="md:text-xl md:-mt-1 text-[#414042]">15000,PKR</span>
                        </button>
                    </div>
                    <div className="text-center md:text-center  md:font-bold font-bold mt-7">
                        <h1 className="md:text-center text-center text-[#f2f2f2] text-lg pb-2 uppercase">
                            for online classes
                        </h1>
                        <button className="bg-[#ffba21] flex flex-col  items-center md:rounded-xl rounded-md py-1">
                            <span className="md:text-[28px] md:rounded-2xl rounded-xl text-lg px-10 text-[#414042]">
                                APPLY NOW{" "}
                            </span>
                            <span className="md:text-xl md:-mt-1 text-[#414042]">5000,PKR</span>
                        </button>
                    </div>
                </div>
            </div>
            <Sidebar />
        </div>
    );
};

export default Apply;
