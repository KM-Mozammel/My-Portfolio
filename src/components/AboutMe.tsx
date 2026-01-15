import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function AboutMe() {
    const [innerWidth, setInnerWidth] = useState(0);

    useEffect(() => {
        setInnerWidth(window.innerWidth);
    }, []);
    
    return (
        <div
            style={{ padding: innerWidth > 500 ? "30px 80px" : "20px 20px", color: 'black' }}
        >
            <span
                className="block text-2xl text-bold pb-2 mb-2 font-bold"
                style={{ borderBottom: "1px solid rgb(52, 109, 173)", maxWidth: 'fit-content' }}
            >About Me</span>
            <span>Turning Ideas Into Reality</span>

            <p style={{ color: 'gray', paddingTop: '10px' }}>Over the years, I've built real-world systems using C, PHP, JavaScript, Python, and C#.</p>

            <div
                className="about-me-overview-container"
            >
                <div className='about-me-overview'>5+ Years Experiece</div>
                <div className='about-me-overview'>ASP.NET & React Expert</div>
                <div className='about-me-overview'>AI / ML Developer</div>
            </div>
        </div>
    )
};