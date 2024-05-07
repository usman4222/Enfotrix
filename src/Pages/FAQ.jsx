import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Side from '../component/Side';

const FAQ = () => {
    const [isOpen, setIsOpen] = useState([false, false, false]);

    const toggleOpenArrow = (index) => {
        const updatedIsOpen = [...isOpen];
        updatedIsOpen[index] = !updatedIsOpen[index];
        setIsOpen(updatedIsOpen);
    };

    return (
        <div className='flex'>
            <Side />
            <div className='bg-[#f2f2f2] w-full'>
                <div className='pt-10 pb-5 '>
                    <h1 className='text-4xl text-center font-bold p-5 md:p-0 text-[#414042]'>FREQUENTLY ASKED QUESTIONS</h1>
                    <p className='text-center text-[#414042] space-x-2 uppercase py-6'>Discover answers to common questions about our courses, services, and payments in our FAQ section.</p>
                </div>
                <div className='md:px-16 px-8 '>
                    <div className='flex justify-between cursor-pointer' onClick={() => toggleOpenArrow(0)}>
                        <p className='text-xl md:text-xl text-[#414042] ml-10'>Where are you located?</p>
                        <div className='flex items-center text-3xl mr-5' >
                            {isOpen[0] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                    </div>
                    <hr class="my-4 border-t-2 border-black" />
                    {isOpen[0] && (
                        <h3 className='text-lg px-10 mb-10'>Our educational programs are primarily conducted at our Enfotrix Pvt. Ltd. campus, conveniently located near <span className='font-extrabold'>Zafarullah Chowk near burj e huraira, Sargodha, Pakistan.</span> However, for individuals residing in other cities, we also provide the option to enroll in our fast-track educational programs online, ensuring accessibility regardless of geographical location</h3>
                    )}
                </div>
                <div className='md:px-16 px-8'>
                    <div className='flex justify-between cursor-pointer' onClick={() => toggleOpenArrow(1)}>
                        <p className='text-xl md:text-xl text-[#414042] ml-10'>What are the available installment plans for course fees?</p>
                        <div className='flex items-center text-3xl mr-5 ' >
                            {isOpen[1] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                    </div>
                    <hr class="my-4 border-t-2 border-black" />
                    {isOpen[1] && (
                        <h3 className='text-lg px-10 mb-10'>Our educational programs are primarily conducted at our Enfotrix Pvt. Ltd. campus, conveniently located near <span className='font-extrabold'>Zafarullah Chowk near burj e huraira, Sargodha, Pakistan.</span> However, for individuals residing in other cities, we also provide the option to enroll in our fast-track educational programs online, ensuring accessibility regardless of geographical location</h3>
                    )}
                </div>
                <div className='md:px-16 px-8'>
                    <div className='flex justify-between cursor-pointer' onClick={() => toggleOpenArrow(2)}>
                        <p className='text-xl md:text-xl text-[#414042] ml-10'>Are your courses available online, or are they only offered in physical classes?</p>
                        <div className='flex items-center text-3xl mr-5 ' >
                            {isOpen[2] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                    </div>
                    <hr class="my-4 border-t-2 border-black" />
                    {isOpen[2] && (
                        <h3 className='text-lg px-10 mb-10'>Our educational programs are primarily conducted at our Enfotrix Pvt. Ltd. campus, conveniently located near <span className='font-extrabold'>Zafarullah Chowk near burj e huraira, Sargodha, Pakistan.</span> However, for individuals residing in other cities, we also provide the option to enroll in our fast-track educational programs online, ensuring accessibility regardless of geographical location</h3>
                    )}
                </div>
                <div className='md:px-16 px-8'>
                    <div className='flex justify-between cursor-pointer' onClick={() => toggleOpenArrow(3)}>
                        <p className='text-xl md:text-xl text-[#414042] ml-10'>How do I apply for a course?
                        </p>
                        <div className='flex items-center text-3xl mr-5 ' >
                            {isOpen[3] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                    </div>
                    <hr class="my-4 border-t-2 border-black" />
                    {isOpen[3] && (
                        <h3 className='text-lg px-10 mb-10'>Our educational programs are primarily conducted at our Enfotrix Pvt. Ltd. campus, conveniently located near <span className='font-extrabold'>Zafarullah Chowk near burj e huraira, Sargodha, Pakistan.</span> However, for individuals residing in other cities, we also provide the option to enroll in our fast-track educational programs online, ensuring accessibility regardless of geographical location</h3>
                    )}
                </div>
                <div className='md:px-16 px-8'>
                    <div className='flex justify-between cursor-pointer' onClick={() => toggleOpenArrow(4)}>
                        <p className='text-xl md:text-xl text-[#414042] ml-10'>What is Life Changer, and how is it linked with Enfotrix?</p>
                        <div className='flex items-center text-3xl mr-5 ' >
                            {isOpen[4] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                    </div>
                    <hr class="my-4 border-t-2 border-black" />
                    {isOpen[4] && (
                        <h3 className='text-lg px-10 mb-10'>Our educational programs are primarily conducted at our Enfotrix Pvt. Ltd. campus, conveniently located near <span className='font-extrabold'>Zafarullah Chowk near burj e huraira, Sargodha, Pakistan.</span> However, for individuals residing in other cities, we also provide the option to enroll in our fast-track educational programs online, ensuring accessibility regardless of geographical location</h3>
                    )}
                </div>
                <div className='md:px-16 px-8'>
                    <div className='flex justify-between cursor-pointer' onClick={() => toggleOpenArrow(5)}>
                        <p className='text-xl md:text-xl text-[#414042] ml-10'>What investment plans does Life Changer offer?</p>
                        <div className='flex items-center text-3xl mr-5 ' >
                            {isOpen[5] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                    </div>
                    <hr class="my-4 border-t-2 border-black" />
                    {isOpen[5] && (
                        <h3 className='text-lg px-10 mb-10'>Our educational programs are primarily conducted at our Enfotrix Pvt. Ltd. campus, conveniently located near <span className='font-extrabold'>Zafarullah Chowk near burj e huraira, Sargodha, Pakistan.</span> However, for individuals residing in other cities, we also provide the option to enroll in our fast-track educational programs online, ensuring accessibility regardless of geographical location</h3>
                    )}
                </div>
                <div className='md:px-16 px-8'>
                    <div className='flex justify-between cursor-pointer' onClick={() => toggleOpenArrow(6)}>
                        <p className='text-xl md:text-xl text-[#414042] ml-10'>Who is the CEO of Enfotrix?</p>
                        <div className='flex items-center text-3xl mr-5 ' >
                            {isOpen[6] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                    </div>
                    <hr class="my-4 border-t-2 border-black" />
                    {isOpen[6] && (
                        <h3 className='text-lg px-10 mb-10'>Our educational programs are primarily conducted at our Enfotrix Pvt. Ltd. campus, conveniently located near <span className='font-extrabold'>Zafarullah Chowk near burj e huraira, Sargodha, Pakistan.</span> However, for individuals residing in other cities, we also provide the option to enroll in our fast-track educational programs online, ensuring accessibility regardless of geographical location</h3>
                    )}
                </div>
                <div className='md:px-16 px-8'>
                    <div className='flex justify-between cursor-pointer ' onClick={() => toggleOpenArrow(7)}>
                        <p className='text-xl md:text-xl text-[#414042] ml-10'>How many branches does Enfotrix have?</p>
                        <div className='flex items-center text-3xl mr-5 ' >
                            {isOpen[7] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                    </div>
                    <hr class="my-4 border-t-2 border-black" />
                    {isOpen[7] && (
                        <h3 className='text-lg px-10 mb-10'>Our educational programs are primarily conducted at our Enfotrix Pvt. Ltd. campus, conveniently located near <span className='font-extrabold'>Zafarullah Chowk near burj e huraira, Sargodha, Pakistan.</span> However, for individuals residing in other cities, we also provide the option to enroll in our fast-track educational programs online, ensuring accessibility regardless of geographical location</h3>
                    )}
                </div>
                <div className='md:px-16 px-8'>
                    <div className='flex justify-between cursor-pointer' onClick={() => toggleOpenArrow(8)}>
                        <p className='text-xl md:text-xl text-[#414042] ml-10'>What visa consultancy services do you provide?</p>
                        <div className='flex items-center text-3xl mr-5 ' >
                            {isOpen[8] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                    </div>
                    <hr class="my-4 border-t-2 border-black" />
                    {isOpen[8] && (
                        <h3 className='text-lg px-10 mb-10'>Our educational programs are primarily conducted at our Enfotrix Pvt. Ltd. campus, conveniently located near <span className='font-extrabold'>Zafarullah Chowk near burj e huraira, Sargodha, Pakistan.</span> However, for individuals residing in other cities, we also provide the option to enroll in our fast-track educational programs online, ensuring accessibility regardless of geographical location</h3>
                    )}
                </div>
                <div className='md:px-16 px-8'>
                    <div className='flex justify-between  cursor-pointer' onClick={() => toggleOpenArrow(9)}>
                        <p className='text-xl md:text-xl text-[#414042] ml-10'>Do you offer Umrah packages and ticketing services?</p>
                        <div className='flex items-center text-3xl mr-5' >
                            {isOpen[9] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                    </div>
                    <hr class="my-4 border-t-2 border-black" />
                    {isOpen[9] && (
                        <h3 className='text-lg px-10 mb-10'>Our educational programs are primarily conducted at our Enfotrix Pvt. Ltd. campus, conveniently located near <span className='font-extrabold'>Zafarullah Chowk near burj e huraira, Sargodha, Pakistan.</span> However, for individuals residing in other cities, we also provide the option to enroll in our fast-track educational programs online, ensuring accessibility regardless of geographical location</h3>
                    )}
                </div>
                <div className='md:px-16 px-8 pb-14'>
                    <div className='flex justify-between cursor-pointer' onClick={() => toggleOpenArrow(10)}>
                        <p className='text-xl md:text-xl text-[#414042] ml-10'>How can I contact Enfotrix for further inquiries?</p>
                        <div className='flex items-center text-3xl mr-5 ' >
                            {isOpen[10] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                    </div>
                    {isOpen[10] && (
                        <h3 className='text-lg px-10 mb-10'>Our educational programs are primarily conducted at our Enfotrix Pvt. Ltd. campus, conveniently located near <span className='font-extrabold'>Zafarullah Chowk near burj e huraira, Sargodha, Pakistan.</span> However, for individuals residing in other cities, we also provide the option to enroll in our fast-track educational programs online, ensuring accessibility regardless of geographical location</h3>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
