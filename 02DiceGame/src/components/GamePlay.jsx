import React, { useState } from 'react'
import Score from './Score'
import Dices from './Dices'
import RandomDice from './RandomDice'

function GamePlay() {

  const[score, setScore] = useState(0)

  const [selectedNumber, setSelectedNumber] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null) 

  let [randomNum, setRandomNum] = useState((Math.floor(Math.random()*10)%6) +1)

  const [error, setError] = useState("")
  
  const generateRnadomNum = () => {

    if(!selectedNumber){
      setError("please first select a Dice");
      return;
    }else{
      setError("");
    }
      
    
    
    const num = (Math.floor(Math.random()*10)%6) +1 ;
    setRandomNum(num);
    
    

    if(num === selectedNumber ){
      setScore((prev)=>prev+2)
      console.log("+2")
    }
    else{
      setScore((prev)=>prev-2)
      console.log("-2")
    }
    setSelectedIndex(undefined)
    setSelectedNumber(undefined)
}

  const resetGame = () => {
    setScore(0);
  }

  return (
    <div className='   '>
        {/* upperDiv score and number selector */}
        <div className='flex items-center   justify-between  '>
          <Score score={score} />  
          <Dices  
          error={error}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          setSelectedNumber={setSelectedNumber}
          selectedNumber={selectedNumber}
          setError={setError}

          />

        </div>
          
        

        {/* lowerDiv Dice random Dice view */}
        <div className=''>
            <RandomDice 
            randomNum={randomNum}
            setRandomNum={setRandomNum}
            generateRnadomNum={generateRnadomNum}
            resetGame={resetGame}
            />
            
        </div>
    </div>
  )
}

export default GamePlay
