import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from "./Components/HomePage/Main.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';



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
    <Main/>
    </>
  )
}

export default App
