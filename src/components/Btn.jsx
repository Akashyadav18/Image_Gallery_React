import React from 'react'

const Btn = ({ handleQuery, handleSetQuery }) => {
    return (
        <div className="overflow-x-scroll scrollbar-hide p-5">
            <div className="w-max flex">
                <button className='ring-1 ring-gray-400 py-1 px-3 mx-3 rounded-lg font-semibold hover:bg-[#5eead4] hover:ring-0' onClick={() => handleSetQuery("bird")}>Bird</button>
                <button className='ring-1 ring-gray-400 py-1 px-3 mx-3 rounded-lg font-semibold hover:bg-[#5eead4] hover:ring-0' onClick={() => handleSetQuery("nature")}>Nature</button>
                <button className='ring-1 ring-gray-400 py-1 px-3 mx-3 rounded-lg font-semibold hover:bg-[#5eead4] hover:ring-0' onClick={() => handleSetQuery("animal")}>Animal</button>
                <button className='ring-1 ring-gray-400 py-1 px-3 mx-3 rounded-lg font-semibold hover:bg-[#5eead4] hover:ring-0' onClick={() => handleSetQuery("people")}>People</button>
                <button className='ring-1 ring-gray-400 py-1 px-3 mx-3 rounded-lg font-semibold hover:bg-[#5eead4] hover:ring-0' onClick={() => handleSetQuery("sport")}>Sport</button>
                <button className='ring-1 ring-gray-400 py-1 px-3 mx-3 rounded-lg font-semibold hover:bg-[#5eead4] hover:ring-0' onClick={() => handleSetQuery("travel")}>Travel</button>
                <button className='ring-1 ring-gray-400 py-1 px-3 mx-3 rounded-lg font-semibold hover:bg-[#5eead4] hover:ring-0' onClick={() => handleSetQuery("film")}>Film</button>
                <button className='ring-1 ring-gray-400 py-1 px-3 mx-3 rounded-lg font-semibold hover:bg-[#5eead4] hover:ring-0' onClick={() => handleSetQuery("wildlife")}>Wildlife</button>
                <button className='ring-1 ring-gray-400 py-1 px-3 mx-3 rounded-lg font-semibold hover:bg-[#5eead4] hover:ring-0' onClick={() => handleSetQuery("pet")}>Pet</button>
                <button className='ring-1 ring-gray-400 py-1 px-3 mx-3 rounded-lg font-semibold hover:bg-[#5eead4] hover:ring-0' onClick={() => handleSetQuery("mammal")}>Mammal</button>
                <button className='ring-1 ring-gray-400 py-1 px-3 mx-3 rounded-lg font-semibold hover:bg-[#5eead4] hover:ring-0' onClick={() => handleSetQuery("wood")}>Wood</button>
                <button className='ring-1 ring-gray-400 py-1 px-3 mx-3 rounded-lg font-semibold hover:bg-[#5eead4] hover:ring-0' onClick={() => handleSetQuery("winter")}>Winter</button>
                <button className='ring-1 ring-gray-400 py-1 px-3 mx-3 rounded-lg font-semibold hover:bg-[#5eead4] hover:ring-0' onClick={() => handleSetQuery("forest")}>Forest</button>
                <button className='ring-1 ring-gray-400 py-1 px-3 mx-3 rounded-lg font-semibold hover:bg-[#5eead4] hover:ring-0' onClick={() => handleSetQuery("hiking")}>Hiking</button>
                <button className='ring-1 ring-gray-400 py-1 px-3 mx-3 rounded-lg font-semibold hover:bg-[#5eead4] hover:ring-0' onClick={() => handleSetQuery("fall")}>Fall</button>
                <button className='ring-1 ring-gray-400 py-1 px-3 mx-3 rounded-lg font-semibold hover:bg-[#5eead4] hover:ring-0' onClick={() => handleSetQuery("spring")}>Spring</button>

            </div>
        </div>
    )
}

export default Btn
