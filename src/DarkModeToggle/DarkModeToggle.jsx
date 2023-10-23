import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const DarkModeToggle = () => {

    const {toggle, mode} = useContext(ThemeContext);

  return (
    <div className='w-[50px] h-[30px] ring-2 ring-gray-500 rounded-2xl flex justify-between items-center p-1 relative cursor-pointer' onClick={toggle}>
      <div className='text-sm'>🌙</div>
      <div className='text-sm'>☀️</div>
      <div className='w-[20px] h-[20px] bg-teal-400 rounded-full absolute' style={mode === "light" ? {left: "4px"} : {right: "4px"}}></div>
    </div>
  )
}

export default DarkModeToggle
