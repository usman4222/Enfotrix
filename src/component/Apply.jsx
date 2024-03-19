import React from "react";
import course from "../assets/course.jpg";
import Sidebar from "../component/Sidebar";
import { Link } from "react-router-dom";

const Apply = () => {
  return (
    <div className="md:flex md:justify-around relative">
     
      <div className="md:w-80 md:pl-9 md:pt-20 md:leading-9 hidden md:inline-block">
        <ul className="flex flex-col bg-white">
          <li className="mb-2 md:mb-0">
            <Link to="/" className="hover:underline">
              HOME
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/about" className="hover:underline">
              ABOUT US
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/courses" className="hover:underline">
              OUR COURSES
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/mentors" className="hover:underline">
              MENTORS
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/gallery" className="hover:underline">
              PHOTO GALLERY
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/batches" className="hover:underline">
              BATCHES
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/faqs" className="hover:underline">
              FAQS
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/job-internship" className="hover:underline">
              JOB / INTERNSHIP PORTAL
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/testimonials" className="hover:underline">
              TESTIMONIALS
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/login" className="hover:underline">
              CANDIDATE LOGIN
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link to="/contact" className="hover:underline">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img src={course} className="md:h-[95vh] md:w-screen bg-cover" />
        <div className="md:absolute left-0 top-0 h-full">
        </div>
        <section className="bg-blue-600 text-white px-16 py-9 font-bold flex relative">
          <div>
            <h2 className="text-xl font-bold">CERTIFIED</h2>
            <h1 className="text-4xl font-bold">
              GRAPHIC DESIGN <br /> PROGRAM
            </h1>
          </div>
         
        </section>
      </div>

      <div className=" md:inline-block md:w-1/3  bg-black md:absolute md:right-0 md:-bottom-[1px] ">
            <div className="bg-white text-black flex justify-center p-5">
              <h1 className="text-3xl">COURSE TRACKS</h1>
            </div>
            <div className="bg-black flex flex-col items-center p-8">
              <div>
                <h1 className="text-center">FOR REGULAR CLASSES</h1>
                <button className="bg-yellow-500 rounded-xl px-10  text-center text-black ">
                  APPLY NOW <br />
                  <span>15000, PKR</span>
                </button>
              </div>
              <div className="mt-4">
                <h1 className="text-center">FOR REGULAR CLASSES</h1>
                <button className="bg-yellow-500 rounded-xl px-10  text-center text-black ">
                  APPLY NOW <br />
                  <span>15000, PKR</span>
                </button>
              </div>
            </div>
          </div>
          <Sidebar className=""/>
    </div>
  );
};

export default Apply;
