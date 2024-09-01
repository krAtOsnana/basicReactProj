import React, { useState } from 'react'



function Dices({
  setSelectedIndex,
  setSelectedNumber,
  selectedIndex,
  selectedNumber,
  error,
  setError
}) {
    const arr = [1, 2, 3, 4, 5, 6];
    // Use `null` to indicate no image is selected

   
    const handleClick = (value,index) => {
      setSelectedIndex(index); // Set the clicked image index as the selected index
      setSelectedNumber(value)
      setError("");
      console.log(`selected no. ${selectedNumber} ${selectedIndex}`);
    };
    
    
  
    
    return (
      <>
      <div className='h-[20vh]'>

      
      <h2 className='uppercase text-right text-2xl pr-4 underline underline-offset-4 mt-3 font-semibold'>select dice</h2>
      <div className='flex w-[552] h-[138px] pt-3 mt-0   '>
        {arr.map((value, i) => (
          <img
            src={`./dice_${value}.png`}
            key={i}
            className={`px-4 py-2 font-semibold rounded hover:scale-110 ${
              selectedIndex === i ? 'scale-110 border border-black' : ''
            }`}            
            onClick={() => handleClick(value, i)}  // Pass the index to the click handler
          />
        ))}
        </div>
        <div className='text-right mt-1 mb-0 text-xl pr-4  text-red-700' >
           <p >{error}</p> 
        </div>
        </div>
      </>
      
    );
  }
  
  export default Dices;
