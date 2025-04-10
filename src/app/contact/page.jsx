


export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center  flex-col  px-4 py-12">
            <div className="max-w-xl w-full bg-gray-800 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-amber-300">Get in Touch</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full mt-1 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-amber-300"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full mt-1 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-amber-300"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full mt-1 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-amber-300"
                            placeholder="Write your message here..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-amber-300 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-amber-400 transition-all duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <div className='mt-9 w-full pb-5 '>
                <iframe className='w-full h-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2836996142496!2d75.79272447468486!3d26.86272616223834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5eb3f62c46b%3A0x1520669008d3a150!2sWsCube%20Tech%20-%20Upskilling%20Bharat!5e0!3m2!1sen!2sin!4v1744262662830!5m2!1sen!2sin"></iframe>

            </div>
        </div>
    );
}
