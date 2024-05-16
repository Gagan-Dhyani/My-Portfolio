import React from 'react'
import { FaFacebook,FaLinkedin,FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
<>
<hr />
<footer className='py-12'>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <div className='flex flex-col justify-center items-center'>
        <div className='flex space-x-4'>
            <FaFacebook size={24}/>
            <FaLinkedin size={24}/>
            <FaInstagram size={24}/>
        </div>
        <div className='mt-6 border-t border-gray-700 pt-4 flex flex-col items-center'>
        <p className='text-sm'>&copy;All rights reserved.</p>
        </div>
        </div>
    </div>
</footer>
</>
  )
}

export default Footer
