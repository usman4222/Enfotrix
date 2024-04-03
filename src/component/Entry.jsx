import React from 'react'

const Entry = () => {
    return (
        <div>
            <div className='py-10'>
                <h1 className='text-4xl font-bold p-5 md:p-0 text-[#414042]'>ENTRY REQUIREMENTS</h1>
            </div>
            <div className='md:p-16 p-8'>
                <div className='flex gap-3 '>
                    <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-[#414042] before:rounded-full'></span>
                    <p className='text-xl md:text-2xl text-[#414042]'>No age restrictions apply.</p>
                </div>
                <hr class="my-4 border-t-2 border-[#414042]" />
                <div className='flex gap-3 '>
                    <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-[#414042] before:rounded-full'></span>
                    <p className='text-xl md:text-2xl text-[#414042]'>Basic proficiency in English is necessary.</p>
                </div>
                <hr class="my-4 border-t-2 border-[#414042]" />
                <div className='flex gap-3 '>
                    <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-[#414042] before:rounded-full'></span>
                    <p className='text-xl md:text-2xl text-[#414042]'>Proficiency in computer usage is required.</p>
                </div>
                <hr class="my-4 border-t-2 border-[#414042]" />
                <div className='flex gap-3'>
                    <span className='mt-3 before:block before:w-2 md:before:w-3 before:h-2 md:before:h-3 before:bg-[#414042] before:rounded-full'></span>
                    <p className='text-xl md:text-2xl text-[#414042]'>A laptop or PC is essential for both online and offline classes.</p>
                </div>
            </div>
        </div>
    )
}

export default Entry
