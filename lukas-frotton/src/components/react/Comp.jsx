import React from 'react'; 
import Myback01 from './svgs/Myback01';
import Intro from './Intro'
import About from './About';
import Navbar from './Navbar'; 
import Touch from './Touch'; 
import Projects from "./Projects";
import Academics from "./Academics"; 
import Skills from './Skills'; 
import Whatnext from "./Whatnext";

export default function ReactComposite() {



  return (
    <main  class = "bg-gray-800 h-full" style={{ position: 'relative', overflow: 'hidden' }}>
      <Myback01/>
      <div class="cursor-default h-full text-gray-50 py-11" style={{ position: 'relative', zIndex: 1 }}> 
        <Navbar/>
        <Intro/>
        <About/>
        <Touch/>
        <Projects/>
        <Skills/>
        <Academics/>
        <Whatnext/>
      </div>

    </main>
  );
}