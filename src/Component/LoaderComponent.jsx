import React from 'react'

const LoaderComponent = () => {
    return (
        <div>

            <div className={`fade-loader ${loader ? "show" : ""}`}>
                <ClipLoader color="green" size={80} />
            </div>


        </div>
    )
}

export default LoaderComponent
