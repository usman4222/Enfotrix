import React from 'react'
import logo from '../assets/Logo-01.png'
import { Link, useLocation } from 'react-router-dom'
import { IoMdArrowDropright } from "react-icons/io";

const Header = () => {

    const location = useLocation();
    const currentPath = location.pathname;
    const getPageName = () => {
        switch (currentPath) {
            case '/':
                return 'Home';
            case '/about':
                return 'About';
            case '/graphic-design':
                return 'Graphic Design';
            case '/student-intake':
                return 'Student Intake';
            case '/payment':
                return 'Payment';
            default:
                return 'undefined';
        }
    };

    return (
        <div>
            <header>
                <nav className="w-full z-20 top-0 left-0 border-b border-gray-200 ">
                    <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
                        <div>
                            <a className="logo" href="/">
                                <img src={logo} className='object-cover w-48' alt="Logo" />
                            </a>
                            <div className='flex mt-5'>
                                <Link to="/">
                                    <p>Home</p>
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

                        <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
                            {/* <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">Contact</a></li> */}
                            <div class="border rounded overflow-hidden flex mr-5">
                                <input type="text" class="px-4 py-2" placeholder="Search for the skills..." />
                                <button class="flex items-center justify-center px-4 border-l">
                                    <svg class="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                                </button>
                            </div>
                            <Link to='/graphic-design'>
                                <button className='bg-yellow-300 py-2 px-3 rounded-lg text-gray-700 font-bold'>Apply Now</button>
                            </Link>
                            <label for="check" className="close-menu">X</label>
                        </span>

                        <label for="check" className="open-menu">Menu</label>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
