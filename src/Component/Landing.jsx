import React from 'react'
import flower from '../assets/pics/flower.png'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='justify-center bg w-full h-[100vh] flex flex-col items-center'>
       <div className='flex flex-col items-center'>
            <h1 className="text-7xl m-2 text-[#324b2e] ">Welcome</h1>
            <h3 className="text-[1rem] text-gray-300 font-semibold tracking-[1rem]  text-[#324b2e]"> On board</h3>
       </div>
       <p className=" text-[#324b2e] w-[30%] text-center text-gray-300 mt-4">
            Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Qui dolore ad eveniet
              voluptatum molestiae recusandae hic at,
             
       </p>
       <div className='relative top-[-1.6rem]  flex justify-center'>
            <img src={flower} className=" w-[50%] opacity-[30%] top-20 rotate-[-30deg]" />
            <Link to='/Complain-Request'>
                <button className="bg-[#324b2e] absolute p-2 w-[10rem] rounded-xl text-white left-[7rem] bottom-[3rem]">Complain</button>
            </Link>
            </div>
       <div>
        <p className="text-[#324b2e]"> Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Qui dolore ad eveniet
             </p>
       </div>
    </div>
  )
}

export default Landing
