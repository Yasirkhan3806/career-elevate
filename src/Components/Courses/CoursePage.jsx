import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useCourse} from "./CoursesContext.jsx";

function CoursePage() {
    const [singleCourse, setSingleCourse] = useState([])
    const {title} = useParams();
    const {courseData} = useCourse()

    useEffect(() => {
        const singleCourseData = courseData.find((course) => course.title === title);
        setSingleCourse(singleCourseData)

    }, []);


    return (
        <div className={`w-[100vw] h-[100vh] flex justify-center items-center`}>
            {singleCourse && (
                singleCourse.map((course) => {
                        return (
                            <div>
                                <div><img src={course.image} alt=""/></div>
                                <div></div>
                            </div>
                        <div></div>
                    )
                    }
                )

            )}
        </div>
    );
}

export default CoursePage;