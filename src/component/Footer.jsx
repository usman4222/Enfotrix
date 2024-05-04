import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import logo from '../assets/Logo-01.png'
import { IoIosArrowUp } from "react-icons/io";
import footerImg from '../assets/Footer Back Image-01.png'

const Footer = () => {


    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);

    return (
        // <footer className="bg-[#414042] flex flex-col h-full">
        //     <div className="pt-6 mt-12 border-b border-white-800">
        //         <div className="text-center sm:flex sm:justify-between sm:text-left px-20 mb-8">
        //             <div>
        //                 <img src={logo} className='object-cover w-48 filter invert' alt="Logo" />
        //             </div>
        // <div className='flex justify-center items-center gap-6 text-[#f2f2f2] text-2xl'>
        //     <span>
        //         <FaPhone />
        //     </span>
        //     <span>
        //         <FaWhatsapp />
        //     </span>
        //     <span>
        //         <FaFacebook />
        //     </span>
        //     <span>
        //         <FaLinkedinIn />
        //     </span>
        //     <span>
        //         <FaInstagram />
        //     </span>
        // </div>
        //         </div>
        //     </div>
        //     <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 ">
        //         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
        //             <div>
        //                 <p
        //                     className="max-w-md mx-auto mt-6 leading-relaxed text-center text-[#f2f2f2] sm:max-w-xs sm:mx-0 sm:text-left"
        //                 >
        //                     ENFOTRIX, A LEADING IT AND SOFTWARE
        //                     DEVELOPMENT FIRM, EMPOWERS
        //                     INDIVIDUALS THROUGH CUTTING-EDGE
        //                     EDUCATIONAL INITIATIVES AND
        //                     INNOVATIVE SOLUTIONS, FOSTERING THE
        //                     LEADERS OF TOMORROW.
        //                 </p>
        //             </div>

        //             <div
        //                 className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4 "
        //             >
        //                 <div className="text-center sm:text-left lg:w-[300px] lg:ml-10">
        //                     {/* <p className="text-lg font-medium text-white">About Us</p> */}
        //                     <nav className="mt-8">
        //                         <ul className="space-y-4 text-sm">
        //                             <li>
        //                                 <a className="text-[#f2f2f2] transition hover:text-white/75" href="/">
        //                                     KNOW MORE ABOUT ENFOTRIX
        //                                 </a>
        //                             </li>

        //                             <li>
        //                                 <a className="text-[#f2f2f2] transition hover:text-white/75" href="/">
        //                                     VOICES OF SUCCESS
        //                                 </a>
        //                             </li>

        //                             <li>
        //                                 <a className="text-[#f2f2f2] transition hover:text-white/75" href="/">
        //                                     ABOUT LIFE CHANGER
        //                                 </a>
        //                             </li>

        //                             <li>
        //                                 <a className="text-[#f2f2f2] transition hover:text-white/75" href="/">
        //                                     KNOW MORE ABOUT SORIIC
        //                                 </a>
        //                             </li>
        //                         </ul>
        //                     </nav>
        //                 </div>

        //                 <div className="text-center mt-20 md:mt-0 sm:text-left lg:ml-40 lg:w-[300px] md:ml-32 md:w-[250px]">
        //                     <p className="text-lg font-medium text-[#f2f2f2]">Get In Touch</p>

        //                     <ul className="mt-8 space-y-4 text-sm">
        //                         <li>
        //                             <a
        //                                 className="flex items-center justify-center sm:justify-start gap-1.5 group"
        //                                 href="/"
        //                             >
        //                                 <svg
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     className="w-5 h-5 text-[#f2f2f2] shrink-0"
        //                                     fill="none"
        //                                     viewBox="0 0 24 24"
        //                                     stroke="currentColor"
        //                                     strokeWidth="2"
        //                                 >
        //                                     <path
        //                                         strokeLinecap="round"
        //                                         strokeLinejoin="round"
        //                                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        //                                     />
        //                                 </svg>

        //                                 <span className="text-[#f2f2f2] transition group-hover:text-white/75">
        //                                     contact@Enfotrix.com
        //                                 </span>
        //                             </a>
        //                         </li>

        //                         <li>
        //                             <a
        //                                 className="flex items-center justify-center sm:justify-start gap-1.5 group"
        //                                 href="/"
        //                             >
        //                                 <svg
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     className="w-5 h-5 text-[#f2f2f2] shrink-0"
        //                                     fill="none"
        //                                     viewBox="0 0 24 24"
        //                                     stroke="currentColor"
        //                                     strokeWidth="2"
        //                                 >
        //                                     <path
        //                                         strokeLinecap="round"
        //                                         strokeLinejoin="round"
        //                                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        //                                     />
        //                                 </svg>

        //                                 <span className="text-[#f2f2f2] transition group-hover:text-white/75">
        //                                     +92 315 5658095
        //                                 </span>
        //                             </a>
        //                         </li>

        //                         <li
        //                             className="flex items-start justify-center gap-1.5 sm:justify-start"
        //                         >
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="w-5 h-5 text-[#f2f2f2] shrink-0"
        //                                 fill="none"
        //                                 viewBox="0 0 24 24"
        //                                 stroke="currentColor"
        //                                 strokeWidth="2"
        //                             >
        //                                 <path
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                     d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        //                                 />
        //                                 <path
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                     d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        //                                 />
        //                             </svg>

        //                             <address className="-mt-0.5 not-italic text-[#f2f2f2]">
        //                                 ENFOTRIX (PVT.)LTD MAIN ZAFARULLAH
        //                                 CHOWK, SARGODHA
        //                             </address>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // <div className="pt-6 mt-12 border-t border-gray-800 px-20 pb-5">
        //     <div className="text-center sm:flex sm:justify-between sm:text-left ">
        //         <p className="text-sm text-gray-400">
        //             <span className="block sm:inline">All rights reserved.</span>

        //             <a
        //                 className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
        //                 href="/"
        //             >
        //                 Terms & Conditions
        //             </a>

        //             <span>&middot;</span>

        //             <a
        //                 className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
        //                 href="/"
        //             >
        //                 Privacy Policy
        //             </a>
        //         </p>

        //         <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
        //             Copyright ©2023 Enfotrix | All rights reserved
        //         </p>
        //     </div>
        // </div>

        // </footer>
        <footer>
            <div className='bg-[#414042]'>
                <div className='flex md:flex-row md:justify-between py-10 lg:px-16 md:px-10 flex-col '>
                    <div className='flex justify-center pb-10 md:block md:pb-0'>
                        <img src={logo} className='object-cover w-48 filter invert' alt="Logo" />
                    </div>
                    <div className='flex justify-center items-center gap-6 text-2xl text-[#f2f2f2]'>
                        <span>
                            <FaPhone />
                        </span>
                        <span>
                            <FaWhatsapp />
                        </span>
                        <span>
                            <FaFacebook />
                        </span>
                        <span>
                            <FaLinkedinIn />
                        </span>
                        <span>
                            <FaInstagram />
                        </span>
                    </div>
                </div>
                <div className='h-[2px] w-full bg-[#f2f2f2]'></div>
                <div className='flex md:flex-row text-[#f2f2f2] mt-16 md:mt-0 lg:py-28 lg:px-16 md:px-10  md:py-14 md:gap-10  absolute justify-between w-[100%] flex-col gap-5'  >
                    <div className='w-[300px] '>
                        <h6 className='text-center ml-2 md:text-left md:ml-0'>
                            ENFOTRIX, A LEADING IT AND SOFTWARE
                            DEVELOPMENT FIRM, EMPOWERS
                            INDIVIDUALS THROUGH CUTTING-EDGE
                            EDUCATIONAL INITIATIVES AND
                            INNOVATIVE SOLUTIONS, FOSTERING THE
                            LEADERS OF TOMORROW.
                        </h6>
                    </div>
                    <div className='flex flex-col  lg:gap-10 md:gap-5 underline text-center md:text-left my-3 md:my-0'>
                        <a>KNOW MORE ABOUT ENFOTRIX</a>
                        <a className='pt-2 md:pt-0'>VOICES OF SUCCESS</a>
                        <a className='pt-2 md:pt-0'>ABOUT LIFE CHANGER</a>
                        <a className='pt-2 md:pt-0'>KNOW MORE ABOUT SORIIC</a>
                    </div>
                    <div className='flex flex-col lg:gap-5 md:gap-2 text-center md:text-left'>
                        <h3 className='font-bold text-xl mb-4'>GET IN TOUCH</h3>
                        <p className='lg:w-[250px] md:w-[180px]'>ENFOTRIX (PVT.)LTD MAIN ZAFARULLAH CHOWK, SARGODHA</p>
                        <p className='pt-2 md:pt-0'>contact@Enfotrix.com</p>
                        <p className='pt-2 md:pt-0'>+92 315 5658095</p>
                    </div>
                </div>
                <img className='relative pt-16  h-[584px] md:h-auto' src={footerImg} alt="footer" />
                {/* <div className='flex justify-between text-[#f2f2f2] py-5 px-16'>
                    <div>
                        <p>Copyright ©2023 Enfotrix | All rights reserved</p>
                    </div>
                    <div>Design: Arslan Khalid Development: ABC</div>
                </div> */}
                <div className="pt-6 mt-12 border-t border-gray-800 px-20 pb-5">
                    <div className="text-center sm:flex sm:justify-between sm:text-left ">
                        <p className="text-sm text-gray-400">
                            <span className="block sm:inline">All rights reserved.</span>
                            <a
                                className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                                href="/"
                            >
                                Terms & Conditions
                            </a>

                            <span>&middot;</span>

                            <a
                                className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                                href="/"
                            >
                                Privacy Policy
                            </a>
                        </p>

                        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                            Copyright ©2023 Enfotrix | All rights reserved
                        </p>
                    </div>
                </div>
                {showButton && (
                    <button
                        className="fixed bottom-4 z-50 right-4 bg-[#FFBA21] p-2 transition-opacity duration-300 hover:opacity-75"
                        onClick={handleClick}
                    >
                        <IoIosArrowUp className="text-[#414042] text-4xl" />
                    </button>
                )}
            </div>
        </footer>
    )
}

export default Footer

