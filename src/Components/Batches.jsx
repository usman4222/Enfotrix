import React from 'react'

const Batches = () => {
    return (
        <div className='bg-gray-100'>
            <section className='px-10 '>
                <div className='flex flex-col items-center justify-center '>
                    <h1 className='lg:text-4xl font-semibold '>BATCH SCHEDULE</h1>
                    <p className='lg:text-2xl lg:pt-8 lg:pb-4 text-sm pb-4'>Keep track of our batch shedules  for seamless learning, online or offline.</p>
                </div>
                <div className='flex justify-center font-bold m-auto lg:pb-4 flex-col md:flex-row text-sm lg:text-lg gap-2'>
                    <button className='border lg:px-32 lg:py-4 bg-gray-700 text-white'>All</button>
                    <button className='lg:px-32 lg:py-4 '>IN PROGRESS</button>
                    <button className='lg:px-32 lg:py-4 '>UPCOMING</button>
                </div>
                <div>

                </div>

            </section>
            <section class="container mx-auto p-6 font-mono  text-sm">
                <div className='flex justify-start  flex-col'>
                    <p className='lg:py-8 py-2 bg-yellow-500 lg:w-48 text-center lg:text-xl text-sm font-bold '>ON CAMPUS</p>
                    <div>
                        <p className='bg-blue-500 text-center lg:py-2 lg:pl-8 pl-4 text-white  text-sm lg:text-xl  lg:text-start'>JANUARY 2024 </p>
                    </div>
                </div>
                <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div class="w-full overflow-x-auto">
                    <table class="w-full  text-sm lg:text-xl">
                            <thead className=''>
                                <tr class="  text-md font-semibold tracking-wide text-left text-gray-900 bg-white uppercase border-b border-gray-600" style={{height:'5rem'}}>
                                    <th class="px-4 py-3 lg:px-8">BATCH</th>
                                    <th class="px-4 py-3">START DATE</th>
                                    <th class="px-4 py-3">TIMING</th>
                                    <th class="px-4 py-3">AVAILBLE SEATS</th>
                                </tr>
                            </thead>
                            <tbody class="bg-gray-100 ">
                                <tr class="text-gray-700">
                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div>
                                                <p class="font-semibold text-black pl-4  text-sm lg:text-xl">DIGITAL MARKETING</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-ms font-semibold border">22 APRIL, 2024</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">3:00 - 4:00 PM </td>
                                    <td class="px-4 py-3 text-ms border">15</td>
                                </tr>
                                <tr class="text-gray-700">
                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div>
                                                <p class="font-semibold text-black pl-4  text-sm lg:text-xl">DIGITAL MARKETING</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-ms font-semibold border">22 APRIL, 2024</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">3:00 - 4:00 PM </td>
                                    <td class="px-4 py-3 text-ms border">15</td>
                                </tr>
                                <tr class="text-gray-700">
                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div>
                                                <p class="font-semibold text-black pl-4  text-sm lg:text-xl">DIGITAL MARKETING</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-ms font-semibold border">22 APRIL, 2024</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">3:00 - 4:00 PM </td>
                                    <td class="px-4 py-3 text-ms border">15</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='lg:mt-10'>
                            <p className='bg-blue-500 py-2 lg:pl-8  text-white pl-4 lg:text-xl text-sm '>FEBRUARY 2024 </p>
                        </div>
                        <table class="w-full  text-sm lg:text-xl">
                            <thead className=''>
                                <tr class="  text-md font-semibold tracking-wide text-left text-gray-900 bg-white uppercase border-b border-gray-600" style={{height:'5rem'}}>
                                    <th class="px-4 py-3 lg:px-8">BATCH</th>
                                    <th class="px-4 py-3">START DATE</th>
                                    <th class="px-4 py-3">TIMING</th>
                                    <th class="px-4 py-3">AVAILBLE SEATS</th>
                                </tr>
                            </thead>
                            <tbody class="bg-gray-100 ">
                                <tr class="text-gray-700">
                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div>
                                                <p class="font-semibold text-black pl-4  text-sm lg:text-xl">DIGITAL MARKETING</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-ms font-semibold border">22 APRIL, 2024</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">3:00 - 4:00 PM </td>
                                    <td class="px-4 py-3 text-ms border">15</td>
                                </tr>
                                <tr class="text-gray-700">
                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div>
                                                <p class="font-semibold text-black pl-4  text-sm lg:text-xl">DIGITAL MARKETING</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-ms font-semibold border">22 APRIL, 2024</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">3:00 - 4:00 PM </td>
                                    <td class="px-4 py-3 text-ms border">15</td>
                                </tr>
                                <tr class="text-gray-700">
                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div>
                                                <p class="font-semibold text-black pl-4  text-sm lg:text-xl">DIGITAL MARKETING</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-ms font-semibold border">22 APRIL, 2024</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">3:00 - 4:00 PM </td>
                                    <td class="px-4 py-3 text-ms border">15</td>
                                </tr>
                            </tbody>
                        </table>  <table class="w-full  text-sm lg:text-xl">
                            <thead className=''>
                                <tr class="  text-md font-semibold tracking-wide text-left text-gray-900 bg-white uppercase border-b border-gray-600" style={{height:'5rem'}}>
                                    <th class="px-4 py-3 lg:px-8">BATCH</th>
                                    <th class="px-4 py-3">START DATE</th>
                                    <th class="px-4 py-3">TIMING</th>
                                    <th class="px-4 py-3">AVAILBLE SEATS</th>
                                </tr>
                            </thead>
                            <tbody class="bg-gray-100 ">
                                <tr class="text-gray-700">
                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div>
                                                <p class="font-semibold text-black pl-4  text-sm lg:text-xl">DIGITAL MARKETING</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-ms font-semibold border">22 APRIL, 2024</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">3:00 - 4:00 PM </td>
                                    <td class="px-4 py-3 text-ms border">15</td>
                                </tr>
                                <tr class="text-gray-700">
                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div>
                                                <p class="font-semibold text-black pl-4  text-sm lg:text-xl">DIGITAL MARKETING</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-ms font-semibold border">22 APRIL, 2024</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">3:00 - 4:00 PM </td>
                                    <td class="px-4 py-3 text-ms border">15</td>
                                </tr>
                                <tr class="text-gray-700">
                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div>
                                                <p class="font-semibold text-black pl-4  text-sm lg:text-xl">DIGITAL MARKETING</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-ms font-semibold border">22 APRIL, 2024</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">3:00 - 4:00 PM </td>
                                    <td class="px-4 py-3 text-ms border">15</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section class="container mx-auto p-6 font-mono  text-sm">
                <div className='flex justify-start  flex-col'>
                    <p className='lg:py-8 py-2 bg-yellow-500 lg:w-48 text-center lg:text-xl text-sm font-bold '>ON CAMPUS</p>
                    <div>
                        <p className='bg-blue-500 lg:text-start text-center lg:pl-8 pl-4 text-white  text-sm lg:text-xl lg:py-2'>JANUARY 2024 </p>
                    </div>
                </div>
                <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div class="w-full overflow-x-auto">
                        <table class="w-full  text-sm lg:text-xl">
                            <thead className=''>
                                <tr class="  text-md font-semibold tracking-wide text-left text-gray-900 bg-white uppercase border-b border-gray-600" style={{height:'5rem'}}>
                                    <th class="px-4 py-3 lg:px-8">BATCH</th>
                                    <th class="px-4 py-3">START DATE</th>
                                    <th class="px-4 py-3">TIMING</th>
                                    <th class="px-4 py-3">AVAILBLE SEATS</th>
                                </tr>
                            </thead>
                            <tbody class="bg-gray-100 ">
                                <tr class="text-gray-700">
                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div>
                                                <p class="font-semibold text-black pl-4  text-sm lg:text-xl">DIGITAL MARKETING</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-ms font-semibold border">22 APRIL, 2024</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">3:00 - 4:00 PM </td>
                                    <td class="px-4 py-3 text-ms border">15</td>
                                </tr>
                                <tr class="text-gray-700">
                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div>
                                                <p class="font-semibold text-black pl-4  text-sm lg:text-xl">DIGITAL MARKETING</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-ms font-semibold border">22 APRIL, 2024</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">3:00 - 4:00 PM </td>
                                    <td class="px-4 py-3 text-ms border">15</td>
                                </tr>
                                <tr class="text-gray-700">
                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div>
                                                <p class="font-semibold text-black pl-4  text-sm lg:text-xl">DIGITAL MARKETING</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-ms font-semibold border">22 APRIL, 2024</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">3:00 - 4:00 PM </td>
                                    <td class="px-4 py-3 text-ms border">15</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='lg:mt-10'>
                            <p className='bg-blue-500 py-2 lg:pl-8  text-white pl-4 text-sm lg:text-xl'>FEBRUARY 2024 </p>
                        </div>
                        <table class="w-full  text-sm lg:text-xl">
                            <thead className=''>
                                <tr class="  text-md font-semibold tracking-wide text-left text-gray-900 bg-white uppercase border-b border-gray-600" style={{height:'5rem'}}>
                                    <th class="px-4 py-3 lg:px-8">BATCH</th>
                                    <th class="px-4 py-3">START DATE</th>
                                    <th class="px-4 py-3">TIMING</th>
                                    <th class="px-4 py-3">AVAILBLE SEATS</th>
                                </tr>
                            </thead>
                            <tbody class="bg-gray-100 ">
                                <tr class="text-gray-700">
                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div>
                                                <p class="font-semibold text-black pl-4  text-sm lg:text-xl">DIGITAL MARKETING</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-ms font-semibold border">22 APRIL, 2024</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">3:00 - 4:00 PM </td>
                                    <td class="px-4 py-3 text-ms border">15</td>
                                </tr>
                                <tr class="text-gray-700">
                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div>
                                                <p class="font-semibold text-black pl-4  text-sm lg:text-xl">DIGITAL MARKETING</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-ms font-semibold border">22 APRIL, 2024</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">3:00 - 4:00 PM </td>
                                    <td class="px-4 py-3 text-ms border">15</td>
                                </tr>
                                <tr class="text-gray-700">
                                    <td class="px-4 py-3 border">
                                        <div class="flex items-center text-sm">
                                            <div>
                                                <p class="font-semibold text-black pl-4  text-sm lg:text-xl">DIGITAL MARKETING</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 text-ms font-semibold border">22 APRIL, 2024</td>
                                    <td class="px-4 py-3 text-ms font-semibold border">3:00 - 4:00 PM </td>
                                    <td class="px-4 py-3 text-ms border">15</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Batches