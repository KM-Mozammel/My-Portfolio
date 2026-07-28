'use client';

const aboutMeData = {
    title: "About Me",
    subtitle: "Turning Ideas Into Reality",
    description:
        "Over the years, I've built real-world systems using C, PHP, JavaScript, Python, and C#.",
    highlights: [
        "6+ Years of Professional Experience",
        "ASP.NET & React Expert",
        "Python (Pandas/NumPy)",
        "Unity Game Development",
        "AI/ML/Agent/RAG/MCP/Embedding",
        "Blazor",
        "Angular",
        "React JS / Next JS",
    ],
};

export default function AboutMe() {
    return (
        <div className="p-4 md:py-8 sm:px-20 text-black bg-gray-200 dark:text-gray-300">
            <span
                className="block text-2xl text-bold pb-2 mb-2 font-bold"
                style={{
                    borderBottom: "1px solid rgb(52, 109, 173)",
                    maxWidth: "fit-content",
                }}
            >
                {aboutMeData.title}
            </span>

            <span className="font-bold">{aboutMeData.subtitle}</span>

            <p className="pt-2">{aboutMeData.description}</p>

            <div className="flex flex-col sm:flex-row gap-2 py-5 px-0 flex-wrap">
                {aboutMeData.highlights.map((item, index) => (
                    <div
                        key={index}
                        className="py-2 px-4 bg-[rgba(255,255,255,0.30)] shadow-[0_0px_5px_0px_rgba(108,108,122,0.47)] font-bold"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
