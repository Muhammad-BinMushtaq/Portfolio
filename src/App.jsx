import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Projects from './components/projects'
import ProjectsDetails from './components/projectsDetails'
import Contact from './components/contactForm'
import Home from './components/Home'
import About from './components/about'
import Page404 from './components/page404'
import Techstack from './components/techstack'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (


    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Page404 />} />
        <Route path="all-projects" element={<ProjectsDetails />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App