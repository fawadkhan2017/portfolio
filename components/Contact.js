function Contact() {
    try {
        const handleSubmit = (e) => {
            e.preventDefault();
            // Typically would send to a server or mailto
            alert("Message form placeholder: In production, this would send an email or API request.");
        };

        return (
            <section id="contact" className="py-20 bg-[var(--primary-color)]" data-name="contact" data-file="components/Contact.js">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden md:flex">
                        <div className="md:w-1/2 p-10 bg-gray-900 text-white flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4">Let's work together</h2>
                            <p className="text-gray-400 mb-8">Ready to start your next project? Send me a message detailing your needs and I'll get back to you within 24 hours.</p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center text-gray-300">
                                    <div className="icon-check text-green-400 mr-3"></div>
                                    Fast Response Time
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <div className="icon-check text-green-400 mr-3"></div>
                                    Free Consultation
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <div className="icon-check text-green-400 mr-3"></div>
                                    100% Satisfaction Guarantee
                                </div>
                            </div>

                            <div className="mt-10">
                                <a href="https://www.fiverr.com/codinglab707" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 transition-colors">
                                    Hire Me on Fiverr
                                </a>
                            </div>
                        </div>
                        
                        <div className="md:w-1/2 p-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] outline-none" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] outline-none" required />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                                    <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] outline-none resize-none" required></textarea>
                                </div>
                                <button type="submit" className="w-full btn-primary">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        return null;
    }
}