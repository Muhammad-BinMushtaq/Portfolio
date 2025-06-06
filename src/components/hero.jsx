import React from 'react'
import heroPhoto from '../assets/heroPhoto.png'
const Hero = () => {
    return (
        <div className='mb-8 flex flex-col lg:flex-row justify-between items-center text-white mt-25  p-4 gap-8 '>
            <div className='content text-center lg:text-left lg:ml-10 order-2 lg:order-1 lg:pl-4 '>
                  <h2 className='tracking-tight text-2xl  md:text-3xl lg:text-4xl font-medium '>
                       <span className='px-2 py-1 rounded-lg bg-amber-500'> AWARD-WINNING </span> 
                    </h2>
                    <h1 className='tracking-tight text-5xl md:text-6xl lg:text-8xl font-bold mt-2'>
                    DEVELOPER
                    </h1>
                    <h2 className='tracking-tight text-2xl md:text-1xl lg:text-4xl font-medium mt-1'>
                          BUILDING PRODUCTS THAT <span className='px-2 py-1 rounded-lg  bg-amber-500'>SCALE</span> 
                    </h2>

            </div>

            <div className='order-1 lg:order-2'>
                <img
                    className='h-[400px] md:h-[450px] lg:h-[600px] object-cover'
                    src={heroPhoto}
                    alt="Professional developer"
                />
            </div>

            
        </div>
    )
}

export default Hero

