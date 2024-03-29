import React from "react"
import {FaBars, FaTimes } from "react-icons/fa"
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { Link } from "react-scroll"

function Navbar(){
    const [nav,setNav] = React.useState(false)
    const links = [
        {
            id: 1,
            link: "about"

        },
        {
            id: 2,
            link: "portfolio"

        },
        {
            id: 3,
            link: "experience"

        },
        {
            id: 4,
            link: "contact"

        },
    ]
    return(
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-10">
            <div>
                <h1 
                className="text-5xl font-signature ml-2 cursor-pointer"
                >
                   <Link to={"home"} smooth duration={400}>
                    Obada. E
                   </Link>
                </h1>
            </div>
            
            <ul className="hidden md:flex">
                
                {
                    links.map(link=> (
                        <li key={link.id} className="px-4  cursor-pointer capitalize font-medium    text-gray-500 hover:scale-105 hover:text-white duration-200"><Link to={link.link} smooth duration={500}>{link.link}</Link></li>
                    ))
                }

            </ul> 
            <div onClick={()=>setNav(!nav)} className="cursor-pointer pr-4 z-10 text-grey-500 md:hidden">
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>
            
            {
                nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500" >

                        {
                            links.map(link=> (
                            <li key={link.id} 
                                className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white"
                            >
                                <Link to={link.link} smooth duration={400} onClick={()=>setNav(!nav)}>{link.link}</Link>
                            </li>
                            ))
                        }
                        
                        <a 
                            href="/Resume.pdf" 
                            target="_blank" 
                            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white"
                        > 
                            <span className="flex w-[180px] justify-around"><MdDownload/> Resume </span>
                        </a>
                        <span className="flex justify-center"> 
                            <a 
                                href="https://www.linkedin.com/in/obada-erfan-425031139/" 
                                target="_blank" 
                                className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white"
                            > 
                                <FaLinkedinIn  size={38}/>
                        
                            </a>
                            <a 
                            href=  "https://github.com/0badaE" 
                            target="_blank" 
                            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white"
                            > 
                                <FiGithub size={38}/> 
                            </a>
                            <a 
                            href=  "https://twitter.com/ObadaErfanDev" 
                            target="_blank" 
                            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white"
                            > 
                                 <BsTwitterX  size={38}/> 
                            </a>

                        </span>

                        
                        
                    
                    </ul>
                )
            }

        </div>
    )
}

export default Navbar