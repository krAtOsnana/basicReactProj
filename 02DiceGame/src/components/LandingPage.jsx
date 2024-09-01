
function LandingPage({handleCLick}) {


    

  return (
    <>
    <div className="grid grid-cols-2 p-10 m-10">
        {/* col1 */}
        <div className="">
            <img src="./dices 1.png" alt="dice images" />
        </div>
        {/* col2 */}
        <div className="">
            <div className="">
                <h1 className="font-poppins text-[96px] mt-24 text-right  ">
                    DICE GAME
                </h1>
                <div className=" p-2 text-right  ">
                    <button className="bg-black text-white text-center w-[220px]  
                    hover:bg-white hover:text-black hover:border-black border-2 border-black
                    ease-in duration-200  p-2 px-5 rounded-md  gap-y-[2]"
                    onClick={handleCLick}>
                        PLAY GAME
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LandingPage
