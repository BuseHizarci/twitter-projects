import React from 'react'

const Container = ({children}) => {
    return (
            <div className=" flex min-h-screen bg-black bg-black mx-auto max-w-7xl border">
                {children}
            </div>
       
    )
}

export default Container
