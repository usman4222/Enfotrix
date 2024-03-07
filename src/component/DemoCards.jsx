import React from 'react'
import fiver from '../assets/fiver.webp'
import up from '../assets/up.png'
import free from '../assets/free.png'

const DemoCards = () => {
    return (
        <div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 bg-blue-600'>
                <div>
                    <div className='flex justify-center items-center  h-[300px]'>
                        <div>
                            <h3 className='uppercase pb-10 text-4xl text-white font-semibold'>FREELANCING PLATFORMS</h3>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center  h-[300px]'>
                    <div>
                        <img className='object-cover w-15' src={fiver} />
                    </div>
                </div>
                <div className='flex justify-center items-center  h-[300px]'>
                    <div>
                        <img src={up} />
                    </div>
                </div>
                <div className='flex justify-center items-center  h-[300px]'>
                    <div>
                        <img src={free} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemoCards
