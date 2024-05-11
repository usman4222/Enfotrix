import React, { useState } from 'react';
import { Button, Modal as FlowbiteModal } from 'flowbite-react';

const Modal = ({ onClose }) => {
    const [openModal, setOpenModal] = useState(true);

    return (
        <>
            <FlowbiteModal show={openModal} onClose={onClose} className='bg-black px-5 md:px-20 pt-10 md:pt-0'>
                <FlowbiteModal.Header>Refund Policy</FlowbiteModal.Header>
                <FlowbiteModal.Body>
                    <div className='space-y-6'>
                        <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                            Your payment is secured with our 1-day money-back guarantee. This means if you are not
                            staisfied with the training program for any reason, you can apply for a refund within
                            24 hours of gaining a course access and you will get your money back without
                            any further questions.
                        </p>
                    </div>
                </FlowbiteModal.Body>
            </FlowbiteModal>
        </>
    );
};

export default Modal;
