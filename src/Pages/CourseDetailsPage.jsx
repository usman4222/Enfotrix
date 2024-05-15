import React from 'react'
import Side from '../component/Side'
import { Link } from 'react-router-dom'
import { IoMdStar } from 'react-icons/io'

const CourseDetailsPage = () => {
    return (
        <>

            <div className='flex '>
                <Side />
                <div className='w-[100%]'>
                    <div>
                        <div className='bg-blue-500 w-auto h-96 '>
                            <div className='flex justify-between items-center pt-[300px] md:pt-[320px]'>
                                <div className='flex justify-center items-center w-[100%] md:w-[65%] lg:w-[50%]'>
                                    <h3 className='font-bold text-lg text-white text-center '>YOUR STEPS TOWARDS A BETTER TOMORROW</h3>
                                </div>
                                <div className='bg-white hidden md:block md:w-[35%] lg:w-[50%] h-2'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex bg-yellow-400 md:bg-transparent justify-center items-center '>
                        <div className='md:bg-yellow-400 py-20  md:px-28'><h2 className='text-black font-bold text-4xl uppercase'>courses</h2></div>
                        <div className='w-[100%] bg-white hidden md:block'></div>
                    </div>
                </div>
            </div>
            <div className='md:bg-gray-200 md:px-20 md:pt-20  py-10 px-5'>
                <div className='flex flex-col lg:flex lg:flex-row justify-between bg-white md:p-10  md:border-2 md:border-yellow-200'>
                    <div className=' md:w-[100%] md:pr-10'>
                        <h3 className='uppercase text-black font-bold text-4xl'>GRAPHIC DESIGN</h3>
                        <hr class="my-4 border-t-2 border-black" />
                        <div className='flex gap-2 md:gap-16 mt-10'>
                            <div className='flex flex-col gap-4 text-lg'>
                                <p>Duration</p>
                                <p>Skill Level:</p>
                                <p className='custom-class-320'>Instructor: </p>
                                <p>Requirements: </p>
                                <p className=' custom-class-320'>Course Fee:</p>
                            </div>
                            <div className='flex flex-col gap-4 text-lg font-semibold md:font-extrabold'>
                                <p>8 weeks</p>
                                <p>Beginner to Intermediate</p>
                                <p>Arslan Khalid</p>
                                <p>Basic computer skills</p>
                                <p><span className='line-through text-lg font-light'>25,000 RS</span> <span className='text-2xl ml-3'>10,000 RS:</span></p>
                            </div>
                        </div>
                        <div className='pt-10 flex justify-center md:block'>
                            <Link to='/student-intake'>
                                <button className='bg-yellow-400 px-12 py-3 text-[#000] font-semibold text-xl uppercase rounded-full'>apply now</button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex lg:mt-[-56px] justify-center md:block '>
                        <div className='mt-16 md:w-80'>
                            <div className='bg-blue-500 lg:w-80 h-72'></div>
                            <div className='bg-blue-600 py-3 mt-2 px-5 md:px-0'>
                                <div className='flex justify-center items-center mt-2'>
                                    <div>
                                        <h5 className='font-bold text-xl text-white mr-2'>Star Rating:</h5>
                                    </div>
                                    <div className='flex text-yellow-300 text-2xl'>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h5 className='text-white text-lg font-semibold'>(based on 100+ reviews)</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:bg-gray-200 md:px-20 md:pb-10  py-10 md:py-0 px-5'>
                <div className='flex flex-col lg:flex lg:flex-row justify-between bg-white md:p-10  md:border-2 md:border-yellow-200'>
                    <div className=' md:w-[100%] md:pr-10'>
                        <h3 className='uppercase text-black font-bold text-4xl'>E-COMMERCE</h3>
                        <hr class="my-4 border-t-2 border-black" />
                        <div className='flex gap-2 md:gap-16 mt-10'>
                            <div className='flex flex-col gap-4 text-lg'>
                                <p>Duration</p>
                                <p>Skill Level:</p>
                                <p className='custom-class-320'>Instructor: </p>
                                <p>Requirements: </p>
                                <p className=' custom-class-320'>Course Fee:</p>
                            </div>
                            <div className='flex flex-col gap-4 text-lg font-semibold md:font-extrabold'>
                                <p>8 weeks</p>
                                <p>Beginner to Intermediate</p>
                                <p>Ahmed Butt</p>
                                <p>Basic computer skills</p>
                                <p><span className='line-through text-lg font-light'>25,000 RS</span> <span className='text-2xl ml-3'>10,000 RS:</span></p>
                            </div>
                        </div>
                        <div className='pt-10 flex justify-center md:block'>
                            <Link to='/student-intake'>
                                <button className='bg-yellow-400 px-12 py-3 text-[#000] font-semibold text-xl uppercase rounded-full'>apply now</button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex lg:mt-[-56px] justify-center md:block '>
                        <div className='mt-16 md:w-80'>
                            <div className='bg-blue-500 lg:w-80 h-72'></div>
                            <div className='bg-blue-600 py-3 mt-2 px-5 md:px-0'>
                                <div className='flex justify-center items-center mt-2'>
                                    <div>
                                        <h5 className='font-bold text-xl text-white mr-2'>Star Rating:</h5>
                                    </div>
                                    <div className='flex text-yellow-300 text-2xl'>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h5 className='text-white text-lg font-semibold'>(based on 100+ reviews)</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:bg-gray-200 md:px-20 md:pb-10  py-10 md:py-0 px-5'>
                <div className='flex flex-col lg:flex lg:flex-row justify-between bg-white md:p-10  md:border-2 md:border-yellow-200'>
                    <div className=' md:w-[100%] md:pr-10'>
                        <h3 className='uppercase text-black font-bold text-4xl'>DIGITAL MARKETING</h3>
                        <hr class="my-4 border-t-2 border-black" />
                        <div className='flex gap-2 md:gap-16 mt-10'>
                            <div className='flex flex-col gap-4 text-lg'>
                                <p>Duration</p>
                                <p>Skill Level:</p>
                                <p className='custom-class-320'>Instructor: </p>
                                <p>Requirements: </p>
                                <p className=' custom-class-320'>Course Fee:</p>
                            </div>
                            <div className='flex flex-col gap-4 text-lg font-semibold md:font-extrabold'>
                                <p>8 weeks</p>
                                <p>Beginner to Intermediate</p>
                                <p>M Usama</p>
                                <p>Basic computer skills</p>
                                <p><span className='line-through text-lg font-light'>25,000 RS</span> <span className='text-2xl ml-3'>10,000 RS:</span></p>
                            </div>
                        </div>
                        <div className='pt-10 flex justify-center md:block'>
                            <Link to='/student-intake'>
                                <button className='bg-yellow-400 px-12 py-3 text-[#000] font-semibold text-xl uppercase rounded-full'>apply now</button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex lg:mt-[-56px] justify-center md:block '>
                        <div className='mt-16 md:w-80'>
                            <div className='bg-blue-500 lg:w-80 h-72'></div>
                            <div className='bg-blue-600 py-3 mt-2 px-5 md:px-0'>
                                <div className='flex justify-center items-center mt-2'>
                                    <div>
                                        <h5 className='font-bold text-xl text-white mr-2'>Star Rating:</h5>
                                    </div>
                                    <div className='flex text-yellow-300 text-2xl'>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h5 className='text-white text-lg font-semibold'>(based on 100+ reviews)</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:bg-gray-200 md:px-20 md:pb-10  py-10 md:py-0 px-5'>
                <div className='flex flex-col lg:flex lg:flex-row justify-between bg-white md:p-10  md:border-2 md:border-yellow-200'>
                    <div className=' md:w-[100%] md:pr-10'>
                        <h3 className='uppercase text-black font-bold text-4xl'>APP DEVELOPMENT</h3>
                        <hr class="my-4 border-t-2 border-black" />
                        <div className='flex gap-2 md:gap-16 mt-10'>
                            <div className='flex flex-col gap-4 text-lg'>
                                <p>Duration</p>
                                <p>Skill Level:</p>
                                <p className='custom-class-320'>Instructor: </p>
                                <p>Requirements: </p>
                                <p className=' custom-class-320'>Course Fee:</p>
                            </div>
                            <div className='flex flex-col gap-4 text-lg font-semibold md:font-extrabold'>
                                <p>8 weeks</p>
                                <p>Beginner to Intermediate</p>
                                <p>Hassan Raza</p>
                                <p>Basic computer skills</p>
                                <p><span className='line-through text-lg font-light'>25,000 RS</span> <span className='text-2xl ml-3'>10,000 RS:</span></p>
                            </div>
                        </div>
                        <div className='pt-10 flex justify-center md:block'>
                            <Link to='/student-intake'>
                                <button className='bg-yellow-400 px-12 py-3 text-[#000] font-semibold text-xl uppercase rounded-full'>apply now</button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex lg:mt-[-56px] justify-center md:block '>
                        <div className='mt-16 md:w-80'>
                            <div className='bg-blue-500 lg:w-80 h-72'></div>
                            <div className='bg-blue-600 py-3 mt-2 px-5 md:px-0'>
                                <div className='flex justify-center items-center mt-2'>
                                    <div>
                                        <h5 className='font-bold text-xl text-white mr-2'>Star Rating:</h5>
                                    </div>
                                    <div className='flex text-yellow-300 text-2xl'>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h5 className='text-white text-lg font-semibold'>(based on 100+ reviews)</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:bg-gray-200 md:px-20 md:pb-10  py-10 md:py-0 px-5'>
                <div className='flex flex-col lg:flex lg:flex-row justify-between bg-white md:p-10  md:border-2 md:border-yellow-200'>
                    <div className=' md:w-[100%] md:pr-10'>
                        <h3 className='uppercase text-black font-bold text-4xl'>WEB DEVELOPMENT</h3>
                        <hr class="my-4 border-t-2 border-black" />
                        <div className='flex gap-2 md:gap-16 mt-10'>
                            <div className='flex flex-col gap-4 text-lg'>
                                <p>Duration</p>
                                <p>Skill Level:</p>
                                <p className='custom-class-320'>Instructor: </p>
                                <p>Requirements: </p>
                                <p className=' custom-class-320'>Course Fee:</p>
                            </div>
                            <div className='flex flex-col gap-4 text-lg font-semibold md:font-extrabold'>
                                <p>8 weeks</p>
                                <p>Beginner to Intermediate</p>
                                <p>Muzamil Hassan</p>
                                <p>Basic computer skills</p>
                                <p><span className='line-through text-lg font-light'>25,000 RS</span> <span className='text-2xl ml-3'>10,000 RS:</span></p>
                            </div>
                        </div>
                        <div className='pt-10 flex justify-center md:block'>
                            <Link to='/student-intake'>
                                <button className='bg-yellow-400 px-12 py-3 text-[#000] font-semibold text-xl uppercase rounded-full'>apply now</button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex lg:mt-[-56px] justify-center md:block '>
                        <div className='mt-16 md:w-80'>
                            <div className='bg-blue-500 lg:w-80 h-72'></div>
                            <div className='bg-blue-600 py-3 mt-2 px-5 md:px-0'>
                                <div className='flex justify-center items-center mt-2'>
                                    <div>
                                        <h5 className='font-bold text-xl text-white mr-2'>Star Rating:</h5>
                                    </div>
                                    <div className='flex text-yellow-300 text-2xl'>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h5 className='text-white text-lg font-semibold'>(based on 100+ reviews)</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:bg-gray-200 md:px-20 md:pb-10  py-10 md:py-0 px-5'>
                <div className='flex flex-col lg:flex lg:flex-row justify-between bg-white md:p-10  md:border-2 md:border-yellow-200'>
                    <div className=' md:w-[100%] md:pr-10'>
                        <h3 className='uppercase text-black font-bold text-4xl'>3D MODELING</h3>
                        <hr class="my-4 border-t-2 border-black" />
                        <div className='flex gap-2 md:gap-16 mt-10'>
                            <div className='flex flex-col gap-4 text-lg'>
                                <p>Duration</p>
                                <p>Skill Level:</p>
                                <p className='custom-class-320'>Instructor: </p>
                                <p>Requirements: </p>
                                <p className=' custom-class-320'>Course Fee:</p>
                            </div>
                            <div className='flex flex-col gap-4 text-lg font-semibold md:font-extrabold'>
                                <p>8 weeks</p>
                                <p>Beginner to Intermediate</p>
                                <p>Ahmed Butt</p>
                                <p>Basic computer skills</p>
                                <p><span className='line-through text-lg font-light'>25,000 RS</span> <span className='text-2xl ml-3'>10,000 RS:</span></p>
                            </div>
                        </div>
                        <div className='pt-10 flex justify-center md:block'>
                            <Link to='/student-intake'>
                                <button className='bg-yellow-400 px-12 py-3 text-[#000] font-semibold text-xl uppercase rounded-full'>apply now</button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex lg:mt-[-56px] justify-center md:block '>
                        <div className='mt-16 md:w-80'>
                            <div className='bg-blue-500 lg:w-80 h-72'></div>
                            <div className='bg-blue-600 py-3 mt-2 px-5 md:px-0'>
                                <div className='flex justify-center items-center mt-2'>
                                    <div>
                                        <h5 className='font-bold text-xl text-white mr-2'>Star Rating:</h5>
                                    </div>
                                    <div className='flex text-yellow-300 text-2xl'>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h5 className='text-white text-lg font-semibold'>(based on 100+ reviews)</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CourseDetailsPage
