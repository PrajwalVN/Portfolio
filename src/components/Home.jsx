import React from 'react'
import Navbar from './Navbar'
import Skills from './Skills'
import { Animation, direction } from '@hemant0621/animation'

function Home() {

  let tech = [{"Html" : 0.8,"CSS" : 0.6 , "javascript" : 0.8 , "React" : 0.4} , {"Express" : 0.4 , "mongoose" : 0.2 , "Nodejs" : 0.5 } , {"C++" : 0.6 , "java" : 0.5 }]

  return (
    <>
      <Navbar/>
      <div className=" relative ">
        <img className="mx-[9rem] absolute rounded-[2.5rem] mt-[20vh] h-[500px] w-[80%]" src="/src/components/images/89781.jpg" alt="" />
        <div className="flex">
          <div className=" relative left-[15vw] mt-[30vh] text-[2rem]">
            <h1 ref={Animation('left','40px',200)} className=' text-[#ffffff]'>Hi There,</h1>
            <h2 ref={Animation('left','40px',240)} className=' text-[#ffffff]'>I'm <span className='text-[#6c7390]'>Hemant</span> </h2>
            <h2 ref={Animation('left','40px',280)} className=' text-[#ffffff]'>I Am a <span className='text-[#e24143]'>Web Devoloper</span></h2>
            <p ref={Animation('left','40px',320)} className=' text-[1.5rem] mt-9 text-[#ffffff]'>Aspiring developer on a learning journey,</p>
            <p ref={Animation('left','40px',360)} className=' text-[1.5rem] text-[#ffffff]'>fueled by curiosity and driven to grow</p>
            <p ref={Animation('left','40px',400)} className=' text-[1.5rem]   text-[#ffffff]'>personally and professionally</p>
          </div>
          <img ref={direction('left')} className='h-[35rem] relative left-[40vw] mt-10' src="/src/components/images/hemant.png" alt="" />
          <div ref={direction('left')} className="relative left-[45vw] mt-[50vh]">
            <a ref={Animation('left','20px',200)} href="https://www.instagram.com/hemantkumar211202/"><img className="h-11 mt-[10px] border-2 p-1 rounded-[50%] border-white-100" src="/src/components/images/instagram.png" alt="" /></a>
            <a ref={Animation('left','20px',400)} href="https://www.linkedin.com/in/hemant-kumar-a481a020a/"><img className="h-11 mt-[10px] border-2 p-1 rounded-[50%] border-white-100" src="/src/components/images/linkedin.png" alt="" /></a>
            <a ref={Animation('left','20px',600)} href="https://github.com/Hemant0621"><img className="h-11 mt-[10px] border-2 p-1 rounded-[50%] border-white-100" src="/src/components/images/github.png" alt="" /></a>
            <a ref={Animation('left','20px',800)} href="https://www.youtube.com/@sh4rpstatus980"><img className="h-11 mt-[10px] border-2 p-1 rounded-[50%] border-white-100" src="/src/components/images/youtube.png" alt="" /></a>
          </div>
        </div>
      </div>

      <div className=" bg-[#3c4063] p-10 mt-[12vh]">
        <div className='flex mx-32 text-[1.5rem]'>
          <a className='text-[#ff243d] mx-auto nav_heading' href="#Skill">Skills</a>
          <a className='text-[#ff243d] mx-auto nav_heading' href="#Achievement">Achievement</a>
          <a className='text-[#ff243d] mx-auto nav_heading' href="#Aboutme">About Me</a>
        </div>
      </div>
      <div id="Skill" className='px-24 pt-10'>
        <Skills
        id="Frontend"
        skills = {tech[0]}
        />
        <Skills
        id="Backend"
        skills = {tech[1]}
        />
        <Skills
        id="Programming"
        skills = {tech[2]}
        />
      </div>
      <div id="Achievement" className='bg-[#272832]'>
        Taekwondo
      </div>
      <div id="Aboutme" className=''>
        DOB:21 dec 2002
      </div>


    </>
  )
}

export default Home