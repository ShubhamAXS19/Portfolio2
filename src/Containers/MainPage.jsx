import React from 'react'
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
import AboutMe from '../Components/AboutMe/AboutMe';
import Skills from '../Components/Skills/Skills';
// import { Deck } from '../Components/Skills/Deck';
import Footer from  '../Components/Footer/Footer'
import Contact from '../Components/Contact/Contact';
import Project from '../Components/Projects/Project';

const MainPage = () => {
  return (
        <div>
            <Navbar/>
            <Home/>
            <AboutMe/>
            {/* <Skills/> */}
            <Project/>
            <Contact/>
            <Footer/>

        </div>
    )
}

export default MainPage