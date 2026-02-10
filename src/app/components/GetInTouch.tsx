export default function GetInTouch() {
    return (
        <>
            <span className="text-2xl font-bold border-b-1 pb-2">Get In Touch</span>
            <p className='pt-4 pb-4'>Let&apos;s work together</p>
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
        </>
    );
}