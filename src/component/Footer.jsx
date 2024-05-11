import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import logo from '../assets/Logo-01.png'
import { IoIosArrowUp } from "react-icons/io";
import footerImg from '../assets/Footer Back Image-01.png'
import { Link } from 'react-router-dom';


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
        <footer>
            <div className='bg-[#414042]'>
                <div className='flex md:flex-row md:justify-between py-10 lg:px-16 md:px-10 flex-col '>
                    <div className='flex justify-center pb-10 md:block md:pb-0'>
                        <img src={logo} className='object-cover w-48 filter invert' alt="Logo" />
                    </div>
                    <div className='flex justify-center items-center gap-10 text-2xl text-[#f2f2f2]'>
                        <Link>
                            <FaPhone />
                        </Link>
                        <Link>
                            <FaWhatsapp />
                        </Link>
                        <Link>
                            <FaFacebookF />
                        </Link>
                        <Link>
                            <FaInstagram />
                        </Link>
                        <Link>
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
                <div className='h-[2px] w-full bg-[#f2f2f2]'></div>
                <div className='flex md:flex-row text-[#f2f2f2] mt-16 md:mt-0 lg:py-28 lg:px-16 md:px-10  md:py-14 md:gap-10  absolute justify-between w-[100%] flex-col gap-5'  >
                    <div className='w-auto md:w-[300px]'>
                        <h6 className='text-center ml-2 px-12 md:px-0 md:text-left md:ml-0'>
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
                        <p className='lg:w-[250px] md:w-[180px] px-5 md:px-0'>ENFOTRIX (PVT.)LTD MAIN ZAFARULLAH CHOWK, SARGODHA</p>
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
                        className="fixed bottom-4 z-50 right-4 shadow-2xl bg-[#FFBA21] p-2 transition-opacity duration-300 hover:opacity-75"
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

