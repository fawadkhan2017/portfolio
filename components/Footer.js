function Footer() {
    try {
        const currentYear = 2026;
        return (
            <footer className="bg-[#0b1120] border-t border-gray-800 pt-20 pb-10" data-name="Footer" data-file="components/Footer.js">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div className="lg:col-span-2">
                            <a href="#home" className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 rounded bg-[var(--primary)] flex items-center justify-center">
                                    <span className="icon-code text-white text-xl"></span>
                                </div>
                                CodingLab707
                            </a>
                            <p className="text-[var(--text-muted)] max-w-sm mb-8 leading-relaxed">
                                Professional Web Developer specializing in creating modern, responsive, and high-performance websites and web applications.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://www.fiverr.com/codinglab707" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary)] transition-colors text-white" title="Fiverr Profile">
                                    <span className="font-bold text-sm">fi</span>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary)] transition-colors text-white">
                                    <span className="icon-github"></span>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary)] transition-colors text-white">
                                    <span className="icon-twitter"></span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                            <ul className="flex flex-col gap-4 text-[var(--text-muted)]">
                                <li><a href="#home" className="hover:text-[var(--primary)] transition-colors">Home</a></li>
                                <li><a href="#services" className="hover:text-[var(--primary)] transition-colors">Services</a></li>
                                <li><a href="#portfolio" className="hover:text-[var(--primary)] transition-colors">Portfolio</a></li>
                                <li><a href="#reviews" className="hover:text-[var(--primary)] transition-colors">Reviews</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-6">Contact</h4>
                            <ul className="flex flex-col gap-4 text-[var(--text-muted)]">
                                <li className="flex items-start gap-3">
                                    <span className="icon-mail mt-1 text-[var(--primary)]"></span>
                                    <span>Available on Fiverr<br/><a href="https://www.fiverr.com/codinglab707" className="text-[var(--primary)] hover:underline">Message me</a></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="icon-globe mt-1 text-[var(--primary)]"></span>
                                    <span>Worldwide<br/>Remote Work</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[var(--text-muted)] text-sm">
                        <p>&copy; {currentYear} CodingLab707. All rights reserved.</p>
                        <p>Designed & Built for Web Excellence</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        return null;
    }
}