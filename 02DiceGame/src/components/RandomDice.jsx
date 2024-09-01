import React, { useState } from 'react'

function RandomDice({ 
  randomNum,
  setRandomNum ,
  generateRnadomNum,
  resetGame,
  }) { 
    
    const [isClicked, setIsClicked] = useState(false);
    
    const handelClick = ()=>{
      setIsClicked((prev)=>!prev)
    }
    
    
    
    
    return (
    <div className='mt-32 grid grid-col-3 items-center justify-center '>

      <div className='flex justify-center'>
      <img src={`dice_${randomNum}.png`}
       alt="randomdice"
       onClick={generateRnadomNum} />  
      </div>
      
       <div className='flex justify-center'>
          <h1 className='uppercase text-center  mt-5 text-2xl font-semibold w-[250px] '>click on dice to roll</h1>
       </div>

      <div className='flex flex-col items-center gap-5 mt-4'>
      <button 
      className='uppercase items-center  
        bg-black text-white text-center w-[220px]  
        hover:bg-white hover:text-black hover:border-black border-2 border-black
        ease-in duration-200  p-2 px-5 rounded-md'
        onClick={resetGame}
        >reset</button>      
        
      <button 
      className={`uppercase 0
      bg-black text-white text-center w-[220px]  
      hover:bg-white hover:text-black hover:border-black border-2 border-black
      ease-in duration-200  p-2 px-5 rounded-md  gap-y-[2]
      ${isClicked ? 'bg-white text-black' : ""}
      `}
      
      onClick={handelClick}
      >rules" </button>  

      <div className={`bg-red-400 p-4  
      ${isClicked ? '' : "hidden"}`} >
        <h1 className={`font-semibold underline underline-offset-4`} >How to play dice game : </h1>
        <div>
          <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>after click on dice if selected number is equal to dice number you will get same point as dice</li>
            <li>if you get wrong guess then 2 point will be dedcuted</li>
          </ul>
        </div>
      </div>
        

      

      </div>

    </div>
  )
}

export default RandomDice
