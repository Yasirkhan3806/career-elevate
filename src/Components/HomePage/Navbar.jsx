import React from 'react';
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <section className={`w-full bg-blue-500 h-[12vh] text-white flex justify-between items-center px-10 fixed top-0 z-10`}>
                <div>
                    <h1 className={`text-3xl font-bold`}>Career Elevate</h1>
                </div>
                <div>
                    <ul className={`flex gap-10 text-lg font-semibold`}>
                        <li className={`hover:underline cursor-pointer`}><Link to={`/`}>Home</Link></li>
                        <li className={`hover:underline cursor-pointer`}><Link to={`/courses`}>Courses</Link></li>
                        <li className={`hover:underline cursor-pointer`}><Link to="/About-Us">About Us</Link></li>


                    </ul>
                </div>

            </section>
            <hr/>
        </>
    );
};

export default Navbar;
