import React from 'react'

const ImageGrid = () => {
    return (
        <>
            <div className='grid grid-cols-12 grid-rows-5 md:grid-rows-2 gap-y-2 '>
                <div className='md:col-span-4 col-span-12 row-span-2 bg-orange-600 max-h-[400px]'>
                    <img
                        src='https://picsum.photos/200/300'
                        className='w-full h-full  bg-cover bg-center'
                        alt=''
                    />
                </div>
                <div className='md:col-span-5 col-span-12 row-span-2 bg-red-500 flex justify-center items-center'>
                    <h2 className='text-white'>Hllo ther</h2>
                </div>
                <div className='md:col-span-3 col-span-12 row-span-1 bg-blue-600 flex justify-center items-center text-white '>
                    <h1 className='text-5xl'>Hello WOrld</h1>
                </div>
            </div>
            <div className='grid grid-cols-12 md:grid-cols-3 md:grid-rows-2 grid-rows-6 gap-y-2 mt-2 gap-x-2'>
                <div className='md:col-span-1 col-span-6 row-span-1 bg-orange-600 max-h-[400px]'>
                    <img
                        src='https://picsum.photos/200/300'
                        className='w-full h-full  bg-cover bg-center'
                        alt=''
                    />
                </div>
                <div className='md:col-span-1 col-span-6 row-span-2 bg-red-500 flex justify-center items-center'>
                    <h2 className='text-white'>Hllo ther</h2>
                </div>
                <div className='md:col-span-1 col-span-6 row-span-1 bg-blue-600 flex justify-center items-center text-white '>
                    <h1 className='text-5xl'>Hello WOrld</h1>
                </div>
                <div className='md:col-span-1 col-span-6 row-span-1 bg-blue-600 flex justify-center items-center text-white '>
                    <h1 className='text-5xl'>Hello WOrld</h1>
                </div>
                <div className='md:col-span-1 col-span-6 row-span-1 bg-blue-600 flex justify-center items-center text-white '>
                    <h1 className='text-5xl'>Hello WOrld</h1>
                </div>
            </div>
            <div className='grid grid-cols-12 grid-rows-5 md:grid-rows-2 gap-y-2 mt-2 gap-x-2'>
                <div className='md:col-span-4 col-span-12 row-span-2 bg-orange-600 max-h-[400px]'>
                    <img
                        src='https://picsum.photos/200/300'
                        className='w-full h-full  bg-cover bg-center'
                        alt=''
                    />
                </div>
                <div className='md:col-span-4 col-span-12 row-span-2 bg-red-500 flex justify-center items-center'>
                    <h2 className='text-white'>Hllo ther</h2>
                </div>
                <div className='md:col-span-4 col-span-12 row-span-2 bg-blue-600 flex justify-center items-center text-white '>
                    <h1 className='text-5xl'>Hello WOrld</h1>
                </div>
            </div>
        </>
    )
}

export default ImageGrid
