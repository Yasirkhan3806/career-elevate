import React from 'react';
import CourseSect from "./CourseSect.jsx";

function CoursesMain() {
    return (
        <>
            <section>
                <div className={`max-w-full bg-blue-500  text-white p-24 `}>
                    <div className={`text-center`}>
                        <h1 data-aos={`fade-up`} className={`text-[6rem] font-bold text-shadow-lg`}>Courses</h1>
                        <p data-aos={`fade-up`} data-aos-delay={`200`} className={`text-lg`}>Explore the wide range of courses and start learning today!</p>


                    </div>
                    <CourseSect/>
                </div>
            </section>

        </>
    );
}

export default CoursesMain;