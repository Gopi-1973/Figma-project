import React from 'react'
import Line1 from '../assets/holiday/line-1.png'
import bgImage from '../assets/holiday/rect.png'

const Holiday = () => {
  return (

    <div className="w-full h-[400px] px-[180px]  py-14 items-center "
    style={{
            background: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
  }}>
        
    <div className='relative  w-fit '>
    <h2 className='text-white md:-[50px] text-[40px] font-bold font-volkhov mt-10 md:w-[600px] text-left '>Lets Make Your<br/> next Holiday Amazing</h2>
    <img src={Line1} alt="" className='absolute w-[150px] md:right-[250px] '/>
    </div>
    </div>
    
  )
}

export default Holiday