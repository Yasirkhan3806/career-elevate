import React from 'react';
import {Link} from "react-router-dom";

function Hero() {
    return (
        <>
            <section>
                <div className={`max-w-full bg-blue-500 h-[100vh] text-white flex justify-center items-center`}>
                    <div className={`text-center`}>
                        <h1 data-aos={`fade-up`} className={`text-[6rem] font-bold text-shadow-lg`}>Elevate Your
                            Career</h1>
                        <p data-aos={`fade-up`} data-aos-delay={`200`} className={`text-lg`}>Take the first step towards
                            your Dream job and Start Learning Today For
                            Free .</p>
                        <button data-aos={`fade-up`} data-aos-delay={`300`}
                                className={`mt-6 bg-white text-blue-500 px-6 py-2 rounded-full font-bold hover:bg-gray-200 cursor-pointer`}>
                            <Link to={`/About-Us`}> Get Started </Link>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;