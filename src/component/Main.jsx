import React, { useEffect } from "react";
import course from "../assets/course.jpg";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import Companies from "./Companies";
import SkillSec from "../Elements/SkillSec";
import OnlinePlateForm from "./OnlinePlateForm";
import ImageGrid from "../Pages/ImageGrid";
import Testimonial from "./Testimonial";
import Reviews from "./Reviews";
import DemoCards from "./DemoCards";
import Performance from "./Performance";
import Side from "./Side";


const Main = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <>
                <div className='flex'>
                    <Side />
                    <div className='w-full'>
                        <div className='flex justify-center md:block items-center bg-[#0047ab]'>
                            <div className=" bg-[#0047ab] flex-cols md:flex md:flex-row justify-center items-center md:justify-evenly py-32 md:py-48">
                                <div className='text-white mb-10 md:mb-0 text-4xl md:text-5xl font-extrabold'>
                                    <p>2,000+</p>
                                    <p>Candidates</p>
                                    <p>Trained</p>
                                </div>
                                <div className='text-white text-4xl md:text-5xl font-extrabold'>
                                    <p>5+</p>
                                    <p>Years Of</p>
                                    <p>Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex md:block justify-center bg-[#ffba21]'>
                            <div className="bg-[#ffba21] flex-cols md:flex md:flex-row md:justify-evenly items-center">
                                <div className="flex items-center py-5">
                                    <div><IoLocationSharp className="lg:text-6xl md:text-3xl mr-2 text-2xl text-[#414042]" /></div>
                                    <p className="text-[#414042] font-semibold md:text-sm ">Enfotrix (Pvt.)Ltd Main zafarullah<br />
                                        chowk, Sargodha</p>
                                </div>
                                <div className="flex items-center py-5">
                                    <div><BiLogoGmail className="text-xl text-[#414042] mr-2" /></div>
                                    <p className="text-[#414042] lg:text-xl md:text-sm font-semibold">contact@Enfotrix.com</p>
                                </div>
                                <div className="flex items-center py-5">
                                    <div><FaPhoneAlt className="text-xl text-[#414042] mr-2" /></div>
                                    <p className="text-[#414042] text-xl md:text-sm font-bold">+92 315 5658095</p>
                                </div>
                                <div className='bg-white p-5 rounded-tl-[50px] rounded-tr-[50px] mt-5 md:mt-0'>
                                    <div className='bg-[#0047ab] flex justify-center items-center  p-5 rounded-full'>
                                        <FaPlus className=" text-[#f2f2f2] text-3xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
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
