import React, { useState } from 'react'
import Model from './Model'

const Explore = () => {

  const [modelOpen, setModelOpen] = useState(false);

  return (
    <div className=' h-screen'>
    <button
        onClick={() => setModelOpen(true)}
        className="bg-blue-500 text-white p-3 cursor-pointer rounded-md"
      >Model</button>
      Explore Page
      <Model  modelOpen={modelOpen} setModelOpen={setModelOpen}>
        <p>LOrem</p>
      </Model>
    </div>
  )
}

export default Explore
