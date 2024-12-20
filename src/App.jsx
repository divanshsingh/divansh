import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import gsap from 'gsap';

const App = () => {
  const mouseMove = (dets) => {
    gsap.to('.box', {
      x:dets.x,
      y:dets.y,
      duration: 0.9,
      ease: "back.out"
    });

}
  return (
    <>
    <div onMouseMove={mouseMove}>
      <div className="box w-[20px] h-[20px] rounded-full bg-[#666666] fixed"></div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Footer />
    </div>
    </>
  )
}

export default App
