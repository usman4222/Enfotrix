import React, { useEffect, useRef, useState } from 'react';
import person from '../assets/Support Icon-01.png';
import Side from './Side';
import { Link } from 'react-router-dom';
import RefundPolicy from './RefundPolicy';
import Modal from './Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const IntakeForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const form = useRef();
    const [data, setData] = useState({
        name: '',
        email: '',
        city: '',
        phone: '',
        age: '',
        qualification: ''
    });
    const [hasError, setHasError] = useState(null);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const onChange = (event) => {
        const { name, value } = event.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (name === 'email' && !emailPattern.test(value)) {
            setHasError('Please match the requested format.');
        } else if (name === 'phone' && !/^[0-9]*$/.test(value)) {
            setHasError('Please match the requested format.');
        } else {
            setHasError(null);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const submitEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_31p2vdp', 'template_gh2wsgq', {
            name: data.name,
            email: data.email,
            city: data.city,
            phone: data.phone,
            age: data.age,
            qualification: data.qualification,
        }, 'XohnXcZl3e1DVEBqg')
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    toast.success('Success! We\'ll get back to you soon. Thank you!');
                    resetForm();
                },
                (error) => {
                    console.log('FAILED...', error);
                    toast.error('FAILED...', error.text);
                }
            );
    };

    const resetForm = () => {
        setData({
            name: '',
            email: '',
            city: '',
            phone: '',
            age: '',
            qualification: ''
        });
    };

    return (
        <>
            <div className='flex'>
                <div className='flex flex-col'>
                    <Side />
                    <RefundPolicy />
                </div>
                <div className='w-full'>
                    <div>
                        <h2 className='text-center font-bold text-[#414042] text-4xl uppercase px-3 md:px-0 py-5'>Student Intake</h2>
                        <p className='text-center text-[#414042] space-x-2 uppercase'>Graphic design batch II <span className='text-blue-500 underline'>online</span></p>
                    </div>
                    <div className='py-5 px-10'>
                        <div className='bg-slate-500 w-full h-[10px] flex '>
                            <div className='bg-[#ffba21] w-[70%]'></div>
                            <div className='bg-[#414042] w-[30%]'></div>
                        </div>
                    </div>
                    <form ref={form} onSubmit={submitEmail}>
                        <div className='px-10'>
                            <div className='mt-2'>
                                <h4 className='font-bold text-sm uppercase py-3'>your name*</h4>
                                <input
                                    type="text"
                                    name="name"
                                    className='bg-[#f2f2f2] w-full py-2 focus:ring-0 focus:outline-none pl-5'
                                    placeholder='Enter Your Full Name'
                                    value={data.name}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className='mt-2'>
                                <h4 className='font-bold text-sm uppercase py-3'>your email*</h4>
                                <input
                                    type="text"
                                    name="email"
                                    className='bg-[#f2f2f2] w-full py-2 focus:ring-0 focus:outline-none pl-5'
                                    placeholder='Enter Your Email Address here'
                                    value={data.email}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className='mt-2'>
                                <h4 className='font-bold text-sm uppercase py-3'>city*</h4>
                                <input
                                    type="text"
                                    name="city"
                                    className='bg-[#f2f2f2] w-full py-2 focus:ring-0 focus:outline-none pl-5'
                                    placeholder='Enter Your City'
                                    value={data.city}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className='mt-2'>
                                <h4 className='font-bold text-sm uppercase py-3'>whatsapp number*</h4>
                                <input
                                    type="number"
                                    className='bg-[#f2f2f2] w-full py-2 focus:ring-0 focus:outline-none pl-5'
                                    placeholder='Enter Your whatsapp number'
                                    onKeyDown={(e) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()}
                                    name='phone'
                                    value={data.phone}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className='mt-2'>
                                <h4 className='font-bold text-sm uppercase py-3'>Your Age</h4>
                                <input type="number"
                                    name="age"
                                    className='bg-[#f2f2f2] w-full py-2 focus:ring-0 focus:outline-none pl-5'
                                    onKeyDown={(e) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()}
                                    placeholder='Enter Your Age'
                                    value={data.age}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className='mt-2'>
                                <h4 className='font-bold text-sm uppercase py-3'>Your Qualification*</h4>
                                <input
                                    type="text"
                                    name="qualification"
                                    className='bg-[#f2f2f2] w-full py-2 focus:ring-0 focus:outline-none pl-5'
                                    placeholder='Enter Your Qualification'
                                    value={data.qualification}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className='md:flex md:px-10 lg:px-0 md:flex-row md:justify-between flex flex-col justify-center items-center md:py-8 py-12'>
                                <Link to='/student-intake'>
                                    <button className='mb-10 md:mb-0  px-20 py-3 md:py-3 text-[#414042] font-bold text-xl uppercase rounded-full'>back</button>
                                </Link>
                                <button type='submit' className='bg-[#0047ab] px-20 py-3 text-[#f2f2f2] font-bold text-xl uppercase rounded-full'>Next</button>
                            </div>
                        </div>
                    </form>
                    <div className='flex flex-col lg:flex-row lg:justify-evenly py-8 bg-[#f2f2f2]'>
                        <div className='uppercase text-lg text-[#414042] font-bold text-center mt-10 mb-7 lg:mb-0'><p className='px-10 md:px-0'>how you will be contacted?</p></div>
                        <div className='text-[#414042] text-center lg:text-left '>
                            <p className='px-10 md:px-0'>Upon the submission of this form, we will contact you through <br className='hidden md:block' /> your <span className='font-bold'>WhatsApp number</span> or
                                <span className='font-bold'> email address</span> to share Graphic <br className='hidden md:block' /> Design Batch II 2024 Student Portal Login ID and other <br className='hidden md:block' /> relevant details with you.
                            </p>
                        </div>
                    </div>
                    <div className='bg-[#0047ab] md:py-7 flex flex-col md:flex-row md:justify-between px-10 items-center py-10'>
                        <div className='md:flex-row md:justify-between flex flex-col items-center gap-10 mb-5 md:mb-0'>
                            <div className="flex justify-center">
                                <img className='object-cover w-20' src={person} alt="Person" />
                            </div>
                            <div className="text-center sm:text-left py-3 md:py-0">
                                <h3 className='text                                #f2f2f2] font-bold uppercase text-xl'>still need any help</h3>
                                <p className='text-[#f2f2f2] py-1 px-3 md:px-0 lg:pr-5'>if you have any confusions, don't hesitate to contact support</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className='bg-[#f2f2f2] px-6 py-3 text-[#414042] font-bold text-lg uppercase rounded-full md:px-10'>contact support</button>
                        </div>
                        <button onClick={openModal} className='lg:hidden md:block fixed bottom-20 z-50 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 '>Refund Policy</button>
                    </div>
                </div>
            </div>
            {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
            {hasError && (
                <span className="text-sm text-white bg-red-500 p-1 rounded">
                    {hasError}
                </span>
            )}
            <ToastContainer />
        </>
    );
}

export default IntakeForm;

