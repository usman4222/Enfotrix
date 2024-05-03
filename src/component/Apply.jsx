import React from "react";
import course from "../assets/course.jpg";
import Sidebar from "../component/Sidebar";
import { Link } from "react-router-dom";

const Apply = () => {
  return (
    <div className="md:flex md:justify-around relative">
      <div className="md:w-[30rem] md:pl-9 md:pt-20 md:leading-10 hidden md:inline-block">
        <ul className="flex flex-col bg-white">
          <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
            <Link to="/" className="hover:underline md:text-xl pb-8">
              HOME
            </Link>
          </li>
          <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
            <Link to="/about" className="hover:underline md:text-xl ">
              ABOUT US
            </Link>
          </li>
          <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
            <Link to="/courses" className="hover:underline md:text-xl ">
              OUR COURSES
            </Link>
          </li>
          <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
            <Link to="/mentors" className="hover:underline md:text-xl ">
              MENTORS
            </Link>
          </li>
          <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
            <Link to="/gallery" className="hover:underline md:text-xl ">
              PHOTO GALLERY
            </Link>
          </li>
          <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
            <Link to="/batches" className="hover:underline md:text-xl ">
              BATCHES
            </Link>
          </li>
          <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
            <Link to="/faqs" className="hover:underline md:text-xl ">
              FAQS
            </Link>
          </li>
          <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
            <Link to="/job-internship" className="hover:underline md:text-xl ">
              JOB / INTERNSHIP PORTAL
            </Link>
          </li>
          <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
            <Link to="/testimonials" className="hover:underline md:text-xl ">
              TESTIMONIALS
            </Link>
          </li>
          <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
            <Link to="/login" className="hover:underline md:text-xl ">
              CANDIDATE LOGIN
            </Link>
          </li>
          <li className="mb-2 md:mb-0 md:pb-3 md:pl-14 pb-2">
            <Link to="/contact" className="hover:underline md:text-xl ">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img src={course} className="md:h-[70vh] h-[36vh] md:w-screen bg-cover" />
        <div className="md:absolute left-0 top-0 h-full"></div>
        <section className="bg-blue-600 text-white px-20  py-7 md:px-20 md:py-16 font-bold flex relative">
          <div>
            <h2 className="md:text-[29px] text-lg font-bold ">CERTIFIED</h2>
            <h1 className="md:text-3xl lg:text-5xl lg: text-2xl  font-bold">
              GRAPHIC DESIGN <br /> PROGRAM
            </h1>
          </div>
        </section>
      </div>

      <div className=" md:inline-block md:w-[28%]  bg-black md:absolute md:right-0 md:-bottom-[1px] ">
        <div className="bg-white text-black flex justify-center p-5">
          <h1 className="text-3xl md md:font-bold">COURSE TRACKS</h1>
        </div>
        <div className="bg-black flex flex-col items-center p-8">
          <div className="text-center md:text-center  md:font-bold font-bold">
            <h1 className="md:text-center  md:text-white md:text-xl text-white    text-center text-xl  md:pb-3 pb-2">
              FOR ONLINE CLASSES
            </h1>
            <button className="bg-[#ffba21] md:px-20 px-20 md:flex md:flex-col md:items-center items-center md:rounded-xl rounded-md">
              <span className="md:text-[28px] md:rounded-2xl rounded-xl text-20 pt-16">
                APPLY NOW{" "}
              </span>
              <span className="md:text-xl md:-mt-1">5000,PKR</span>
            </button>
          </div>
          <div className="text-center md:text-center font-bold md:pt-12 pt-7">
            <h1 className="md:text-center  md:text-white md:text-xl text-white    text-center text-xl  md:pb-3 pb-2">
              FOR REGULAR CLASSES
            </h1>
            <button className="bg-[#ffba21] md:px-20 px-20 md:flex md:flex-col md:items-center items-center md:rounded-xl rounded-md">
              <span className="md:text-[28px] md:rounded-2xl rounded-xl text-20 pt-16">
                APPLY NOW{" "}
              </span>
              <span className="md:text-xl md:-mt-1">15000,PKR</span>
            </button>
          </div>
        </div>
      </div>
      <Sidebar className="" />
    </div>
  );
};

export default Apply;
