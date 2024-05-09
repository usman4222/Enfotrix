import React, { useEffect, useState } from 'react';
import logo from '../assets/Logo-01.png';
import { Link, useLocation } from 'react-router-dom';
import { IoMdArrowDropright } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const getPageName = () => {
        switch (currentPath) {
            case '/':
                return 'HOME';
            case '/about':
                return 'ABOUT';
            case '/graphic-design':
                return 'GRAPHIC-DESIGN';
            case '/student-intake':
                return 'STUDENT-INTAKE';
            case '/payment':
                return 'PAYMENT';
            case '/faqs':
                return "FAQ'S";
            case '/batches':
                return "BATCHES";
            case '/courses':
                return "COURSES"
            case '/mentors':
                return "MENTORS"
            default:
                return 'undefined';
        }
    };

    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <div className='shadow-md'>
            <header>
                <nav className="w-full z-20 top-0 left-0 ">
                    <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
                        <div>
                            <a className="logo" href="/">
                                <img src={logo} className='object-cover w-48' alt="Logo" />
                            </a>
                            <div className='flex mt-5'>
                                <Link to="/">
                                    <p>HOME</p>
                                </Link>
                                <div className='flex ml-5'>
                                    <div className='flex items-center mr-5'>
                                        <IoMdArrowDropright className='text-3xl' />
                                    </div>
                                    <div>
                                        <p>{getPageName()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="checkbox" id="check" />
                        <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg overflow-y-auto">
                            {/* Menu items */}
                            <div className='hidden lg:block'>
                                <div class="border rounded overflow-hidden flex mr-5 ">
                                    <input type="text" class="px-4 py-2" placeholder="Search for the skills..." />
                                    <button class="flex items-center justify-center px-4 border-l">
                                        <svg class="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                                    </button>
                                </div>
                            </div>
                            <div className='hidden lg:block'>
                                <Link to='/graphic-design hidden lg:block'>
                                    <button className='bg-yellow-300 py-2 px-3 rounded-lg text-gray-700 font-bold'>Apply Now</button>
                                </Link>
                            </div>
                            <ul className="flex gap-2 flex-col lg:hidden">
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
                                        className={`hover:underline text-sm uppercase ${activeLink === '/jobs' && 'text-yellow-500'}`}
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
                            <label for="check" className="close-menu">X</label>
                        </span>
                        <label for="check" className="open-menu"><GiHamburgerMenu className='text-xl' /></label>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
