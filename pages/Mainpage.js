import React from 'react'
import About from "./Components/About";
// import "./css/App.css";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Service from "./Components/Service";
import Skills from "./Components/Skills";


export const Mainpage = () => {
  return (
    <div>
       <Home />
       <About />
       <Service />
       <Skills/>
       <Project />
       <Blog />
       <Contact />
       <Footer />
    </div>
  )
}
