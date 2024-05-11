import React, { useEffect } from 'react'
import person from '../assets/Support Icon-01.png'
import Side from './Side'
import { Link } from 'react-router-dom'
import RefundPolicy from './RefundPolicy'

const IntakeForm = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='flex'>
                <div className='flex flex-col'>
                    <Side />
                    <RefundPolicy />
                </div>
                <div className='w-full'>
                    <div>
                        <h2 className='text-center font-bold text-[#414042] text-4xl uppercase px-3 md:px-0 py-5'>Student Intake</h2>
                        <p className='text-center text-[#414042] space-x-2 uppercase'>Graphic designn batch II <span className='text-blue-500 underline'>online</span></p>
                    </div>
                    <div className='py-5 px-10'>
                        <div className='bg-slate-500 w-full h-[10px] flex '>
                            <div className='bg-[#ffba21] w-[70%]'></div>
                            <div className='bg-[#414042] w-[30%]'></div>
                        </div>
                    </div>
                    <div className='px-10'>
                        <div className='mt-2'>
                            <h4 className='font-bold text-sm uppercase py-3'>your name*</h4>
                            <input type="text" name="" className='bg-[#f2f2f2] w-full py-2 focus:ring-0 focus:outline-none pl-5' placeholder='Enter Your Full Name' id="" />
                        </div>
                        <div className='mt-2'>
                            <h4 className='font-bold text-sm uppercase py-3'>your email*</h4>
                            <input type="text" name="" className='bg-[#f2f2f2] w-full py-2 focus:ring-0 focus:outline-none pl-5' placeholder='Enter Your Email Adress here' id="" />
                        </div>
                        <div className='mt-2'>
                            <h4 className='font-bold text-sm uppercase py-3'>city*</h4>
                            <input type="text" name="" className='bg-[#f2f2f2] w-full py-2 focus:ring-0 focus:outline-none pl-5' placeholder='Enter Your City' id="" />
                        </div>
                        <div className='mt-2'>
                            <h4 className='font-bold text-sm uppercase py-3'>whatsapp number*</h4>
                            <input type="text" name="" className='bg-[#f2f2f2] w-full py-2 focus:ring-0 focus:outline-none pl-5' placeholder='Enter Your whatsapp number' id="" />
                        </div>
                        <div className='mt-2'>
                            <h4 className='font-bold text-sm uppercase py-3'>select your age</h4>
                            <select id="mySelect" class="bg-[#f2f2f2] text-gray-400 !important w-full py-2 focus:ring-0 focus:outline-none pl-5">
                                <option value="option1" class="bg-[#f2f2f2]">24</option>
                                <option value="option2" class="bg-[#f2f2f2]">23</option>
                                <option value="option3" class="bg-[#f2f2f2]">22</option>
                                <option value="option4" class="bg-[#f2f2f2]">21</option>
                            </select>
                        </div>
                        <div className='mt-2'>
                            <h4 className='font-bold text-sm uppercase py-3'>your qualification</h4>
                            <select id="mySelect" class="bg-[#f2f2f2] text-gray-400 !important uppercase w-full py-2 focus:ring-0 focus:outline-none pl-5">
                                <option value="option1" class="bg-[#f2f2f2]">matric</option>
                                <option value="option2" class="bg-[#f2f2f2]">middle</option>
                                <option value="option3" class="bg-[#f2f2f2]">fsc</option>
                            </select>
                        </div>
                        <div className='md:flex md:px-10 lg:px-0 md:flex-row md:justify-between flex flex-col justify-center items-center md:py-8 py-12'>
                            <Link to='/student-intake'>
                                <button className='mb-10 md:mb-0  px-20 py-3 md:py-3 text-[#414042] font-bold text-xl uppercase rounded-full'>back</button>
                            </Link>
                            <Link to='/payment'>
                                <button className='bg-[#0047ab] px-20 py-3 text-[#f2f2f2] font-bold text-xl uppercase rounded-full'>Next</button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:justify-evenly py-8 bg-[#f2f2f2]'>
                        <div className='uppercase text-lg text-[#414042] font-bold text-center mt-10 mb-7 lg:mb-0'><p className='px-10 md:px-0'>how you will be contacted?</p></div>
                        <div className='text-[#414042] text-center lg:text-left '>
                            <p className='px-10 md:px-0'>Upon the submission of this form, we will contact you through <br className='hidden md:block' /> your <span className='font-bold'>WhatsApp number</span> or
                                <span className='font-bold'> email adddress</span> to share Graphic <br className='hidden md:block' /> Design Batch II 2024 Student Portal Login ID and other <br className='hidden md:block' /> relevant details with you.
                            </p>
                        </div>
                    </div>
                    <div className='bg-[#0047ab] md:py-7 flex flex-col md:flex-row md:justify-between px-10 items-center py-10'>
                        <div className='md:flex-row md:justify-between flex flex-col items-center gap-10 mb-5 md:mb-0'>
                            <div className="flex justify-center">
                                <img className='object-cover w-20' src={person} alt="Person" />
                            </div>
                            <div className="text-center sm:text-left py-3 md:py-0">
                                <h3 className='text-[#f2f2f2] font-bold uppercase text-xl'>still need any help</h3>
                                <p className='text-[#f2f2f2] py-1 px-3 md:px-0 lg:pr-5'>if you have any confusions, don't hesitate to contact support</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className='bg-[#f2f2f2] px-6 py-3 text-[#414042] font-bold text-lg uppercase rounded-full md:px-10'>contact support</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntakeForm
