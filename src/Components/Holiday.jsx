import React from 'react'
import Line1 from '../assets/holiday/line-1.png'
import bgImage from '../assets/holiday/rect.png'

const Holiday = () => {
  return (

    <div className="w-full h-[400px] px-[200px]  py-14 items-center "
    style={{
            background: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
  }}>
        
    <div className='relative  w-fit'>
    <h2 className='text-white text-[50px] font-bold font-volkhov w-[600px]'>Lets Make Your<br/> next Holiday Amazing</h2>
    <img src={Line1} alt="" className='absolute w-[150px] right-[150px]'/>
    </div>
    </div>
    
  )
}

export default Holiday