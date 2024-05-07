import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Side from './Side';

const PaymentProcess = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='flex'>
                <div>
                    <Side />
                </div>
                <div className='w-full'>
                    <div>
                        <h2 className='text-center font-bold text-[#414042] text-4xl uppercase px-3 md:px-0 py-5'>Student Intake</h2>
                        <p className='text-center text-[#414042] space-x-2 uppercase'>Graphic designn batch II (online)</p>
                    </div>
                    <div className='py-5'>
                        <div className='bg-slate-500 w-full h-[10px] flex '>
                            <div className='bg-[#ffba21] w-[100%]'></div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#0047ab] py-10'>
                            <h3 className='text-center text-[#f2f2f2] font-bold text-2xl uppercase'>Payment Processs !</h3>
                            <p className='text-center text-[#f2f2f2] py-2 px-4 md:px-0'>Please transfer a payment of PKR5,000 into mentioned bank account and click on payment Confirmed Button</p>
                        </div>
                    </div>
                    <div className='bg-[#414042] flex flex-col md:flex-row justify-evenly mb-10'>
                        <div className='text-center py-10'>
                            <p className='uppercase text-[#f2f2f2]'>title</p>
                            <h3 className='uppercase text-[#f2f2f2] font-bold py-5'>enfotrix</h3>
                        </div>
                        <div className='text-center py-10'>
                            <p className='uppercase text-[#f2f2f2]'>bank name</p>
                            <h3 className='uppercase text-[#f2f2f2] font-bold py-5'>hbl</h3>
                        </div>
                        <div className='text-center py-10'>
                            <p className='uppercase text-[#f2f2f2]'>account</p>
                            <h3 className='uppercase text-[#f2f2f2] font-bold py-5'>3421143231434123</h3>
                        </div>
                    </div>
                    <div className='px-10'>
                        <div className='mt-2'>
                            <h4 className='font-bold text-sm uppercase py-3'>choose a payment method</h4>
                            <select id="mySelect" class="bg-[#f2f2f2] text-gray-400 !important w-full py-2 focus:ring-0 focus:outline-none pl-5">
                                <option value="option1" class="bg-[#f2f2f2]">Online Fund Transfer</option>
                                <option value="option2" class="bg-[#f2f2f2]">23</option>
                                <option value="option3" class="bg-[#f2f2f2]">22</option>
                                <option value="option4" class="bg-[#f2f2f2]">21</option>
                            </select>
                        </div>
                        <div className='mt-2'>
                            <h4 className='font-bold text-sm uppercase py-3'>choose a bank account</h4>
                            <select id="mySelect" class="bg-[#f2f2f2] text-gray-400 !important w-full py-2 focus:ring-0 focus:outline-none pl-5">
                                <option value="option1" class="bg-[#f2f2f2]">Online Fund Transfer</option>
                                <option value="option2" class="bg-[#f2f2f2]">23</option>
                                <option value="option3" class="bg-[#f2f2f2]">22</option>
                                <option value="option4" class="bg-[#f2f2f2]">21</option>
                            </select>
                        </div>
                        <div className='mt-2'>
                            <h4 className='font-bold text-sm uppercase py-3'>bank account title*</h4>
                            <input type="text" name="" className='bg-[#f2f2f2] w-full py-2 focus:ring-0 focus:outline-none pl-5' placeholder='Enter Bank Account Title' id="" />
                        </div>
                        <div className='mt-2'>
                            <h4 className='font-bold text-sm uppercase py-3'>last 4 digit of your bank account*</h4>
                            <input type="text" name="" className='bg-[#f2f2f2] w-full py-2 focus:ring-0 focus:outline-none pl-5' placeholder='Enter Bank Account Title' id="" />
                        </div>
                        <div className='mt-2'>
                            <h4 className='font-bold text-sm uppercase py-3'>upload payment screenshot*</h4>
                            <div class="w-full">
                                <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-46 bg-[#f2f2f2] rounded-lg cursor-pointer">
                                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                        <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" />
                                </label>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <h4 className='font-bold text-sm uppercase py-3'>Choose transcation Date*</h4>
                            <div className="flex">
                                <select id="daySelect" className="bg-[#f2f2f2] text-gray-400 !important w-1/3 py-2 focus:ring-0 focus:outline-none pl-5 mr-2">
                                    <option value="">Day</option>
                                    {Array.from({ length: 31 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                                <select id="monthSelect" className="bg-[#f2f2f2] text-gray-400 !important w-1/3 py-2 focus:ring-0 focus:outline-none pl-5 mr-2">
                                    <option value="">Month</option>
                                    {Array.from({ length: 12 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                                <select id="yearSelect" className="bg-[#f2f2f2] text-gray-400 !important w-1/3 py-2 focus:ring-0 focus:outline-none pl-5">
                                    <option value="">Year</option>
                                    {Array.from({ length: 10 }, (_, i) => (
                                        <option key={2022 + i} value={2022 + i}>{2022 + i}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <h4 className='font-bold text-sm uppercase py-3'>Choose transcation Time*</h4>
                            <div className="flex">
                                <select id="hourSelect" className="bg-[#f2f2f2] text-gray-400 !important w-1/3 py-2 focus:ring-0 focus:outline-none pl-5 mr-2">
                                    <option value="">Hour</option>
                                    {Array.from({ length: 24 }, (_, i) => (
                                        <option key={i} value={i}>{i}</option>
                                    ))}
                                </select>
                                <select id="minuteSelect" className="bg-[#f2f2f2] text-gray-400 !important w-1/3 py-2 focus:ring-0 focus:outline-none pl-5 mr-2">
                                    <option value="">Minute</option>
                                    {Array.from({ length: 60 }, (_, i) => (
                                        <option key={i} value={i}>{i}</option>
                                    ))}
                                </select>
                                <select id="ampmSelect" className="bg-[#f2f2f2] text-gray-400 !important w-1/3 py-2 focus:ring-0 focus:outline-none pl-5 mr-2">
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col items-center md:flex-row md:justify-between pl-4 md:pl-0 py-6 md:py-12'>
                            <Link to='/student-intake'>
                                <button className='px-4 md:px-8 py-3 md:py-4 text-[#414042] font-bold text-xs md:text-base uppercase rounded-full mb-2 md:mb-0 md:mr-2'>Back</button>
                            </Link>
                            <button className='bg-[#0047ab] px-4 md:px-8 py-3 md:py-4 text-[#f2f2f2] font-bold text-xs md:text-base uppercase rounded-full'>Payment Confirmed</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentProcess
