import React, { useEffect, useState } from "react";
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
import icon1 from '../assets/Icons-04.png'
import icon2 from '../assets/Icons-05.png'
import icon3 from '../assets/Icons-06.png'
import icon4 from '../assets/Icons-07.png'
import icon5 from '../assets/Icons-08.png'
import icon6 from '../assets/Icons-09.png'
import icon7 from '../assets/Icons-01.png'
import icon8 from '../assets/Icons-02.png'
import icon9 from '../assets/Icons-03.png'
import NoticeSection from "./NoticeSection";


const Main = () => {

    const [showIcons, setShowIcons] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <>
                <div className='flex'>
                    <Side />
                    <div className='w-full '>
                        <div className='flex justify-center relative md:block items-center bg-[#0047ab]'>
                            <div className=" bg-[#0047ab] main flex-cols md:flex md:flex-row justify-center items-center md:justify-evenly py-32 md:py-48 lg:py-44">
                                <div className='text-white mb-10 md:mb-0 text-4xl md:text-5xl font-bold'>
                                    <p>2,000+</p>
                                    <p>Candidates</p>
                                    <p>Trained</p>
                                </div>
                                <div className='text-white text-4xl md:text-5xl font-bold'>
                                    <p>5+</p>
                                    <p>Years Of</p>
                                    <p>Experience</p>
                                </div>
                            </div>
                            <div className="flex justify-end pr-[100px]">
                                <div className="flex flex-col gap-2 absolute top-[260px] allicons">
                                    {showIcons && (
                                        <>
                                            <Link>
                                                <img src={icon6} alt="phone" className="w-7 transition-all duration-500" />
                                            </Link>
                                            <Link>
                                                <img src={icon5} alt="whatsapp" className="w-7 transition-all duration-500" />
                                            </Link>
                                            <Link>
                                                <img src={icon4} alt="facebook" className="w-7 transition-all duration-500" />
                                            </Link>
                                            <Link>
                                                <img src={icon3} alt="insta" className="w-7 transition-all duration-500" />
                                            </Link>
                                            <Link>
                                                <img src={icon2} alt="linkedin" className="w-7 transition-all duration-500" />
                                            </Link>
                                            <Link>
                                                <img src={icon1} alt="location" className="w-7 transition-all duration-500" />
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='flex md:block justify-center bg-[#ffba21]'>
                            <div className="bg-[#ffba21] flex-cols md:flex md:flex-row md:justify-evenly ">
                                <div className="flex items-center py-5">
                                    <div className="pb-5 md:pb-4 xl:pb-0"><img src={icon7} alt="location" className="xl:w-8 w-5 pr-2 xl:mr-5 " /></div>
                                    <p className="text-[#414042] font-semibold md:text-sm ">Enfotrix (Pvt.)Ltd Main zafarullah<br />
                                        chowk, Sargodha</p>
                                </div>
                                <div className="flex items-center py-5">
                                    <div><img src={icon8} alt="location" className="w-5 pr-2 xl:mr-5" /></div>
                                    <p className="text-[#414042] lg:text-lg md:text-sm font-semibold">contact@Enfotrix.com</p>
                                </div>
                                <div className="flex items-center py-5">
                                    <div><img src={icon9} alt="location" className="w-5 pr-2 xl:mr-5" /></div>
                                    <p className="text-[#414042] text-xl md:text-sm xl:text-xl font-extrabold">+92 315 5658095</p>
                                </div>
                                <div className='bg-white p-5 cursor-pointer rounded-tl-[50px] rounded-tr-[50px] mt-5 md:mt-0'>
                                    <div className={`bg-[#0047ab] flex justify-center items-center  p-5 rounded-full ${showIcons ? 'bg-opacity-50' : ''}`} onClick={() => setShowIcons(!showIcons)}>
                                        <FaPlus className="text-[#f2f2f2] text-3xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <Companies />
            <NoticeSection/>
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
