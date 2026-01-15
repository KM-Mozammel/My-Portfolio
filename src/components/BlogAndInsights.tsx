import React from 'react';
import { useEffect, useState } from "react";

const BlogAndInsights = () => {
    const [innerWidth, setInnerWidth] = useState(0);

    useEffect(() => {
        setInnerWidth(window.innerWidth);
    }, []);
    return (
        <div
            className="text-white flex flex-col lg:flex-row justify-between gap-10"
            style={{
                background: 'linear-gradient(to bottom, #022341 0%, #031c33 55%, rgb(4, 20, 49) 100%)',
                minHeight: '40vh',
                padding: innerWidth > 500 ? "50px 80px" : "20px 20px",
            }}
        >

            <div className='lg:w-1/2 sm:w-full border-none lg:border-r-1'>
                <span className="text-2xl font-bold border-b-1 pb-2">Blog & Insights</span>
                <p className='pt-4 pb-2'>Latest articles & Tutorials</p>

                <div className="flex flex-col sm:flex-row gap-5 w-full">
                    {/* Post 1 */}
                    <div className="border rounded-xl overflow-hidden bg-white w-full sm:flex-1">
                        {/* Image */}
                        <img
                            src="https://media.licdn.com/dms/image/v2/D5622AQHzeKSohwKXQQ/feedshare-shrink_1280/B56Zsbns_wG4As-/0/1765694953926?e=1770249600&v=beta&t=-W3NnQqc5Tl3VTOw-JfBIoHnjMCJB3xCzSLDlPQ2BEM"
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
                                Fueling the Next Generation of AI and Deep Learning
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
                            src="https://media.licdn.com/dms/image/v2/D5622AQFtLDfg_6FTDw/feedshare-shrink_2048_1536/B56ZsqKppeGsAw-/0/1765938995648?e=1770249600&v=beta&t=LRWNDX8L-My0PwPQWrsX9Wk8hVFb09cCt1aIsEybzm8"
                            alt="Post overview"
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-4 space-y-3">
                            {/* Heading */}
                            <h3 className="text-lg font-semibold text-gray-900">
                                India's microprocessor
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
            </div>
            <div className='lg:w-1/2 sm:w-full background-blue-500'>
                <span className="text-2xl font-bold border-b-1 pb-2">Get In Touch</span>
                <p className='pt-4 pb-2'>Let's work together</p>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        placeholder="Your Message"  
                        className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                    ></textarea>
                    <div className="flex items-center gap-4">
                        <div className="flex-1 border-t border-gray-400"></div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition whitespace-nowrap"
                        >
                            Send Message
                        </button>
                        <div className="flex-1 border-t border-gray-400"></div>
                    </div>
                </form>

                <div className="pt-4">
                    <div className="flex flex-col gap-2">
                        <a href="mailto:mozammel.khandakar@outlook.com" className="text-blue-400 hover:text-blue-300 transition">
                            📧 mozammel.khandakar@outlook.com
                        </a>
                        <a href="https://www.linkedin.com/in/mozammel-khandakar/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">
                            🔗 Mozammel Khandakar | LinkedIn
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogAndInsights;
