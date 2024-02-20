import React from 'react'
import { FiGithub } from "react-icons/fi";


function Footer() {
  return (
    <footer className="h-16 bg-black flex flex-row  justify-center items-center">
        <span className="w-[118px] flex justify-around items-center">
            <a 
                href=  "https://github.com/0badaE/Portfolio.git" 
                target="_blank" 
                className="px-4 cursor-pointer text    text-gray-500 hover:text-white  justify-between"
            > 
                <span className="flex w-[110px] h-[50px] justify-around items-center">
                    Portfolio's <FiGithub   size={23}/>
                </span>
            </a>
         
        </span>
    </footer>
  )
}

export default Footer