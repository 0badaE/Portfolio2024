import React from "react"
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import SocialLinks from "./components/SocialLinks"
import Footer from "./components/Footer"

function App() {
  
  return (
    <>
      <Navbar/>
      <Home/>
      
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
      <Footer/>
      
    </>
  )
}

export default App
