import React from 'react'
import { useState } from 'react';
import pic from "../../public/mypic.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import {Link} from "react-scroll"
const Navbar = () => {
    const [menu, setmenu] = useState(false)
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Skills"
        },
        {
            id:5,
            text:"Contact"
        }
    ]
  return (
<>
<div className='max-w-screen-2xl container mx-auto h-16 px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 bg-white z-20'>
    <div className='flex justify-between items-center h-16'>
        <div className='flex space-x-2'>
            <img src={pic} className='h-14 rounded-full' alt="" />
        <h1 className='font-semibold text-xl cursor-pointer'>Gaga<span className='text-violet-500 text-xl'>n</span>
        <p className='text-sm'>MCA Fresher</p></h1>
        </div>
        <div>
            <ul className='hidden md:flex space-x-8'>
                {
                    navItems.map(({id,text})=>(
                    <li className='hover:scale-105 duration-300 cursor-pointer' key={id}>
                        <Link to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'
                        >       
                        {text}
                        </Link>
                        </li>
                    ))
                }
            </ul>
            <div className='md:hidden' onClick={()=>setmenu(!menu)}>
            {menu?<IoClose />:<RxHamburgerMenu />}
            </div>
        </div>
    </div>
    {
        menu && (
        <div>
            <ul className='md:hidden flex flex-col items-center justify-center h-screen space-y-2 text-xl bg-white'>
            {
                    navItems.map(({id,text})=>(
                    <li className='hover:scale-105 duration-300 cursor-pointer font-semibold' key={id}>
                         <Link
                         onClick={()=>setmenu(!menu)}
                        to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass='active'
                        >       
                        {text}
                        </Link>
                        
                        </li>
                    ))
                }
                </ul>
        </div>
        )
    }

</div>
</>
  )
}

export default Navbar
