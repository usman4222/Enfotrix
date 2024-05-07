import React, { useEffect } from 'react'
import key1 from '../assets/Key Skills-01.png'
import key2 from '../assets/Key Skills-02.png'
import key3 from '../assets/Key Skills-03.png'
import person from '../assets/Support Icon-01.png'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Side from './Side'

const StudentIntake = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='flex'>
            <div>
                <Side />
            </div>
            <div>
                <div>
                    <h2 className='text-center font-bold text-[#414042] text-4xl uppercase px-3 md:px-0 py-5'>Student Intake</h2>
                    <p className='text-center text-[#414042] space-x-2 uppercase'>Graphic designn batch II (online)</p>
                </div>
                <div className='py-5'>
                    <div className='bg-slate-500 w-full h-[10px] flex '>
                        <div className='bg-[#ffba21] w-[70%]'></div>
                        <div className='bg-[#414042] w-[30%]'></div>
                    </div>
                </div>
                <div>
                    <div className='bg-[#414042] py-10'>
                        <h3 className='text-center text-[#f2f2f2] font-bold text-2xl uppercase'>Congratulation !</h3>
                        <p className='text-center text-[#f2f2f2] uppercase py-2 px-4 md:px-0'>almost there! just a few more step to go</p>
                    </div>
                </div>
                <div className='py-10'>
                    <div className='bg-[#f2f2f2] py-3'>
                        <h2 className='text-center text-[#414042] uppercase text-xl py-6'>what <span className='font-bold'>key skills </span>you will learn</h2>
                    </div>
                </div>
                <div className='py-6'>
                    <div>
                        <img className='object-cover  w-full' src={key2} />
                    </div>
                </div>
                <div className='py-6'>
                    <div>
                        <img className='object-cover  w-full' src={key1} />
                    </div>
                </div>
                <div className='py-6'>
                    <div>
                        <img className='object-cover  w-full' src={key3} />
                    </div>
                </div>
                <div className='md:flex md:justify-between md:py-8 pl-14 md:pl-0 py-12'>
                    <Link to='/graphic-design'>
                        <button className=' px-20 py-10 md:py-3 text-[#414042] font-bold text-xl uppercase rounded-full'>back</button>
                    </Link>
                    <Link to='/payment'>
                        <button className='bg-[#0047ab] px-20 py-3 text-[#f2f2f2] font-bold text-xl uppercase rounded-full'>Next</button>
                    </Link>
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

export default StudentIntake
