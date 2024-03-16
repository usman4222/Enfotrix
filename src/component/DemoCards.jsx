import React from 'react'
import fiver from '../assets/Logos-01.png'
import up from '../assets/Logos-02.png'
import free from '../assets/Logos-03.png'

const DemoCards = () => {
    return (
        <div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 bg-[#0047ab]'>
                <div>
                    <div className='flex justify-center items-center  h-[300px]'>
                        <div>
                            <h3 className='uppercase pb-10 text-4xl text-center text-white font-semibold'>FREELANCING PLATFORMS</h3>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center  h-[300px]'>
                    <div>
                        <img className='object-cover w-40' src={fiver} />
                    </div>
                </div>
                <div className='flex justify-center items-center  h-[300px]'>
                    <div>
                        <img className='object-cover h-16' src={up} />
                    </div>
                </div>
                <div className='flex justify-center items-center  h-[300px]'>
                    <div>
                        <img className='object-cover h-16' src={free} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemoCards
