import React from 'react'

const Batches = () => {
    return (
        <div>
            <div className='py-10'>
                <h1 className='text-4xl font-bold p-5 md:p-0'>BATCH INFORMATION</h1>
            </div>
            <div className='bg-pink-300 flex justify-between px-1 md:px-6 lg:px-28 py-8'>
                <div>
                    <p className='text-yellow-300 font-semibold'>Duration: 2 Months </p>
                </div>
                <div>
                    <p className='text-yellow-300 font-semibold'>Monday - Thursday </p>
                </div>
                <div>
                    <p className='text-yellow-300 font-semibold'>1 hours per day </p>
                </div>
            </div>
            <div className=' w-[200px] pt-8 pb-3'>
                <div className='flex justify-center items-center bg-yellow-500'>
                    <h4 className='py-10 uppercase text-xl font-extrabold'>on campus</h4>
                </div>
                <div className='flex justify-center items-center bg-slate-500'>
                    <p className='py-2 uppercase text-lg font-semibold'>batch 6</p>
                </div>
            </div>
            <div class="container mx-auto px-4 sm:px-8">
                <div class="py-8">
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div
                            class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                        >
                            <table class="min-w-full leading-normal">
                                <tbody>
                                    <tr>
                                        <td class="px-5 py-5 border border-gray-200 bg-white text-sm">
                                            <h5 className='uppercase font-bold text-lg text-center'>total</h5>
                                        </td>
                                        <td class="px-5 py-5 border border-gray-200 bg-white text-sm">
                                            <h5 className='uppercase font-bold text-lg text-center'>AVAILABLE</h5>
                                        </td>
                                        <td class="px-5 py-5 border border-gray-200 bg-white text-sm">
                                            <h5 className='uppercase font-bold text-lg text-center'>STARTING FROM</h5>
                                        </td>
                                        <td class="px-5 py-5 border border-gray-200 bg-white text-sm">
                                            <h5 className='uppercase font-bold text-lg text-center'>COMPLETING DATE</h5>
                                        </td>
                                        <td class="px-5 py-5 border border-gray-200 bg-white text-sm">
                                            <h5 className='uppercase font-bold text-lg text-center'>TIMINGS</h5>
                                        </td>
                                        <td class="px-5 py-5 border border-gray-200 bg-white text-sm">
                                            <h5 className='uppercase font-bold text-lg text-center'>SESSION</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-5 py-5 border border-gray-200 bg-white text-sm">
                                            <h5 className='uppercase text-lg text-center'>50</h5>
                                        </td>
                                        <td class="px-5 py-5 border border-gray-200 bg-white text-sm">
                                            <h5 className='uppercase  text-lg text-center'>8</h5>
                                        </td>
                                        <td class="px-5 py-5 border border-gray-200 bg-white text-sm">
                                            <h5 className='uppercase  text-lg text-center'>03 MARCH, 2024</h5>
                                        </td>
                                        <td class="px-5 py-5 border border-gray-200 bg-white text-sm">
                                            <h5 className='uppercase text-lg text-center'>03 MAY, 2024</h5>
                                        </td>
                                        <td
                                            class="px-5 py-5 border border-gray-200 bg-white text-sm text-right">
                                            <h5 className='uppercase  text-lg text-center'>12:00 PM</h5>
                                        </td>
                                        <td
                                            class="px-5 py-5 border border-gray-200 bg-white text-sm text-right">
                                            <h5 className='uppercase text-lg text-center'>EVENING</h5>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Batches
