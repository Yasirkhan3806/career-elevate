import React, { createContext, useContext } from 'react';

// The course data
const courseData = [
    {
        id: 1,
        title: "Full Stack Web Development",
        description: "Learn to build dynamic and responsive web applications using HTML, CSS, JavaScript, and popular frameworks like React and Node.js.",
        image: "https://img.freepik.com/free-vector/flat-d-isometric-web-development-infographics-concept_126523-1540.jpg?t=st=1746266912~exp=1746270512~hmac=e58e11b7da3a0f341528ed3070cdffd137e7834863d43e5f2886d9868a278c25&w=740",
        links: [{
            roadmap: <iframe width="560" height="315" src="https://www.youtube.com/embed/GxmfcnU3feo?si=da9kvXMKMzn_E5Lk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
            ytEnglish: <iframe width="560" height="315" src="https://www.youtube.com/embed/ZxKM3DCV2kE?si=NS2xO5rxQUaKYsZk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
            ytHindi: <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=5umUGR0CHVVp7ZQP&amp;list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
            freeCodeCamp: "https://www.freecodecamp.org/learn/full-stack-developer/",
        }],
        roadmap: "https://guides.codewithmosh.com/web-developer-roadmap",
    },
    {
        id: 2,
        title: "Data Science",
        description: "Dive into the world of data analysis, visualization, and machine learning using Python and popular libraries like Pandas, NumPy, and Scikit-learn.",
        image: "https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18141.jpg?t=st=1746266459~exp=1746270059~hmac=40ebd74a344069477233821f6ce6cc0dac5c8b6f9a414d16474ca3bbf499b493&w=740",
        links: [{
            roadmap: <iframe width="560" height="315" src="https://www.youtube.com/embed/9R3X0JoCLyU?si=SJ4pzADMxHo4msC2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
            ytEnglish: <iframe width="560" height="315" src="https://www.youtube.com/embed/ua-CiDNNj30?si=CKvG3DwgHnyc5VXy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
            ytHindi: <iframe width="560" height="315" src="https://www.youtube.com/embed/gDZ6czwuQ18?si=3tcEF5ZTSwIF-3er" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
            KaggleCourse: "https://www.kaggle.com/discussions/general/254306",
        }],
        roadmap: "https://guides.codewithmosh.com/data-science-roadmap"
    },
    {
        id: 3,
        title: "Machine Learning",
        description: "Understand the fundamentals of machine learning, including supervised and unsupervised learning, and build predictive models using Python.",
        image: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?t=st=1746266524~exp=1746270124~hmac=e64ee5d05490f7c7a26c38cd6a3d939b4681223b9526bde3638f28dc7ad12a7b&w=740",
        links: [{
            roadmap: <iframe width="560" height="315" src="https://www.youtube.com/embed/7IgVGSaQPaw?si=BdfWQfbcQJlhgsBD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
            ytEnglish: <iframe width="560" height="315" src="https://www.youtube.com/embed/ukzFI9rgwfU?si=6v7XkWgqj1rJmXlE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
            ytHindi: <iframe width="560" height="315" src="https://www.youtube.com/embed/6p6n7g5t9sI?si=3tcEF5ZTSwIF-3er" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
            KaggleCourse: "https://www.kaggle.com/discussions/general/254306",
        }],
        roadmap: "https://guides.codewithmosh.com/machine-learning-engineer-roadmap"
    }
];

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
    return (
        <CourseContext.Provider value={{ courseData }}>
            {children}
        </CourseContext.Provider>
    );
};

// Custom hook to use the CourseContext
export const useCourse = () => useContext(CourseContext);
