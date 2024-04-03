import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='absolute  top-5  left-5   lg:hidden'>
      <button
        onClick={toggleSidebar}
      >
        {isOpen ? <IoClose className="size-7 -mt-9 rounded  -ml-4" /> : <IoMenu className="size-7 -mt-9  -ml-4" />}
      </button>

      <div
        className="sidebar md:w-72 w-60 rounded bg-white shadow-xl pt-3 pb-4 md:px-8 md:leading-9 md:text-left "
        style={{ opacity: isOpen ? 1 : 0, transform: isOpen ? 'translateX(-7%)' : 'translateX(-10%)', transitionDuration: '0.5s' }}
      >
        {isOpen && (
          <ul className="flex flex-col   pl-7 ">
            <li className="mb-2 md:mb-0">
              <Link to="/" onClick={toggleSidebar}>
                HOME
              </Link>
            </li>
            <li className="mb-2 md:mb-0">
              <Link to="/about" onClick={toggleSidebar}>
                ABOUT US
              </Link>
            </li>
            <li className="mb-2 md:mb-0">
              <Link to="/courses" onClick={toggleSidebar}>
                OUR COURSES
              </Link>
            </li>
            <li className="mb-2 md:mb-0">
              <Link to="/mentors" onClick={toggleSidebar}>
                MENTORS
              </Link>
            </li>
            <li className="mb-2 md:mb-0">
              <Link to="/gallery" onClick={toggleSidebar}>
                PHOTO GALLERY
              </Link>
            </li>
            <li className="mb-2 md:mb-0">
              <Link to="/batches" onClick={toggleSidebar}>
                BATCHES
              </Link>
            </li>
            <li className="mb-2 md:mb-0">
              <Link to="/faqs" onClick={toggleSidebar}>
                FAQS
              </Link>
            </li>
            <li className="mb-2 md:mb-0">
              <Link to="/job-internship" onClick={toggleSidebar}>
                JOB / INTERNSHIP PORTAL
              </Link>
            </li>
            <li className="mb-2 md:mb-0">
              <Link to="/testimonials" onClick={toggleSidebar}>
                TESTIMONIALS
              </Link>
            </li>
            <li className="mb-2 md:mb-0">
              <Link to="/login" onClick={toggleSidebar}>
                CANDIDATE LOGIN
              </Link>
            </li>
            <li className="mb-2 md:mb-0">
              <Link to="/contact" onClick={toggleSidebar}>
                CONTACT
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
