import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
import { toast } from 'react-hot-toast'
const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = async (data) => 
      {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try {
           await axios.post("https://getform.io/f/lbjkxgpa",userInfo)
           toast.success("Your message has been sent")
        } catch (error) {
            toast.error(error);
        }
      }    
  return (
<>
<div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
    <h1 className='text-3xl font-bold mb-5'>Contact ME</h1>
    <span>Please fill out this form to contact me</span>
    <div className='flex flex-col items-center justify-center mt-10'>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
            <h1 className='text-xl font-semibold'>Send your message</h1>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Full Name</label>
                <input {...register("name", { required: true })} type="text" className='shadow appearance-none border rounded px-2 py-3 text-gray-700 leading-tight focus:outline'
                 placeholder='Enter your Full Name' name="name"/>
                 {errors.name && <span>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Email Address</label>
                <input {...register("email", { required: true })} type="text" className='shadow appearance-none border rounded px-2 py-3 text-gray-700 leading-tight focus:outline'
                 placeholder='Enter your Email Address' name='email' />
                  {errors.email && <span>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Message</label>
                <textarea {...register("message", { required: true })} type="text" className='shadow appearance-none border rounded px-2 py-3 text-gray-700 leading-tight focus:outline'
                 placeholder='Type your Message Here' name='message' />
                  {errors.message && <span>This field is required</span>}
            </div>
            <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-600 duration-200'>Send</button>
        </form>
    </div>

</div>
</>
  )
}

export default Contact
