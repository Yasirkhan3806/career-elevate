import React from 'react';

function AboutUsMain() {
    return (
        <section className="bg-[#1e73f2] text-white min-h-screen p-10 flex flex-col items-center justify-center">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold mb-6 text-center drop-shadow-lg">About Us</h1>
                <p className="text-lg text-center max-w-3xl mx-auto mb-10">
                    Career Elevate is your gateway to mastering the most in-demand tech skills.
                    Our mission is to empower learners through practical, accessible, and engaging online courses
                    that open doors to new career opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">🚀 Our Mission</h2>
                        <p>
                            To deliver high-quality, hands-on tech education that equips learners with real-world skills for a successful career in software development and data science.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">💡 Why Us?</h2>
                        <p>
                            We combine interactive content, industry-focused projects, and expert guidance to help students learn faster and smarter.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">🌍 Join Our Journey</h2>
                        <p>
                            Whether you're a student, professional, or entrepreneur — we're here to help you thrive in a tech-driven world.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-bold mb-2">Built by passionate educators & developers</h3>
                    <p className="text-lg max-w-3xl mx-auto">
                        At Career Elevate, we're not just another e-learning platform — we're a movement to bridge the gap between knowledge and opportunity.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutUsMain;
