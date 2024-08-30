import React, { useState } from 'react'
import { IoMdText } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";



const ContctUs = () => {

    let [name, setName] = useState("kushagra kumar")
    let [email, setEmail] = useState("k@gmail.com")
    let [text, setText] = useState("your revirws")
    
 const onSubmit = (e) =>{
    e.preventDefault();
    setName(e.target[3].value)
    setEmail(e.target[4].value)
    setText(e.target[5].value)
 }

  return (
   <>
   <section>
    <div className='flex content-start flex-col mt-10 mb-5'>

        <div className='mb-8'>
            <h1 className='text-5xl font-extrabold text-left mb-8'>CONTACT US :</h1>
            <div className='w-[85%] text-left'>
            <p>LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
               WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
               REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
               EMAIL, OR SOCIAL MEDIA. </p>
            </div>            
        </div>
            
            
            <div className='grid grid-cols-2'>

                {/* col1:Form */}
                <div className=' outline'>
                    <form action="post" 
                    className=' '
                    onSubmit={onSubmit} >

                        {/* buttons */}
                        <div>
                        <div className='grid grid-cols-2 px-4 pt-6 gap-32 '>
                            <button className='flex gap-2 text-white bg-black rounded-md p-2 px-3 font-sans justify-center'>
                                VIA SUPPORT CHAT
                                < IoMdText className='h-5 w-5'/>
                            </button>
                            <button className='flex gap-2 text-white bg-black rounded-md p-2 px-3 font-sans justify-center'>
                                VIA CALL
                                < IoCall className='h-5 w-5'/>
                            </button>
                            
                        </div>
                        <div className='  flex justify-center h-[100px]  items-center px-4 pt-6 gap-32 '>
                            <button  className='flex items-center text-white bg-black rounded-md p-3 px-6 font-sans gap-3 '>
                                VIA EMAIL FORM 
                            <MdEmail className='h-5 w-5'/>
                            </button>
                        </div>
                        </div>

                        <div className='flex flex-col'>

                            <div className='flex mx-3 gap-3 flex-col relative mt-6 mb-6 '>
                            <label htmlFor="name" className=' absolute top-[-16px] left-4 text-lg bg-white w-14 text-center' >Name</label>
                            <input type="text" 
                            name="name"
                            className='outline outline-2 outline-black rounded-lg p-2'
                             />    
                            </div>

                            <div className='flex mx-3 gap-3 flex-col relative mt-6 mb-6 '>
                            <label htmlFor="email" className=' absolute top-[-16px] left-4 text-lg bg-white w-14 text-center' >Email</label>
                            <input type="text" 
                            name="email"
                            className='outline outline-2 outline-black rounded-lg p-2'
                             />    
                            </div>

                            <div className='flex mx-3 gap-3 flex-col relative mt-6 mb-6 '>
                            <label htmlFor="text" className=' absolute top-[-16px] left-4 text-lg bg-white w-16 text-center'>Review</label>
                            <textarea type="text" 
                            name="text"
                            className='outline outline-2 outline-black rounded-lg p-2 h-36 min-h-20'
                             />    
                            </div>

                        </div>

                        <div className='  flex justify-end items-center  px-4 p-6 gap-32 '>
                            <div>
                                {name},
                                
                                {email},
                                {text}
                            </div>
                            <button  className='flex items-center text-white bg-black rounded-md p-3 px-6 font-sans gap-3 '
                            type='submit'>
                                SUBMIT 
                            </button>
                        </div>
                        
                    </form>
                </div>

                {/* col2 */}
                <div>
                    <img src="/src/assets/service.png" alt="service picture" />
                </div>
            </div>
    </div>

   </section>
   </>
  )
}

export default ContctUs
