import React, { useEffect } from 'react'
import Main from './Main'
import Sidebar from './Sidebar'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='mt-10 bg-[#f2f2f2] text-[#414042] text-lg'>
                <div className='flex'>
                    <div className='bg-[#0047ab]'>
                        <h3 className='uppercase font-bold text-2xl text-center text-[#f2f2f2] w-[15%] py-16 px-10'>introduction</h3>
                    </div>
                    <div className='bg-transparent'></div>
                </div>
                <div className='p-12'>
                    <p className='pb-5'>Welcome to Enfotrix, where creativity meets innovation. As a dynamic IT and software development company,
                        we are dedicated to shaping the future of digital education. Our passion for technology and design drives
                        us to create transformative learning experiences that empower individuals to unlock their potential and
                        thrive in the digital age.
                    </p>
                    <p className='pb-5'>
                        For the last five years, Enfotrix has been helping people learn about
                        computers and technology. Alongside Enfotrix IT Company, Life Changer Company, and Soriic IT Company,
                        we've ventured into diverse fields, including Enfotrix Game Circle Company in Lahore. In addition to our
                        core focus on short computer courses, we also offer services in Visa Consultancy, PTE / IELTS training,
                        and investment consultancy, enriching our portfolio and extending our impact across various sectors.
                    </p>
                    <p className='pb-5'>
                        At Enfotrix, we want to ensure everyone has the skills they need to succeed in the digital age. Our
                        commitment to teaching and providing essential services reflects our dedication to
                        creating a better and safer future for all. Join us at Enfotrix and embark on your journey to success
                        in the digital world.
                    </p>
                    <div className='py-10'>
                        <h1 className='text-4xl font-bold p-5 md:p-0 text-[#414042] uppercase'>what we offer</h1>
                    </div>
                    <p >At Enfotrix, we want to make sure everyone has the skills they need to do well in the
                        digital age. We work hard to teach people and provide services that help them succeed in
                        today's world. Our goal is to create a better and safer future for everyone. Join us at
                        Enfotrix and start your journey to success in the digital world. Courses
                    </p>
                    <div className='py-10'>
                        <h1 className='text-xl font-bold p-5 md:p-0 text-[#414042] '>Cources We Offer</h1>
                    </div>
                    <div className='md:p-16 p-8'>
                        <div className='flex gap-3 '>
                            <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-[#414042] before:rounded-full'></span>
                            <p className='text-xl md:text-2xl text-[#414042]'>Graphic Design</p>
                        </div>
                        <hr class="my-4 border-t-2 border-black" />
                        <div className='flex gap-3 '>
                            <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-[#414042] before:rounded-full'></span>
                            <p className='text-xl md:text-2xl text-[#414042]'>E-Commerce Digital</p>
                        </div>
                        <hr class="my-4 border-t-2 border-black" />
                        <div className='flex gap-3 '>
                            <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-[#414042] before:rounded-full'></span>
                            <p className='text-xl md:text-2xl text-[#414042]'> Digital Marketing </p>
                        </div>
                        <hr class="my-4 border-t-2 border-black" />
                        <div className='flex gap-3 '>
                            <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-[#414042] before:rounded-full'></span>
                            <p className='text-xl md:text-2xl text-[#414042]'> UI / UX Design </p>
                        </div>
                        <hr class="my-4 border-t-2 border-black" />
                        <div className='flex gap-3 '>
                            <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-[#414042] before:rounded-full'></span>
                            <p className='text-xl md:text-2xl text-[#414042]'>Video Editing</p>
                        </div>
                        <hr class="my-4 border-t-2 border-black" />
                        <div className='flex gap-3 '>
                            <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-[#414042] before:rounded-full'></span>
                            <p className='text-xl md:text-2xl text-[#414042]'> App Development</p>
                        </div>
                        <hr class="my-4 border-t-2 border-black" />
                        <div className='flex gap-3 '>
                            <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-[#414042] before:rounded-full'></span>
                            <p className='text-xl md:text-2xl text-[#414042]'> Web Development </p>
                        </div>
                        <hr class="my-4 border-t-2 border-black" />
                        <div className='flex gap-3 '>
                            <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-[#414042] before:rounded-full'></span>
                            <p className='text-xl md:text-2xl text-[#414042]'> 3D Modeling</p>
                        </div>
                        <hr class="my-4 border-t-2 border-black" />
                        <div className='flex gap-3 '>
                            <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-[#414042] before:rounded-full'></span>
                            <p className='text-xl md:text-2xl text-[#414042]'>Game Development</p>
                        </div>
                        <hr class="my-4 border-t-2 border-black" />
                        <div className='flex gap-3 '>
                            <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-[#414042] before:rounded-full'></span>
                            <p className='text-xl md:text-2xl text-[#414042]'>Freelancing</p>
                        </div>
                    </div>
                    <div className='py-10'>
                        <h1 className='text-xl font-bold p-5 md:p-0 text-[#414042] '>Opportunities for Growth and Employment at Enfotrix</h1>
                    </div>
                    <p>In addition to our courses, Enfotrix also offers internship and job opportunities.
                        We believe in providing practical experience to our students, which is why we offer paid
                        internships to those who complete our courses. Upon demonstrating progress and proficiency,
                        we extend job offers with competitive salaries to our interns. Furthermore, we actively
                        recruit both students and professionals to join our team, contributing their skills and
                        expertise to our projects and initiatives. At Enfotrix, we are committed to nurturing
                        talent and providing meaningful career opportunities for all.
                    </p>
                    <p className='text-center text-[#0047ab] py-5 hover:underline hover:cursor-pointer'>More About Opportunities</p>
                    <div className='py-10'>
                        <h1 className='text-4xl font-bold p-5 md:p-0 text-[#414042] uppercase'>our history</h1>
                    </div>
                    <p className='pb-5'>Enfotrix, founded by CEO Muhammad Mujahid in 2019, began its journey with a vision to
                        provide software and IT services alongside offering short courses to empower individuals
                        with essential digital skills. Through dedication and commitment, Enfotrix not only
                        fulfilled its mission but also paved the way for the establishment of Soriic IT Company
                        and Life Changer Company, extending its impact beyond its initial endeavors.
                    </p>
                    <p>
                        As our
                        influence expanded, Enfotrix set up branches in key cities, including Lahore and Sargodha.
                        Among these, the Sargodha branch, located at Zafarullah Chowk, serves as our main hub,
                        symbolizing our commitment to accessibility and community engagement. From our humble
                        beginnings to our present achievements, our journey reflects a relentless pursuit of
                        growth, innovation, and positive transformation.
                    </p>
                    <div className='py-10'>
                        <h1 className='text-4xl font-bold p-5 md:p-0 text-[#414042] uppercase'>mission and vision</h1>
                    </div>
                    <p>
                        Our mission is to empower individuals to thrive in the digital world by providing world-class
                        education and innovative solutions. Through our commitment to excellence, integrity, and
                        continuous improvement, we strive to be the premier destination for lifelong learning and
                        professional development. Our vision is to create a future where technology enriches lives,
                        fosters creativity, and drives positive change across industries and communities.
                    </p>
                </div>
            </div>
            <Sidebar />
        </>
    )
}

export default About
