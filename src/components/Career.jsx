import React from "react";
import Navbar from "./Navbar";
import { direction } from "@hemant0621/animation";

function Career() {
  return (
    <>
      <Navbar />
      <div className="absolute -z-0">
        <svg height="1500" width="300" className="z-[-1]">
          <line
            x1="200"
            y1="200"
            x2="200"
            y2="1100"
            stroke="white"
            strokeWidth={2}
          />
          <circle id="c1" r="15" cx="200" cy="200" fill="white" />
          <circle id="c2" r="15" cx="200" cy="500" fill="white" />
          <circle id="c3" r="15" cx="200" cy="800" fill="white" />
          <circle id="c4" r="15" cx="200" cy="1100" fill="white" />
        </svg>
      </div>
      <div
        ref={direction("left")}
        className=" text-[#ffffff] my-[24vh] ml-[17vw] text-[1.5rem]"
      >
        <h1>10th</h1>
        <h2>Saraswati Vishwa Vidyalaya</h2>
        <h3>
          Score: <span className="text-[#ff243d]">94.0%</span>
        </h3>
      </div>
      <div
        ref={direction("left")}
        className=" text-[#ffffff] my-[24vh] ml-[17vw] text-[1.5rem]"
      >
        <h1>12th</h1>
        <h2>Sant Mai Jr. College of Arts,Commerce and Science</h2>
        <h3>
          Score: <span className="text-[#ff243d]">94.16%</span>
        </h3>
      </div>
      <div
        ref={direction("left")}
        className=" text-[#ffffff] my-[24vh] ml-[17vw] text-[1.5rem] "
      >
        <h1>Collage (3rd Year)</h1>
        <h2>VIT Chennai (Tamil Nadu)</h2>
        <h3>
          Score: <span className="text-[#ff243d]">8.46 GPA</span>
        </h3>
      </div>
      <div
        ref={direction("left")}
        className=" text-[#ffffff] my-[24vh] ml-[17vw] text-[1.5rem] "
      >
        <span className="text-[#ff243d]">Coming Soon...</span>
      </div>
    </>
  );
}

export default Career;
