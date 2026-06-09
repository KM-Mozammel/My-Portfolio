'use client';

import React from 'react';
import GetInTouch from './GetInTouch';
import BlogAndInsights from './BlogAndInsights';

const BlogInsights = () => {
    return (
        <div
            className="p-4 md:py-8 sm:px-20 text-white flex flex-col lg:flex-row gap-10"
            style={{
                backgroundColor: 'rgb(9, 25, 43)',
                minHeight: '40vh',
            }}
        >
            {/* Left */}
            <div className="w-full lg:w-1/2 lg:border-r border-gray-700 lg:pr-6">
                <BlogAndInsights />
            </div>

            {/* Right */}
            <div className="w-full lg:w-1/2 lg:pl-6">
                <GetInTouch />
            </div>
        </div>
    );
};

export default BlogInsights;