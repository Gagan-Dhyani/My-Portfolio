import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.png"
import js from "../../public/js.webp"
import node from "../../public/node.png"
import react from "../../public/react.jpeg"
import mongo from "../../public/mongo.png"

const Portfolio = () => {
    const skills=[
        {
            id:1,
            image:html,
            name:"HTML",

        },
        {
            id:2,
            image:css,
            name:"CSS",
        },
        {
            id:3,
            image:js,
            name:"JavaScript",
        },
        {
            id:4,
            image:node,
            name:"Nodejs",
        },
        {
            id:5,
            image:react,
            name:"Reactjs",
        },
        {
            id:6,
            image:mongo,
            name:"MongoDB",
        }
    ]
  return (
<>
<div name="Skills" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 '>
    <div>
        <h1 className='text-3xl font-bold mb-5'>My Skills</h1>
        <span className='font-semibold underline'>Fresher</span>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-10 my-6'>
            {
                skills.map(({id,name,image})=>(
                <div key={id} className='flex flex-col items-center shadow-md justify-center md:w-[150px] md:h-[150px] border-[2px] rounded-full cursor-pointer hover:scale-105 duration-300'>
                    <img src={image} className='w-[150px] rounded-full' alt="" />
                    <div>
                    </div>
                    <div className=''>{name}</div>
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
