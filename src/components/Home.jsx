import React from 'react'
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className="innersegment flex m-auto md:flex-row-reverse max-w-screen-lg flex-col-reverse">

                <div className="left flex flex-col m-4 justify-center space-y-2 mx-auto">
                    
                    <div className="heading text-xl sm:text-2xl md:text-5xl mx-auto">
                        <h1>Harshit Gupta</h1>
                    </div>
                    <div className="detail">
                        <p>
                            Photographer, developer and tech enthusiast
                        </p>
                    </div>
                    <div className="button  ">
                        <button className='flex space-x-3'>
                            <Link
                                to="experience"
                                smooth
                                duration={500}
                                className="group hover:scale-110 duration-200 text-gray-900 font-semibold md:w-fit px-6 py-3 my-2 flex items-center  align-middle rounded-md bg-gradient-to-r border-2 from-cyan-200 to-cyan-300 ">
                                Experience
                                <span className="group-hover:rotate-90 duration-300">
                                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                                </span>
                            </Link>
                            <Link
                                to="experience"
                                smooth
                                duration={500}
                                className="group hover:scale-110 duration-200 text-gray-900 font-semibold w-fit px-6 py-3 my-2 flex items-center  align-middle rounded-md bg-gradient-to-r border-2  from-cyan-200 to-cyan-300">
                                Experience
                                <span className="group-hover:rotate-90 duration-300">
                                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                                </span>
                            </Link>


                        </button>
                    </div>

                </div>

                <div className="right">
                    <img className='w-9/12 md:w-8/12 hover:scale-105 duration-300 rounded-2xl bg-white mx-auto' src={HeroImage} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Home