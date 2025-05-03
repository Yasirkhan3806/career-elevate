import React, { createContext, useContext } from 'react';

// The course data
const courseData = [
    {
        id: 1,
        title: "Full Stack Web Development",
        description: "Learn to build dynamic and responsive web applications using HTML, CSS, JavaScript, and popular frameworks like React and Node.js.",
        longDesc: "Full Stack Development is the practice of building both the front-end and back-end of web applications. A full stack developer is proficient in client-side technologies like HTML, CSS, and JavaScript frameworks such as React or Angular, as well as server-side tools like Node.js, Express, and databases such as MongoDB or PostgreSQL. This dual capability allows them to design, develop, and maintain entire web systems, handling everything from user interface design to database management and server deployment. Full stack development is highly valued in startups and agile teams, where developers need to work across the stack to deliver complete solutions efficiently.",
        image: "https://img.freepik.com/free-vector/flat-d-isometric-web-development-infographics-concept_126523-1540.jpg",
        links: {
            roadmap: "https://www.youtube.com/embed/GxmfcnU3feo?si=da9kvXMKMzn_E5Lk",
            ytEnglish: "https://www.youtube.com/embed/ZxKM3DCV2kE?si=NS2xO5rxQUaKYsZk",
            ytHindi: "https://www.youtube.com/embed/videoseries?si=5umUGR0CHVVp7ZQP&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w",
            freeCodeCamp: "https://www.freecodecamp.org/learn/full-stack-developer/"
        },
        roadmap: "https://guides.codewithmosh.com/web-developer-roadmap"
    },
    {
        id: 2,
        title: "Data Science",
        description: "Dive into the world of data analysis, visualization, and machine learning using Python and popular libraries like Pandas, NumPy, and Scikit-learn.",
        longDesc: "Data Science involves extracting insights and knowledge from structured and unstructured data using scientific methods, processes, algorithms, and systems. It combines skills from computer science, statistics, and domain expertise to process and analyze big data. A data scientist uses tools such as Python, R, SQL, and libraries like Pandas, NumPy, and Scikit-learn to manipulate data and build predictive models. Applications range from business intelligence to artificial intelligence and automation.",
        image: "https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18141.jpg",
        links: {
            roadmap: "https://www.youtube.com/embed/9R3X0JoCLyU?si=SJ4pzADMxHo4msC2",
            ytEnglish: "https://www.youtube.com/embed/ua-CiDNNj30?si=CKvG3DwgHnyc5VXy",
            ytHindi: "https://www.youtube.com/embed/gDZ6czwuQ18?si=3tcEF5ZTSwIF-3er",
            KaggleCourse: "https://www.kaggle.com/discussions/general/254306"
        },
        roadmap: "https://guides.codewithmosh.com/data-science-roadmap"
    },
    {
        id: 3,
        title: "Machine Learning",
        description: "Understand the fundamentals of machine learning, including supervised and unsupervised learning, and build predictive models using Python.",
        longDesc: "Machine Learning (ML) is a subset of Artificial Intelligence that enables systems to learn and improve from experience without being explicitly programmed. ML algorithms use historical data to identify patterns and make predictions or decisions. It includes supervised learning, where models are trained on labeled data, and unsupervised learning, where models find hidden structures in unlabeled data. Tools commonly used include Python, TensorFlow, Scikit-learn, and Keras.",
        image: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg",
        links: {
            roadmap: "https://www.youtube.com/embed/7IgVGSaQPaw?si=BdfWQfbcQJlhgsBD",
            ytEnglish: "https://www.youtube.com/embed/ukzFI9rgwfU?si=6v7XkWgqj1rJmXlE",
            ytHindi: "https://www.youtube.com/embed/6p6n7g5t9sI?si=3tcEF5ZTSwIF-3er"
        },
        roadmap: "https://www.dataquest.io/blog/learning-paths-for-machine-learning/"
    },
    {
        id: 4,
        title: "Cybersecurity",
        description: "Protect systems and networks from digital attacks by learning the fundamentals of cybersecurity, including risk assessment, threat analysis, and security protocols.",
        longDesc: "Cybersecurity is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It encompasses various domains such as network security, application security, information security, and operational security. Professionals in this field are responsible for implementing security measures, monitoring systems for breaches, and responding to cyber threats. With the increasing reliance on digital infrastructure, cybersecurity has become a critical component in safeguarding sensitive information and ensuring the integrity of systems.",
        image: "https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg",
        links: {
            roadmap: "https://www.youtube.com/embed/v7BNtpw53AA?si=K7qibDds67RRfuhD",
            ytEnglish: "https://www.youtube.com/embed/hXSFdwIOfnE?si=n_5VI9KArgKPSHqY",
            ytHindi: "https://www.youtube.com/embed/kFyvW7OCYrQ?si=S9UzKUzHyplEckN_"
        },
        roadmap: "https://raw.githubusercontent.com/An0nUD4Y/Cybersec-Talks/main/Roadmap%20To%20Cybersecurity%20.pdf"
    },
    {
        id: 5,
        title: "Cloud Computing",
        description: "Learn how to deliver computing services over the internet, including servers, storage, databases, networking, software, and analytics.",
        longDesc: "Cloud Computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ('the cloud') to offer faster innovation, flexible resources, and economies of scale. It enables organizations to access technology services on-demand without owning and maintaining physical data centers. Key service models include Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Cloud computing is foundational to modern IT infrastructure and digital transformation.",
        image: "https://img.freepik.com/free-vector/cloud-computing-concept-illustration_114360-429.jpg",
        links: {
            roadmap: "https://www.youtube.com/embed/1PAPSnmpZQY",
            ytEnglish: "https://www.youtube.com/embed/EN4fEbcFZ_E?si=vW88NRiq8lY53SDa",
            ytHindi: "https://www.youtube.com/embed/videoseries?si=4JdjJkk1DHUpZ_ah&amp;list=PLxCzCOWd7aiHRHVUtR-O52MsrdUSrzuy4"
        },
        roadmap: "https://www.cloudengineeracademy.io"
    },
    {
        id: 6,
        title: "Mobile App Development",
        description: "Design and build mobile applications for Android and iOS platforms using modern tools and frameworks.",
        longDesc: "Mobile App Development involves creating software applications that run on mobile devices. Developers can build native apps for specific platforms like Android or iOS, or use cross-platform frameworks such as Flutter or React Native to create apps that work on multiple platforms. The process includes designing user interfaces, writing code, testing, and deploying applications. With the proliferation of smartphones, mobile app development has become a vital skill in the tech industry.",
        image: "https://img.freepik.com/free-vector/mobile-app-development-concept_23-2148684983.jpg",
        links: {
            roadmap: "https://www.youtube.com/embed/yye7rSsiV6k",
            ytEnglish: "https://www.youtube.com/embed/VPvVD8t02U8?si=nuD7HuycTtMZeHvt",
            ytHindi: "https://www.youtube.com/embed/videoseries?si=LC6z7jzy4lYmrGpc&amp;list=PLFyjjoCMAPtxq8V9fuVmgsYKLNIKqSEV4"
        },
        roadmap: "https://guides.codewithmosh.com/mobile-app-developer-roadmap"
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
