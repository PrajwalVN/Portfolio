import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-transparent pt-5 h-20 flex justify-between">
      <div className='flex'>
        <Link to="/" ><img className='h-10 mx-10 mr-20' src="/src/components/images/gemini.png" alt="" /></Link>
        <Link to={`/Home`} className="nav_heading text-[1.5rem] mx-4 text-[#ff243d]">Home</Link>
        <Link to="/Career" className="nav_heading text-[1.5rem] mx-4 text-[#ff243d]">Career</Link>
        <Link to="/Collection" className="nav_heading text-[1.5rem] mx-4 text-[#ff243d]">Collection</Link>
        <Link to="/Resume" className="nav_heading text-[1.5rem] mx-4 text-[#ff243d]">Resume</Link>
      </div>
      <div className='flex mr-10'>
        <a href="https://www.instagram.com/hemantkumar211202/" target='_blank'><img className="h-10 mx-3 invert transition duration-150 ease-out hover:scale-110 p-2" src="/src/components/images/social.png" alt="" /></a>
        <a href="https://www.linkedin.com/in/hemant-kumar-a481a020a/" target='_blank'><img className="h-10 mx-3 invert transition duration-150 ease-out hover:scale-110 p-2" src="/src/components/images/linkedin (1).png" alt="" /></a>
        <a href="https://github.com/Hemant0621" target='_blank'><img className="h-10 mx-3 invert transition duration-150 ease-out hover:scale-110 p-2" src="/src/components/images/github (1).png" alt="" /></a>
        <a href="https://www.youtube.com/@sh4rpstatus980" target='_blank'><img className="h-10 mx-3 invert transition duration-150 ease-out hover:scale-110 p-2" src="/src/components/images/youtube (1).png" alt="" /></a>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar