import React from 'react'
import {motion} from 'framer-motion'

const Complaining = () => {
    const details =[
        {title:'Email :'},
        {title:'Phone Number :'},
        {title:'Phone Address :'}
    ]
  return (
    <div className=' w-full h-[100vh] bg flex justify-center items-center'>
      <div className="w-[full] h-[50vh]">
        <span         
            className=" bg2 w-[45vh] h-[45vh] md:w-[70vh] md:h-[70vh] rounded-full absolute md:left-[-8rem] md:top-[-12rem]  left-[-7rem] top-[-7rem]"></span>
        <motion.span 
         transition={{ duration: 2, repeat:Infinity, repeatType:'loop',  ease: "easeInOut"}}
         animate={{
             x: [0, -10, 0, -10, 0], 
             y: [0, -10, 0, -10, 0],
           }}
        
            className=" w-[10rem] h-[10rem]  md:w-[12rem] md:h-[12rem] bg3 absolute  rounded-full z-40 left-[-2rem] top-[-1rem] md:left-[-3rem] md:top-[-2rem] transision-all duration-600 ease-in-out"></ motion.span>
        <motion.span 
        initial={{x:0, y:0}}
        transition={{ duration: 2, repeat:Infinity, repeatType:'loop',  ease: "easeInOut"}}
         animate={{
             x: [0, -10, 0, -10, 0],
             y: [0, -10, 0, -10, 0], 
           }}
        
            className=" w-[5.5rem] h-[5.5rem] md:w-[6rem] md:h-[6rem]  bg4 absolute left-[8rem] top-[12rem] md:left-[6rem] md:top-[13rem] rounded-full z-40 transision-all duration-600 ease "></motion.span>
       < motion.span 
       initial={{x:0, y:0}}
       transition={{ duration: 2, repeat:Infinity, repeatType:'loop',  ease: "easeInOut"}}
         animate={{
             x: [10, 0, 0, 0, 10],
             y: [10, 0, 0, 0, 10], 
           }}
        
       className=" w-[2.2rem] h-[2.2rem] bg5 absolute left-[21.5rem] top-[3rem] md:left-[26rem] md:top-[3rem] rounded-full z-40 transision-all duration-600 ease "></motion.span>
        <span className=" border-[#aeb8ac] border-[.2rem] border w-[35vh] h-[35vh] md:w-[50vh] md:h-[50vh] rounded-full absolute left-[3rem] top-[-5rem] md:left-[5rem] md:top-[-4rem]" ></span>
      </div>


      <div className='bg-red-900 p-5 rounded-xl bg-[#fdfdfdcb] mt-[17rem] flex flex-col md:w-[50%] w-[80%]'>
          {
              details.map((detail, index)=>(
                  <>
                 <span className="shadow-xl items-center rounded flex h-30  mb-2 ">
                    <label className=" ml-4 w-[28%] text-gray-400">{detail.title}</label>
                    <input type="text" className="bg-transparent outline-none rounded w-full p-3" />
                </span>
              </>
              ))
          }
        <textarea name="" placeholder='Message' id="" className=" shadow-xl bg-transparent outline-none p-3 rounded h-[6rem]">

        </textarea>
        <button className="p-3 rounded bg-[#586c55;] text-white mt-4">Submit</button>
      </div>
    </div>
  )
}

export default Complaining
