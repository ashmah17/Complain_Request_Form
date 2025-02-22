import React from 'react'
import flower from '../assets/pics/flower.png'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='justify-center bg w-full h-[100vh] flex flex-col items-center'>
       <div className='flex flex-col items-center'>
            <h1 className="text-5xl m-2 text-[#324b2e] ">Welcome</h1>
            <h3 className="text-[.8rem] text-center font-semibold tracking-[.5rem]  text-[#849882]">Arora Sceret <br /> Scent</h3>
       </div>
       <p className=" text-[#849882] w-[70%] font-semibold text-center text-[.8rem] mt-4">
          Endulge your senses in a world of unforgettable fragrances at 
          Arora Secret Scent. Whether you're seeking a signature scent or
           exploring a new aroma, we offer an enchanting collection that 
           will transport you to a place of luxury and elegance.
       </p>
       <div className='relative top-[-1.6rem] flex  justify-center'>
            <img src={flower} className=" w-[50%] opacity-[30%] top-20 rotate-[-30deg]" />
               <div className='flex left-[1.8rem]  bottom-[2rem] absolute w-[50%] '>
                    <Link to='/Complain'>
                         <button className="bg-[#324b2e] p-2 mr-1 w-[10rem] round rounded-bl-xl text-[#849882] ">Complain</button>
                    </Link>
                    <Link to='/Review'>
                         <button className="bg-[#324b2e]  p-2 w-[10rem] rounded-tr-xl  text-[#849882] ">Review</button>
                    </Link>
               </div>
            </div>
       <div>
       </div>
    </div>
  )
}

export default Landing
