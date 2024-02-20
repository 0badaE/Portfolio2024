import React from "react"
import HeroImage from "../assets/heroImage.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll"



function Home(){
    return(
        <div name="home" className="h-[110vh] bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl  text-white  sm:text-7xl font-bold">
                        Full Stack Developer
                    </h2>
                    <p className="text-gray-300 py-4 max-w-lg my-8 text-lg">
                        I bridge the gap between user needs and efficient software solutions, crafting user-centric applications that excel in both user engagement and business impact. With a diverse skillset honed through my experience in both front-end and back-end development, I tackle challenges head-on, delivering robust solutions that consistently meet project requirements. As a continuous learner, I readily adapt to new technologies, bringing fresh perspectives and innovative solutions to the table. Eager to contribute to a talented team building high-quality products, I invite you to explore my portfolio and let's discuss how I can help you achieve your goals.
                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={22} className="ml-1"/>
                            </span>
                        </Link>
                    </div>
                </div>
                {/* <div>
                    <img src={HeroImage} alt="pfp" width="350px" className="rounded-2xl mx-auto w-2/3 md:w-full "/>
                </div> */}
            </div>
        </div>
    )
}

export default Home