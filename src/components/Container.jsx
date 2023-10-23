import React from 'react'

const Container = ({children}) => {
    return (
        <div>
            <div className='max-w-[1920] mx-auto px-4 md:px-8 xl:px-20'>
                {children}
            </div>
        </div>
    )
}

export default Container
