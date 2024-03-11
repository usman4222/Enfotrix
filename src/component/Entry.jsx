import React from 'react'

const Entry = () => {
    return (
        <div>
            <div className='py-10'>
                <h1 className='text-4xl font-bold p-5 md:p-0'>ENTRY REQUIREMENTS</h1>
            </div>
            <div className='md:p-16 p-8'>
                <div className='flex gap-3 '>
                    <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-black before:rounded-full'></span>
                    <p className='text-xl md:text-2xl'>No age restrictions apply.</p>
                </div>
                <hr class="my-4 border-t-2 border-black" />
                <div className='flex gap-3 '>
                    <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-black before:rounded-full'></span>
                    <p className='text-xl md:text-2xl'>Basic proficiency in English is necessary.</p>
                </div>
                <hr class="my-4 border-t-2 border-black" />
                <div className='flex gap-3 '>
                    <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-black before:rounded-full'></span>
                    <p className='text-xl md:text-2xl'>Proficiency in computer usage is required.</p>
                </div>
                <hr class="my-4 border-t-2 border-black" />
                <div className='flex gap-3'>
                    <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-black before:rounded-full'></span>
                    <p className='text-xl md:text-2xl'>A laptop or PC is essential for both online and offline classes.</p>
                </div>
            </div>
        </div>
    )
}

export default Entry
