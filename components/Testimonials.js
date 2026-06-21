function Testimonials() {
    try {
        const reviews = [
            {
                name: "Sarah Jenkins",
                country: "United States",
                text: "Exceptional work! Delivered ahead of schedule and the code quality was top-notch. Will definitely hire again.",
                rating: 5
            },
            {
                name: "Mark T.",
                country: "United Kingdom",
                text: "Understood my complex requirements perfectly and implemented them flawlessly. Great communication throughout.",
                rating: 5
            },
            {
                name: "Elena Rodriguez",
                country: "Spain",
                text: "Turned my messy design into a beautiful, functional website. Very patient with my revisions. Highly recommended!",
                rating: 5
            }
        ];

        return (
            <section id="reviews" className="py-20 bg-white" data-name="testimonials" data-file="components/Testimonials.js">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="section-title">Client Feedback</h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                                <div className="flex text-yellow-400 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <div key={i} className="icon-star text-lg fill-current"></div>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold mr-3">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                                        <span className="text-xs text-gray-500">{review.country}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Testimonials component error:', error);
        return null;
    }
}