import React from 'react'
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";

const Home = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className="innersegment flex m-auto md:flex-row-reverse max-w-screen-lg flex-col-reverse">

                <div className="left flex flex-col m-4 justify-center space-y-5 mx-auto">

                    <div className="heading hover:scale-105 duration-300 inline-block w-80 text-2xl justify-center text-center sm:text-2xl md:text-5xl mx-auto">
                        <h1>Harshit Gupta</h1>
                    </div>
                    <div className="detail">
                        <p className='inline-block w-80 text-center hover:scale-105 duration-300'>
                            Photographer and Developer 
                        </p>
                    </div>
                    <div className="button  ">
                        <button className='flex space-x-3'>
                            <a
                                href="/resume.pdf"
                                duration={500}
                                download={true}
                                target="_blank"
                                rel="noreferrer"
                                className="group hover:scale-105 hover:shadow-lg hover:shadow-gray-800 duration-200 text-gray-900 font-semibold md:w-fit px-6 py-3 my-2 flex items-center  align-middle rounded-md bg-gradient-to-r border-2 border-black from-cyan-200 to-cyan-300 ">
                                Resume
                                <span className="group-hover:scale-105 duration-300">
                                    <AiOutlineDownload size={25} className="ml-1" />
                                </span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/harshit-gupta-4663831bb/"
                                target="_blank"
                                rel="noreferrer"
                                duration={500}
                                className="group hover:scale-105 hover:shadow-lg hover:shadow-gray-800 duration-200 text-gray-900 font-semibold w-fit px-6 py-3 my-2 flex items-center  align-middle rounded-md bg-gradient-to-r border-2 border-black  from-cyan-200 to-cyan-300">
                                Linkedln
                                <span className="group-hover:scale-105 duration-300">
                                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                                </span>
                            </a>


                        </button>
                    </div>

                </div>

                <div className="right">
                    <img className='w-9/12 md:w-8/12 hover:scale-105 hover:shadow-xl hover:shadow-black duration-300 rounded-2xl bg-white mx-auto' src={HeroImage} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Home