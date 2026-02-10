'use client';

import React from 'react'; ''
import { useEffect, useState } from "react";
import GetInTouch from './GetInTouch';

const BlogAndInsights = () => {
    const [innerWidth, setInnerWidth] = useState(0);

    useEffect(() => {
        setInnerWidth(window.innerWidth);
    }, []);
    return (
        <>
            <span className="text-2xl font-bold border-b-1 pb-2">Blog & Insights</span>
            <p className='pt-4 pb-4'>Latest articles & Tutorials</p>

            <div className="flex flex-col sm:flex-row gap-5 w-full">
                {/* Post 1 */}
                <div className="border rounded-xl overflow-hidden bg-white w-full sm:flex-1">
                    {/* Image */}
                    <img
                        src="/img/maguire.jpg"
                        alt="Post overview"
                        className="w-full h-48 object-cover"
                    />

                    <div className="p-4 space-y-3">
                        {/* Heading */}
                        <h3 className="text-lg font-semibold text-gray-900">
                            Eleanor Anne Maguire
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600">
                            Fueling the Next Generation of AI and Deep Learning. Cognitive Scientist Eleanor Ann Maguire.
                        </p>

                        {/* Date */}
                        <span className="block text-xs text-gray-500">
                            January 12, 2026
                        </span>

                        {/* Read More */}
                        <a target="_blank" href="https://www.linkedin.com/feed/update/urn:li:activity:7405861420401270784/">
                            <button className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:underline">
                                Read more →
                            </button>
                        </a>
                    </div>
                </div>

                {/* Post 2 */}
                <div className="border rounded-xl overflow-hidden bg-white w-full sm:flex-1">
                    {/* Image */}
                    <img
                        src="/img/microprocessor.jpg"
                        alt="Post overview"
                        className="w-full h-48 object-cover"
                    />

                    <div className="p-4 space-y-3">
                        {/* Heading */}
                        <h3 className="text-lg font-semibold text-gray-900">
                            India&apos;s microprocessor
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600">
                            The launch of DHRUV64 marks an important step in strengthening India’s.
                        </p>

                        {/* Date */}
                        <span className="block text-xs text-gray-500">
                            January 08, 2026
                        </span>

                        {/* Read More */}
                        <a target='_blank' href="https://www.linkedin.com/feed/update/urn:li:activity:7406885001818017792/">
                            <button className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:underline">
                                Read more →
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogAndInsights;
