import React from 'react'

function ShimmerEffect() {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
                {[...Array(10)].map((_, index) => (
                    <div key={index} className="h-auto bg-white flex flex-col rounded overflow-hidden shadow-md">
                        <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
                        <div className="p-4 flex-1 flex flex-col">
                            <div className="h-6 bg-gray-200 animate-pulse mb-2"></div>
                            <div className="h-4 bg-gray-200 animate-pulse w-1/2"></div>
                            <div className="mt-2 flex items-center flex-wrap gap-2">
                                <div className="h-6 bg-gray-200 animate-pulse w-1/3"></div>
                                <div className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full ml-auto"></div>
                            </div>
                            <div className="mt-2 h-10 bg-gray-200 animate-pulse rounded-md"></div>
                        </div>
                    </div>
                ))}
            </div></div>
    )
}

export default ShimmerEffect