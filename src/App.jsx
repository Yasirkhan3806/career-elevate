import React, {useEffect} from 'react'
import './App.css'
import Main from "./Components/HomePage/Main.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BrowserRouter as Router} from "react-router";
import Navbar from "./Components/HomePage/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import AboutUsMain from "./Components/AboutUs/AboutUsMain.jsx";
import CoursesMain from "./Components/Courses/CoursesMain.jsx";
import CoursePage from "./Components/Courses/CoursePage.jsx";
import {CourseProvider} from "./Components/Courses/CoursesContext.jsx";



function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them
        });
    },[])

  return (
    <>
        <CourseProvider>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/courses" element={<CoursesMain />} />
                <Route path="/courses/:title" element={<CoursePage />} />
                <Route path="/About-Us" element={<AboutUsMain/>}/>

            </Routes>
        </Router>
        </CourseProvider>

    </>
  )
}

export default App
