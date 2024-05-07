import React from "react";
import course from "../assets/course.jpg";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Side from "./Side";

const Apply = () => {
    return (
        <div className="md:flex md:justify-around relative">
            <Side/>
            <div className="w-full">
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
                        <Link to='/student-intake'>
                            <button className="bg-[#ffba21] flex flex-col md:items-center items-center md:rounded-xl rounded-md py-1">
                                <span className="md:text-[28px] md:rounded-2xl rounded-xl text-lg px-10 text-[#414042]">
                                    APPLY NOW{" "}
                                </span>
                                <span className="md:text-xl md:-mt-1 text-[#414042]">15000,PKR</span>
                            </button>
                        </Link>
                    </div>
                    <div className="text-center md:text-center  md:font-bold font-bold mt-7">
                        <h1 className="md:text-center text-center text-[#f2f2f2] text-lg pb-2 uppercase">
                            for online classes
                        </h1>
                        <Link to='/student-intake'>
                            <button className="bg-[#ffba21] flex flex-col  items-center md:rounded-xl rounded-md py-1">
                                <span className="md:text-[28px] md:rounded-2xl rounded-xl text-lg px-10 text-[#414042]">
                                    APPLY NOW{" "}
                                </span>
                                <span className="md:text-xl md:-mt-1 text-[#414042]">5000,PKR</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apply;
