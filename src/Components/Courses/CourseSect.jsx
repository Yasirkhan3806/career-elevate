import React from 'react';
import { useCourse } from './CoursesContext.jsx';
import { Link } from 'react-router-dom';

function CourseSect() {
    const { courseData } = useCourse();

    return (
        <>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {courseData.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white p-4 text-black rounded-xl flex flex-col gap-3 shadow-md"
                    >
                        <img
                            className="h-[13rem] w-full object-cover rounded-lg"
                            src={course.image}
                            alt={course.title}
                        />
                        <h2 className="font-bold text-xl">{course.title}</h2>
                        <p>{course.description}</p>
                        <Link
                            to={`/courses/${course.title}`}
                            className="bg-blue-500 text-white w-1/2 self-center px-3 py-2 rounded-lg text-center hover:bg-blue-600"
                        >
                            Get Started
                        </Link>
                    </div>
                ))}
            </section>
        </>
    );
}

export default CourseSect;
