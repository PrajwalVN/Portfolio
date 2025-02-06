import React from 'react'
import Navbar from './Navbar'
import Card from './Card'

function Collection() {
  return (
    <>
        <Navbar/>
        <h1 className='text-[2rem] text-[#ffffff] mx-[40%] my-12'>My Projects </h1>
        <div className="grid lg:grid-cols-3 gap-3 sm:grid-cols-2 mx-10">
          <Card
            id="1"
            img="/src/components/images/Screenshot 2024-03-09 000515.png"
            name="Shopping Website"
            position="Hackathon Project"
            about="Its my first project with Backend and I along with my 3 fellow team mates built this website under a Hackathon conducted by ONDC govt. of India. In this website i build the Backend Using Node.js,Mongoose and express"
            git="https://github.com/Hemant0621/ONDC_website"
          />
          <Card
            id="2"
            img="/src/components/images/Ellipse 3 (1).png"
            name="Tik Tak Toe"
            position="Python Project"
            about="Its my first project with Python and I made this using Tkinter which is a GUI Library in python. Its a 2 Player game in which who ever get the 3 symbols in straight line weather horizontal,vertical or diagonal wins the game"
            git="https://github.com/Hemant0621/Tiktaktoe"
          />
          <Card
            id="3"
            img="/src/components/images/Ellipse 3 (1).png"
            name="Shopping Website"
            position="Hackathon Project"
            about="its a API based project in which we use "
            git="https://github.com/Hemant0621/real_time_vehicle_tracking"
          />
          <Card
            id="4"
            img="/src/components/images/Ellipse 3 (1).png"
            name="Shopping Website"
            position="Hackathon Project"
            about="Its my first project with Backend and I along with my 3 fellow team mates built this website under a Hackathon conducted by ONDC govt. of India. In this website i build the Backend Using Node.js,Mongoose and express"
            linkedin="https://www.linkedin.com/company/fraternity-of-young-innovators/mycompany/"
          />
          <Card
            id="5"
            img="/src/components/images/Ellipse 3 (1).png"
            name="Shopping Website"
            position="Hackathon Project"
            about="Its my first project with Backend and I along with my 3 fellow team mates built this website under a Hackathon conducted by ONDC govt. of India. In this website i build the Backend Using Node.js,Mongoose and express"
            linkedin="https://www.linkedin.com/company/fraternity-of-young-innovators/mycompany/"
          />
          <Card
            id="6"
            img="/src/components/images/Ellipse 3 (1).png"
            name="Shopping Website"
            position="Hackathon Project"
            about="Its my first project with Backend and I along with my 3 fellow team mates built this website under a Hackathon conducted by ONDC govt. of India. In this website i build the Backend Using Node.js,Mongoose and express"
            linkedin="https://www.linkedin.com/company/fraternity-of-young-innovators/mycompany/"
          />
        </div>
    </>

  )
}

export default Collection