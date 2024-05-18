import React from 'react'
import book from "../../public/bg2.png"
import spotify from "../../public/spotify.png"

const Portfolio = () => {
    const projects=[
        {
            id:1,
            image:book,
            name:"BookStore",
            description:"This is a simple bookstore app built in mern stack",
            link:"https://github.com/Gagan-Dhyani/bookStore"
        },
        {
            id:2,
            image:spotify,
            name:"Spotify Clone",
            description:"This is a spotify clone built using html, css, JavaScript",
            link:"https://github.com/Gagan-Dhyani/Spotify"
        }
    ]
  return (
<>
<div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 '>
    <div>
        <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
        <span className='font-semibold underline'>My Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 my-6'>
            {
                projects.map(({id,name,image,description,link})=>(
                <div key={id} className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg cursor-pointer hover:scale-105 duration-300'>
                    <img src={image} className='p-1 w-[120px] h-[120px] rounded-full border-[2px]' alt="" />
                    <div>
                <div className='px-2 font-bold text-lg mb-2'>{name}</div>
                <p className='px-2 text-gray-700'>{description}</p>
                    </div>
                    <div className='flex justify-center items-center px-6 py-4'>
                       <a href={link} target='_blank'> <button className='bg-green-500 hover:bg-green-800 text-white px-2 py-2 rounded '>Source Code</button></a>
                    </div>
                </div>

                )
                )
            }
        </div>
    </div>
</div>
</>
  )
}

export default Portfolio
