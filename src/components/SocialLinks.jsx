import React from "react"
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

import { HiOutlineMail } from "react-icons/hi"
import { IoMdDocument } from "react-icons/io";


function SocialLinks(){
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn
                    <FaLinkedinIn size={30}/>
                </>
            ),
            href: "https://www.linkedin.com/in/obada-erfan-425031139/",
            style: "rounded-tr-md "
        },
        {
            id: 2,
            child: (
                <>
                    GitHub
                    <FiGithub size={30}/>
                </>
            ),
            href: "https://github.com/0badaE",
        },
        {
            id: 3,
            child: (
                <>
                    Twitter/X 
                    <BsTwitterX  size={28}/>
                </>
            ),
            href: "https://twitter.com/ObadaErfanDev",
        },
        {
            id: 4,
            child: (
                <>
                    Mail 
                    <HiOutlineMail size={30}/>
                </>
            ),
            href: "mailto:ObadaErfanDev@Gmail.com"
        },
        {
            id: 5,
            child: (
                <>
                    Resume 
                    <IoMdDocument  size={30}/>
                </>
            ),
            href: "/Resume.pdf",
            style: "rounded-br-md",
            download: true
        },
    ]
    return(
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {
                    links.map((link)=>(
                        <li 
                            key={link.id} 
                            className= {"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px]  duration-300 bg-gray-500" + " " + link.style}
                        >
                            <a 
                                className="flex justify-between items-center w-full text-white" 
                                href= {link.href}
                                download={link.download}
                                target="_blank"
                                rel="noreferrer"
                            > 
                                {link.child} 
                            </a>
                        </li>
                    ))

                }
            </ul>
        </div>
    )
}

export default SocialLinks