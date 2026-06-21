function Reviews() {
    try {
        const reviews = [
            {
                name: "Sarah Jenkins",
                role: "Startup Founder",
                content: "Absolutely amazing work! The communication was flawless, delivery was ahead of schedule, and the code quality is top-notch. Will definitely hire again.",
                rating: 5,
                country: "United States"
            },
            {
                name: "David Chen",
                role: "E-commerce Manager",
                content: "CodingLab exceeded all expectations. The website is incredibly fast and looks stunning on all devices. A true professional who understands both design and development.",
                rating: 5,
                country: "Canada"
            },
            {
                name: "Emma Watson",
                role: "Marketing Director",
                content: "Very responsive and proactive. He suggested improvements that I hadn't even thought of. The final landing page converted 3x better than our previous one.",
                rating: 5,
                country: "United Kingdom"
            }
        ];

        return (
            <section id="reviews" className="bg-[var(--bg-dark)] border-t border-gray-800" data-name="Reviews" data-file="components/Reviews.js">
                <div className="section-padding">
                    <h2 className="section-title">Client Testimonials</h2>
                    <p className="section-subtitle">Don't just take my word for it. Here is what my Fiverr clients have to say about my services.</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-[var(--bg-card)] p-8 rounded-2xl border border-gray-800 relative">
                                <span className="icon-quote absolute top-6 right-8 text-4xl text-gray-700 opacity-30"></span>
                                <div className="flex gap-1 mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="icon-star text-[var(--primary)] text-sm fill-current"></span>
                                    ))}
                                </div>
                                <p className="text-[var(--text-muted)] mb-8 italic">"{review.content}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center font-bold text-xl">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{review.name}</h4>
                                        <p className="text-xs text-[var(--text-muted)]">{review.role} • {review.country}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <a href="https://www.fiverr.com/codinglab707" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-white transition-colors border-b border-[var(--primary)] pb-1">
                            Read more reviews on Fiverr <span className="icon-arrow-right"></span>
                        </a>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Reviews component error:', error);
        return null;
    }
}