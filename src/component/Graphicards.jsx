import React from 'react'
import fiver from '../assets/fiver.webp'
import up from '../assets/up.png'
import free from '../assets/free.png'

const Graphicards = () => {
    return (
        <div>  
            <div className='py-10'>
                <h1 className='text-4xl font-bold p-5 md:p-0 text-[#414042]'>WHY LEARN GRAPHIC DESIGN?</h1>
            </div>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 s'>
                <div className='bg-[#0047ab]'>
                    <div className='flex justify-center items-center  h-[300px] p-2'>
                        <div className='p-6'>
                            <h5 className='text-white font-semibold text-2xl pb-3'>1. High Demand:</h5>
                            <p className='text-lg text-white'>Businesses everywhere
                                need eye-catching
                                designs for their branding
                                and marketing.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#0047ab]'>
                    <div className='flex justify-center items-center  h-[300px] p-2'>
                        <div className='p-6'>
                            <h5 className='text-white font-semibold text-2xl pb-3'>2. Famous Brands:</h5>
                            <p className='text-lg text-white'>Big companies like Nike,
                                Apple, and Coca-Cola rely
                                on graphic designers for
                                their cool logos and ads.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#0047ab]'>
                    <div className='flex justify-center items-center  h-[300px] p-2'>
                        <div className='p-6'>
                            <h5 className='text-white font-semibold text-2xl pb-3'>3. Quick Learning:</h5>
                            <p className='text-lg text-white'>You can become a skilled
                                graphic designer in just
                                2 months with our training..</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#0047ab]'>
                    <div className='flex justify-center items-center  h-[300px] p-2'>
                        <div className='p-6'>
                            <h5 className='text-white font-semibold text-2xl pb-3'>4. No Degree Needed</h5>
                            <p className='text-lg text-white'>Businesses everywhere
                                need eye-catching
                                designs for their branding
                                and marketing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graphicards 
