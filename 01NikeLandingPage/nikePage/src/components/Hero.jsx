import React from 'react'

const Hero = () => {
  return (
    <div className='mt-[100px]  grid grid-cols-2 p-5'>

      <div className=''>

        <h1 className='text-8xl font-extrabold text-left pl-3 tracking-wide'>YOUR FEET DESERVE THE BEST</h1>

        <div className='w-[404px]'>
        <h2 className='mt-4 text-left font-light pl-3 '>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</h2>
        </div>

        <div className='mt-2 flex flex-row items-start gap-5 pl-3 p-1 '>
            <button className='bg-red-700 text-white border border-red-700 p-1 font-semibold'>Shop Now</button>
            <button className='bg-white text-gray-600 border border-black p-1 font-semibold'>Category</button>
        </div>
        
        <div>
          <h2 className='text-left pt-6 pl-3'>Also availabe on:</h2>  
          <div className='mt-3 mb-2 flex gap-3'>
            <img src="/src/assets/flipkart.png" alt=""
            className='h-7 w-7 ml-3'  />
            <img src="/src/assets/amazon.png" alt=""
            className='h-7 w-7 ml-3'  />
          </div>
        </div>


        
      </div>
      <div className=''>
            <div>
                <img src="/src/assets/shoes.png" alt=""
                className='drop-shadow-[0_45px_45px_rgba(0,0,0,0.5)]' />
            </div>
      </div>
    </div>
  )
}

export default Hero
