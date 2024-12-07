import React from "react"

function About() {
    return (
        <div name="about" className="sm:h-[110vh] flex items-center bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full mb-8 text-gray-300">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">About</p>
                </div>
                <p className=" text-xl mt-20">
                    As a Full-Stack Developer, I transform complex business problems into user-friendly solutions that deliver tangible results.
                    <span className="text-white font-medium">
                        {" From streamlining payroll with a custom punch-in app (Pouletto Restaurant) to creating an online presence through a QR code E-Menu system and attracting 4,000-12,000 new online monthly visits (Nostos Restaurant)"}

                    </span>, I consistently create impactful solutions. Beyond work, I delve into personal projects like building an AI summarizer using Node.js, constantly improving my skills and pushing boundaries.
                </p>
                <br />
                <p className="text-xl">
                    Drawing from my experience in Quality Assurance at Telus, I learned to translate client feedback into improvements.
                    <span className="text-white font-medium">
                        {" Notably, my problem-solving efforts saved the company around $800,000 in technician dispatch costs. "}
                    </span>
                    Working with diverse stakeholders enhanced my communication and teamwork skills. These experiences, along with my coding skills and commitment to continuous learning, make me a strong candidate for a software development role. I look forward to contributing my problem-solving skills and understanding of user needs to your team.
                </p>
            </div>
        </div>
    )
}

export default About