import React from "react"
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import node from "../assets/node.png"
import tailwind from "../assets/tailwind.png"
import reactImage from "../assets/react.png"
import github from "../assets/github.png"
import firebase from "../assets/firebase.png"
import mongodb from "../assets/mongodb.png"
import express from "../assets/express.png"

function Experience(){
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: javascript,
            title: "Javascript",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: github,
            title: "GitHub",
            style: "shadow-neutral-50"
        },
        {
            id: 5,
            src: node,
            title: "Node.js",
            style: "shadow-lime-500"
        },
        {
            id: 6,
            src: reactImage,
            title: "React",
            style: "shadow-cyan-400"
        },
        {
            id: 7,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-cyan-300"
        },
        {
            id: 8,
            src: express,
            title: "Express.js",
            style: "shadow-gray-300"
        },
        {
            id: 9,
            src: firebase,
            title: "Firebase",
            style: "shadow-yellow-500"
        },
        {
            id: 10,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-600"
        },
        
    ]
    return(
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full ">
            <div className="max-w-screen-lg mx-auto p-2 flex flex-col justify-center w-full h-full text-white">
                <div className="mt-20 sm:mt-40 ">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">Experience</p>
                    <p className="py-6 text-gray-300">Technologies I'm experienced with (...and more!)</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {
                        techs.map((tech)=>(
                            <div key={tech.id} className={"shadow-md hover:scale-105 duration-500 py-1 round-lg rounded-md flex flex-col justify-around " + " " + tech.style}> 
                                <img className="w-20 mx-auto" src={tech.src}/>
                                <p className="mt-4">{tech.title}</p>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default  Experience