import { useState } from "react"
import GamePlay from "./components/GamePlay"
import LandingPage from "./components/LandingPage"

function App() {

  const[isStartes ,setIsStarted] = useState(true)

  const clickHandeler = () => {
            setIsStarted((prev) => !prev)
  }

  return (
    <>
    {
      isStartes ? <GamePlay/> : <LandingPage handleCLick={clickHandeler}/> 
    }
    
    </>
  )
}

export default App
