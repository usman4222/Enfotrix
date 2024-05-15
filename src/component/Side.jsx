import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Side = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="hidden lg:inline-block bg-[#414042] h-[606px] w-[280px] pl-16 pb-20">
      <ul className="flex flex-col gap-4 mt-20 text-[#f2f2f2]">
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
  );
};

export default Side;
