import React from 'react'
import Logo1 from '../assets/2nd Section/logo1.png'
import Logo2 from '../assets/2nd Section/logo2.png'
import Logo3 from '../assets/2nd Section/logo3.png'
import Logo4 from '../assets/2nd Section/logo4.png'

const Companies = () => {
    return (
        <div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 bg-[#0047AB]'>
                <div>
                    <div className='flex justify-center items-center  h-[200px]'>
                        <div>
                            <img className='object-cover w-36' src={Logo3} />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center  h-[200px]'>
                    <div>
                        <img className='object-cover w-36' src={Logo2} />
                    </div>
                </div>
                <div className='flex justify-center items-center  h-[200px]'>
                    <div>
                        <img className='object-cover w-20' src={Logo1} />
                    </div>
                </div>
                <div className='flex justify-center items-center  h-[200px]'>
                    <div>
                        <img className='object-cover w-28' src={Logo4} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies