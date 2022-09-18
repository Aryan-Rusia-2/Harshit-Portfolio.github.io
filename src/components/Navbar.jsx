
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


const Navbar = () => {

    const [nav, setNav] = useState(false);



    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "education",
        },
        {
            id: 4,
            link: "nature photography",
        },
        {
            id: 5,
            link: "skills",
        },
        {
            id: 6,
            link: "contact me",
        },

    ];





    return (

        <div className=' m-2 p-2 z-20'>

            <div className='flex flex-row space-x-8 justify-between '>


                <div className="logo text-xl sm:text-2xl">
                    Harshit
                </div>


                <ul className="hidden md:flex space-x-3 lg:space-x-12 ">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 md:flex hover:drop-shadow-2xl cursor-pointer capitalize text-md lg:text-lg justify-start text-black hover:scale-125 duration-300"
                        >
                            <Link to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>

                    ))}

                </ul>




                <div

                    onClick={() => setNav(!nav)}
                    className="cursor-pointer pr-4 z-10 text-black md:hidden">

                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

                </div>


                {nav && (
                    <ul className="flex flex-col max-h-screen h-screen fixed justify-center space-y-7 items-center top-0 left-0 w-full bg-gray-50">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                            >
                                <Link
                                    onClick={() => setNav(!nav)}
                                    to={link}
                                    smooth
                                    duration={500}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}


                    </ul>

                )}


            </div>

        </div>
    )
}

export default Navbar