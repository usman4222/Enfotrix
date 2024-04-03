import React from 'react'
import person from '../assets/Support Icon-01.png'

const IntakeForm = () => {
    return (
        <div>
            <div>
                <h2 className='text-center font-bold text-[#414042] text-4xl uppercase px-3 md:px-0 py-5'>Student Intake</h2>
                <p className='text-center text-[#414042] space-x-2 uppercase'>Graphic designn batch II <span className='text-blue-500 underline'>online</span></p>
            </div>
            <div className='py-5'>
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
                <div className='md:flex md:justify-between pl-14 md:pl-0 py-12'>
                    <button className='px-6 md:px-20 py-4 md:py-3 text-[#414042] font-bold text-lg md:text-xl uppercase rounded-full mb-2 md:mb-0 md:mr-4'>back</button>
                    <button className='bg-[#0047ab] px-6 md:px-20 py-4 md:py-3 text-[#f2f2f2] font-bold text-lg md:text-xl uppercase rounded-full'>Next</button>
                </div>
                <div className='flex justify-evenly py-8 bg-[#f2f2f2]'>
                    <div className='uppercase text-lg text-[#414042] font-bold text-center mt-10'><p>how you will be contacted?</p></div>
                    <div className='text-[#414042]'>
                        <p>Upon the submission of this form, we will contact you through <br  /> your <span className='font-bold'>WhatsApp number</span> or
                            <span className='font-bold'> email adddress</span> to share Graphic <br /> Design Batch II 2024 Student Portal Login ID and other <br /> relevant details with you.
                        </p>
                    </div>
                </div>
                <div className='bg-[#0047ab] md:py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center py-10'>
                    <div className="flex justify-center">
                        <img className='object-cover w-20' src={person} alt="Person" />
                    </div>
                    <div className="text-center sm:text-left py-3 md:py-0">
                        <h3 className='text-[#f2f2f2] font-bold uppercase text-xl'>still need any help</h3>
                        <p className='text-[#f2f2f2] py-1 px-3 md:px-0'>if you have any confusions, don't hesitate to contact support</p>
                    </div>
                    <div className="flex justify-center">
                        <button className='bg-[#f2f2f2] px-6 sm:px-12 py-3 text-[#414042] font-bold text-xl uppercase rounded-full md:text-sm md:px-10'>contact support</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntakeForm
