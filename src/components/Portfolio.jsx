import React from "react"
import photo1 from "../assets/portfolio/photo1.jpg"
import photo2 from "../assets/portfolio/photo2.jpg"
import photo3 from "../assets/portfolio/photo3.jpg"
import photo4 from "../assets/portfolio/photo4.jpg"
import photo5 from "../assets/portfolio/photo5.jpg"
import photo6 from "../assets/portfolio/photo6.jpg"


function Portfolio(){
    const projects = [
        {
            id: 1,
            name: "Full Stack Restaurant Clock In App",
            src: photo1,
            demo: "https://clock-in-app-6a37d.web.app/",
            code: "https://github.com/0badaE/clockInAPPP"
        },
        {
            id: 2,
            name: "AI Article Summarizer",
            src: photo5,
            demo: "https://ai-seela.netlify.app/",
            code: "https://github.com/0badaE/AI-article-summarizer"
        },
        {
            id: 3,
            name: "Adican Plumbing Business Site",
            src: photo4,
            demo: "https://courageous-brioche-e859e5.netlify.app/",
            code: "https://github.com/0badaE/Adrian-Plumbing"
        },
        {
            id: 4,
            name: "Full-Stack Online Library" ,
            src: photo6,
            demo: "https://selialibrary.netlify.app/",
            code: "https://github.com/0badaE/SeliaBookCollection"
        },
        {
            id: 5,
            name: "Van Renting Front-End",
            src: photo2,
            demo: "https://sel-svans.web.app/",
            code: "https://github.com/0badaE/Sel-sVans.git"
        },
        {
            id: 6,
            name: "Site for a Startup Business",
            src: photo3,
            demo: "https://elitecleaningservice.ca/",
            code: "https://github.com/0badaE/EliteCleaningService-MyFirstClient"
        },

    ]

    return(
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-gray-300">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">Portfolio</p>
                    <p className="py-6">Some of my work</p>
                </div>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 text-gray-300">
                    {
                        projects.map((project)=>(
                            <div key={project.id}>
                                <h3 className="w-full pb-3">{project.name}</h3>
                                <div className="shadow-md shadow-gray-600 rounded-lg">
                                    <img src={project.src} className="rounded-md duration-200 hover:scale-105"/>
                                    <div className="flex items-center justify-center" >
                                        <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105"><a  className="hover:text-white"target="_blank" href={project.demo}>Demo</a></button>
                                        <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105"><a  className="hover:text-white" target="_blank" href={project.code}>Code + Info</a></button>
                                    </div>
                                </div>
                            </div>
                        
                        )) 
                    }
                </div>

            </div>
        </div>
    )
}

export default Portfolio