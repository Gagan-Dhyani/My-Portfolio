import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa"
import { ReactTyped } from "react-typed";
import pic from "../../public/mypic.png"

const Home = () => {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '>
                <div className='flex flex-col md:flex-row space-y-2'>
                    <div className='md:w-1/2 mt-12 md:mt-24 order-2 md:order-1 '>
                        <span className='text-xl'>Welcome in My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello I am a&nbsp;</h1>
                            {/* <span className='text-red-700 font-bold'> Developer</span> */}
                            <ReactTyped className='text-red-700 font-bold' strings={["Coder", "Fresher", "Developer"]} typeSpeed={40}
                                backSpeed={50}
                                loop={true} />
                        </div>
                        <br />
                        <p className='text-sm md:text-xl text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aut eius eveniet nulla ex maiores debitis quidem, qui laudantium repellat atque minima corporis odio deleniti illum iste amet libero! Odio?</p>
                        <br />
                        <div className='flex flex-col md:flex-row items-center space-y-3 justify-between'>
                            <div className='space-y-3'>
                                <h1 className='font-bold'>Currently availible on</h1>
                                <ul className='flex space-x-5'>
                                    <li>
                                        <a href="https://www.facebook.com/gagan.dhyani/" target='_blank'><FaFacebook className='text-2xl cursor-pointer' />
                                        </a>
                                        </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/gagandh/" target='_blank'><FaLinkedin className='text-2xl cursor-pointer' />
                                        </a>
                                        </li>
                                    <li>
                                        <a href="" target='_blank'>
                                        <FaInstagramSquare className='text-2xl cursor-pointer' /></a>
                                        </li>
                                </ul>
                            </div>
                            <div className='space-y-3'>
                                <h1 className='font-bold flex'>Currently working on</h1>
                                <ul className='flex space-x-5'>
                                    <li><BiLogoMongodb className='text-2xl cursor-pointer hover:scale-125 duration-300 rounded-full border-[2px]' /></li>
                                    <li><SiExpress className='text-2xl cursor-pointer hover:scale-125 duration-300 rounded-full border-[2px]' /></li>
                                    <li><FaReact className='text-2xl cursor-pointer hover:scale-125 duration-300 rounded-full border-[2px]' /></li>
                                    <li><FaNodeJs className='text-2xl cursor-pointer hover:scale-125 duration-300 rounded-full border-[2px]' /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-48 order-1'>
                        <img src={pic} className='rounded-full md:h-[450px] md:w-[420px]' alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
