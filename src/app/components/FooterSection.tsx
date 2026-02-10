'use client';

import React from 'react'; ''
import { useEffect, useState } from "react";
import GetInTouch from './GetInTouch';
import BlogAndInsights from './BlogAndInsights';

const FooterSection = () => {
    return (
        <div
            className="p-4 md:py-8 sm:px-20 text-white flex flex-col lg:flex-row justify-between gap-10"
            style={{
                backgroundColor: 'rgb(9, 25, 43)',
                minHeight: '40vh',
            }}
        >
            <div className='lg:w-1/2 sm:w-full border-none lg:border-r-1'>
                <BlogAndInsights />
            </div>
            <div className='lg:w-1/2 sm:w-full'>
                <GetInTouch />
            </div>
        </div>
    );
};

export default FooterSection;
