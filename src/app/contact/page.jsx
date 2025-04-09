


export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 py-12">
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
        </div>
    );
}
