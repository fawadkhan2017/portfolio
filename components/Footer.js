function Footer() {
    try {
        return (
            <footer className="bg-gray-900 text-gray-400 py-12" data-name="footer" data-file="components/Footer.js">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <span className="text-2xl font-bold text-white tracking-tighter">Fawad.</span>
                        <p className="mt-2 text-sm">© 2026 Fawad (@codinglab707). All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">
                            <span className="sr-only">Twitter</span>
                            <div className="icon-twitter text-xl"></div>
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <div className="icon-linkedin text-xl"></div>
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            <span className="sr-only">GitHub</span>
                            <div className="icon-github text-xl"></div>
                        </a>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        return null;
    }
}