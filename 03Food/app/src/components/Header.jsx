import React from 'react'
import { MdFastfood } from "react-icons/md";



function Header() {

    const meals = ["all","breakfast","lunch","dinner"]

  return (
    <>  
    <div className='grid grid-rows-2 bg-[#323343]  '>
        {/* grid1 */}
        <div className=' p-4  flex justify-between items-center md:mt-10 md:mx-10 '>
            <div className='flex justify-center '>
                <img src="/foodyZone.svg" alt="foody zone logo" />
                
            </div>
            
            <div>
                <input 
                type="text"
                placeholder='Search Food...'
                className='p-2 px-3 rounded-md bg-transparent border border-red-600  md:block'
                />
            </div>
        </div>
        {/* grid2 */}
        <div className=' flex items-center justify-center  gap-2 md:gap-6 mt-2 '>
            {meals.map((value, i) => {
                return (
                <button
                key={i}
                className={`text-white bg-red-700 p-2 px-3 text-sm md:text-lg  rounded-lg font-light uppercase border border-red-600
                hover:bg-red-800 hover:scale-95 hover:border-black hover:border
                `}
                >{value}</button>
                )
                
            })}
        </div>
        


    </div>
    
    </>
  )
}

export default Header
