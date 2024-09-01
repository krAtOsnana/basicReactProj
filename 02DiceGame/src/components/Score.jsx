import React, { useState } from 'react'

function Score({score}) {
    
  return (
    <div className='flex flex-col max-w-[135px] m-5 ' >
      <h1 className='text-8xl text-center'>{score}</h1>
      <h2 className=' font-light text-xl text-center  '>Total Score</h2>
    </div>
  )
}

export default Score
