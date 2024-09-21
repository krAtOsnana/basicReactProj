import { IoSearchSharp } from "react-icons/io5";


function Navbar({onOpen}) {
  return (
    <div className="grid grid-rows-2 gap-4   mt-5">
      <div className="gap-2 font-semibold py-3 bg-white border border-white rounded-md flex items-center justify-center">
        <img src="/logos_firebase.svg" alt="logo" />
        <h1 className="text-3xl">Firebase Contact App</h1>
      </div>

      {/* searchbox and inputButton  */}
      <div className="flex  gap-6 justify-between">
      <div className="relative flex items-center">
        <input type="text"
        className="pl-14 bg-transparent border border-white rounded-md p-2 py-3 w-80 text-white" 
        placeholder= {`search contact . . .`}
        />
        <IoSearchSharp 
        className="text-white text-4xl absolute ml-2  
        "/>
      </div>  
      <div className="mt-1 cursor-pointer bg-white h-[52px] w-[52px] rounded-full flex items-center justify-center ">
        <h1 className="text-6xl pb-3 hover:scale-110 "
        onClick={onOpen}
        
        >+</h1>
      </div>
      </div>
      

    </div>
  )
}

export default Navbar
