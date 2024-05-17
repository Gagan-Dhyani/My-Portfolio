import React from 'react'

const About = () => {
  return (
<>
<div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 '>
    <h1 className='text-3xl font-bold mb-5'>About</h1>
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quasi quis reiciendis laborum tenetur nobis libero quod impedit error incidunt commodi ducimus, illo a alias quo labore, provident blanditiis quam.</p> */}
<br />
<h1 className='text-purple-600 text-xl font-bold'>Education</h1>
<div className='space-y-4'>
<div className='font-bold'>Masters of Computer Applications</div><span>SGRRU [2022-2024]</span>
<div className='font-bold'>Bachelor of Computer Applications</div><span>Institue of technology and Management [2019-2022]</span>
<div className='font-bold'>Intermediate</div><span>SGRR Public School [2018-2019]</span>
</div>

<br />
<h1 className='text-purple-600 text-xl font-bold'>Skills</h1>
<span> I come equipped with a Proficient skill set in HTML, CSS, JavaScript, and MERN Stack.</span>
<br />
<br />
<h1 className='text-purple-600 text-xl font-bold'>Awards and Achievements</h1>
<span> Awarded with a certificate from Prayag Sangeet Samiti for Indian Classical Vocal Music</span>
<br />
<br />
{/* <h1 className='text-purple-600 text-xl font-bold'>My Goals</h1>
<p> Awarded with a certificate from Prayag Sangeet Samiti for Indian Classical Vocal Music</p> */}

</div>
</>
  )
}

export default About
