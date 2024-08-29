import React from 'react'


const NavBar = () => {
  return (
    <>
    <div className=' flex flex-row justify-between items-center  '>
        <div>
            <img src="/src/assets/logo.png" 
            alt="nike logo" 
            className='h-[42.75px] w-[76px]'/>
        </div>
        <div className=''>
            <ul className='flex flex-row gap-6 items-center underline underline-offset-2 cursor-default '>
                <li className='block hover:font-semibold'>MENU</li>
                <li className='block hover:font-semibold'>LOCATION</li>
                <li className='block hover:font-semibold'>CONTACT</li>
                <li className='block hover:font-semibold'>ABOUT US</li>
            </ul>
        </div>
        <div>
            <button className='bg-red-700 rounded-md border px-3 py-1 text-white'>
                Login
            </button>
        </div>
    </div>
    </>
  )
}

export default NavBar
