import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="Layout h-[100vh]" id="Layout" >
      <video autoPlay loop muted playsInline className="absolute z-[-1] w-[100vw]">
        <source src="/src/components/images/videoplayback.mp4" type="video/mp4" />
      </video>
      <div className="logo absolute inset-0 mx-10 mt-5 flex pointer-events-none">
        <img className=" h-12" src="/src/components/images/gemini.png" alt="" />
        <h1 className="text-[#ffffff] m-2 mx-4 text-[1.5rem]">Portfolio</h1>
      </div>

      <div className="flex justify-between">
        <nav className="z-1 mt-20 mx-10">
          <ul className="mt-28">
            <li className="nav flex mt-7">
              <img className="rhombus h-[10px] my-[auto] mx-5" src="/src/components/images/rhomb-outline.png" alt="" />
              <Link to="/Home" className="layout_heading text-[4rem] text-[#ff243d]">Home</Link>
            </li>
            <li className="nav flex mt-7">
              <img className="rhombus h-[10px] my-[auto] mx-5" src="/src/components/images/rhomb-outline.png" alt="" />
              <Link to="/Career" className="layout_heading text-[2rem] text-[#ffffff] hover:text-[#04ffd8]">CAREER</Link>
            </li>
            <li className="nav flex mt-7">
              <img className="rhombus h-[10px] my-[auto] mx-5" src="/src/components/images/rhomb-outline.png" alt="" />
              <Link to="/Collection" className="layout_heading text-[2rem] text-[#ffffff] hover:text-[#04ffd8]">COLLECTION</Link>
            </li>
            <li className="nav flex mt-7">
              <img className="rhombus h-[10px] my-[auto] mx-5" src="/src/components/images/rhomb-outline.png" alt="" />
              <Link to="/Resume" className="layout_heading text-[2.2rem] text-[#ffffff] hover:text-[#04ffd8]">Resume</Link>
            </li>
          </ul>
        </nav>
        <div className="stats mt-60  w-[20%] mr-28 ">
          <div className="rounded-lg bg-[#362e6b] bg-opacity-30 pb-10">
            <div className=" mt-4 text-[#ffffff] ml-24">
              Feel free to contact me
            </div>
            <div className="social flex mt-5 ml-16">
                <a href="https://www.instagram.com/hemantkumar211202/ " target="_blank"><img className="h-10 m-[5px] border-2 p-1 rounded-[50%] border-white-100" src="/src/components/images/instagram.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/hemant-kumar-a481a020a/ " target="_blank"><img className="h-10 m-[5px] border-2 p-1 rounded-[50%] border-white-100" src="/src/components/images/linkedin.png" alt="" /></a>
                <a href="https://github.com/Hemant0621 " target="_blank"><img className="h-10 m-[5px] border-2 p-1 rounded-[50%] border-white-100" src="/src/components/images/github.png" alt="" /></a>
                <a href="https://www.youtube.com/@sh4rpstatus980 " target="_blank"><img className="h-10 m-[5px] border-2 p-1 rounded-[50%] border-white-100" src="/src/components/images/youtube.png" alt="" /></a>
            </div>
          </div>
          <div className="rounded-lg bg-[#362e6b] bg-opacity-30 pb-10 mt-3">
            <div className=" mt-4 text-[#ffffff] ml-24">
              Fell free to contact me
            </div>
            <div className="social flex mt-5 ml-16">
                <a href="https://www.instagram.com/hemantkumar211202/"><img className="h-10 m-[5px] border-2 p-1 rounded-[50%] border-white-100" src="/src/components/images/instagram.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/hemant-kumar-a481a020a/"><img className="h-10 m-[5px] border-2 p-1 rounded-[50%] border-white-100" src="/src/components/images/linkedin.png" alt="" /></a>
                <a href="https://github.com/Hemant0621"><img className="h-10 m-[5px] border-2 p-1 rounded-[50%] border-white-100" src="/src/components/images/github.png" alt="" /></a>
                <a href="https://www.youtube.com/@sh4rpstatus980"><img className="h-10 m-[5px] border-2 p-1 rounded-[50%] border-white-100" src="/src/components/images/youtube.png" alt="" /></a>
            </div>
          </div>
          
          
        </div>
      </div>

      <Outlet />
    </div>
  )
};

export default Layout;