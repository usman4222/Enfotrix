import React from 'react'
import logo from '../assets/Logo-01.png'

const Header = () => {
    return (
        <div>
            <header>
                <nav className="w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                    <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
                        <a className="logo" href="#">
                            <img src={logo} className='object-cover w-48'/>
                        </a>
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
                            <button className='bg-yellow-300 py-2 px-3 rounded-lg text-gray-700 font-bold'>Apply Now</button>
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
