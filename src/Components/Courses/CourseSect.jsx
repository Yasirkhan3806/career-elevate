import React from 'react';
import {useCourse} from "./CoursesContext.jsx";
import {Link} from "react-router-dom";

function CourseSect() {
    const {courseData} = useCourse();



return (
    <>
        <section className={`flex gap-4` }>
            {courseData.map((course) => {
                return(

                    <div className={`w-1/3 h-1/6 bg-white p-4 text-black rounded-xl flex flex-col gap-3`} id={course.id}>
                        <img className={`h-[13rem] rounded-lg`} src={course.image} alt={course.title}/>
                        <h2 className={`font-bold text-xl`}>{course.title}</h2>
                        <p>{course.description}</p>
                        <button className={`bg-blue-500 text-white w-1/2 self-center px-1 py-2 rounded-lg cursor-pointer`} ><Link to={`/courses/${course.title}`}>Get Started</Link></button>
                    </div>
                )
            })}
        </section>
    </>
);
}

export default CourseSect;