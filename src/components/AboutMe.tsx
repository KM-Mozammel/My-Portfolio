'use client';

export default function AboutMe() {
    return (
        <div className='p-4 md:py-8 sm:px-20 text-black bg-gray-200 dark:text-gray-300'>
            <span
                className="block text-2xl text-bold pb-2 mb-2 font-bold"
                style={{ borderBottom: "1px solid rgb(52, 109, 173)", maxWidth: 'fit-content' }}
            >About Me</span>
            <span className='font-bold'>Turning Ideas Into Reality</span>

            <p className='pt-2'>Over the years, I&apos;ve built real-world systems using C, PHP, JavaScript, Python, and C#.</p>

            <div className="flex flex-col sm:flex-row gap-2 py-5 px-0">
                <div
                    className='py-2 px-4 bg-[rgba(255,255,255,0.30)] shadow-[0_0px_5px_0px_rgba(108,108,122,0.47)] font-bold'
                >2.5+ Years of Real Life Experiece</div>
                <div
                    className='py-2 px-4 bg-[rgba(255,255,255,0.30)] shadow-[0_0px_5px_0px_rgba(108,108,122,0.47)] font-bold'
                >ASP.NET & React Expert</div>
                <div
                    className='py-2 px-4 bg-[rgba(255,255,255,0.30)] shadow-[0_0px_5px_0px_rgba(108,108,122,0.47)] font-bold'
                >AI / ML Developer</div>
            </div>
        </div>
    )
};