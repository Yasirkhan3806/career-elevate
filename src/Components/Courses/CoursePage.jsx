import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useCourse } from "./CoursesContext.jsx";

function CoursePage() {
    const [singleCourse, setSingleCourse] = useState(null);
    const [playVideo, setPlayVideo] = useState('');
    const { title } = useParams();
    const { courseData } = useCourse();

    useEffect(() => {
        const singleCourseData = courseData.find((course) => course.title === title);
        if (singleCourseData) {
            setSingleCourse(singleCourseData);
            setPlayVideo(singleCourseData.links?.roadmap || '');
        }
    }, [courseData, title]);

    const currentVideo = (videoName) => {
        if (singleCourse && singleCourse.links && singleCourse.links[videoName]) {
            setPlayVideo(singleCourse.links[videoName]);
        }
    };

    return (
        <div className="w-[100vw] min-h-[100vh] flex flex-col justify-center items-center mt-32">
            {singleCourse && (
                <div className="text-black flex flex-wrap p-5 gap-10">
                    <div className="w-[40%] shadow-2xl">
                        <img className="rounded-2xl w-full" src={singleCourse.image} alt={singleCourse.title} />
                    </div>
                    <div className="w-[55%] px-6 flex flex-col gap-6">
                        <h2 className="text-5xl font-bold text-blue-500">{singleCourse.title}</h2>
                        <hr />
                        <p>{singleCourse.longDesc}</p>
                        <hr />
                        <a href={singleCourse.roadmap} target="_blank" rel="noopener noreferrer">
                            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg font-bold text-xl">Download RoadMap</button>
                        </a>
                    </div>
                </div>
            )}
            <hr className="w-full my-6" />

            {playVideo && (
                <section id="Videos" className="w-full p-6">
                    <ul className="flex gap-10 text-lg font-semibold justify-center">
                        <li onClick={() => currentVideo("ytEnglish")} className="hover:underline cursor-pointer">Youtube English</li>
                        <li onClick={() => currentVideo("ytHindi")} className="hover:underline cursor-pointer">Youtube Urdu</li>
                        <li onClick={() => currentVideo("roadmap")} className="hover:underline cursor-pointer">Roadmap</li>
                    </ul>
                    <div className="w-full flex justify-center my-6">
                        <iframe
                            src={playVideo}
                            className="w-[95vw] h-[80vh]"
                            frameBorder="0"
                            allowFullScreen
                            title="Course Video"
                        />
                    </div>
                </section>
            )}
        </div>
    );
}

export default CoursePage;
