import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const RefundPolicy = () => {

    return (
        <div className="hidden lg:inline-block bg-white w-[280px] pl-16 mt-16 pr-12">
            <div>
                <h3 className='uppercase font-semibold text-xl pb-5'>Refund Policy</h3>
                <p>Your payment is secured with our 1-day money-back guarantee. This means if you are not
                    staisfied with the training program for any reason, you can apply for a refund within
                    24 hours of gaining a course access and you will get your money back without
                    any further questions.</p>
            </div>
        </div>
    );
};

export default RefundPolicy
