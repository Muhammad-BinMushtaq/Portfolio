import React from 'react'
import { Link } from 'react-router-dom'
const Page404 = () => {
    return (

        <main>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto space-y-3 text-center">
                    <h3 className="text-indigo-200 font-semibold">
                        404 Error
                    </h3>
                    <p className="text-gray-300 text-4xl font-semibold sm:text-5xl">
                        Page not found
                    </p>
                    <p className="text-gray-400">
                        Sorry, the page you are looking for could not be found or has been removed.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link to='/'
                        className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg">
                            Go back
                        </Link>
                        
                      
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page404