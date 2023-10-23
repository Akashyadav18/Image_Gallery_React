import React from 'react'

const Model = ({ children, modelOpen, setModelOpen }) => {
  return (
    <div>
      {modelOpen && (
        <div className="bg-black/50 fixed inset-0">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col items-end bg-slate-200 w-1/2 p-5">
              <button
                onClick={() => setModelOpen(false)}
                className="text-2xl mb-2"
              >
                X
              </button>
              {children}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Model
