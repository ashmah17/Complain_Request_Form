import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const Review = ({ User,setUser,setMobile, setReviewMessage,setEmail,ReviewMessage, Email, Mobile, review }) => {

 
   
  const handleSubmit =()=>{
   if(ReviewMessage && Email && Mobile){
    const data = {ReviewMessage, Email, Mobile}
    
      let storedData = JSON.parse(localStorage.getItem('review'))

      if(!Array.isArray(storedData)){
        storedData = []
      }
    storedData.push(data);
    localStorage.setItem('review', JSON.stringify(storedData))
    alert(`${User} Your Review has been Recieved, Thank you!`)
    setUser('')
      setMobile('')
      setReviewMessage('')
      setEmail('')

   }else{
    alert('please enter review message')
   }
  }
 
 
   
  return (
    <div className=' w-full h-[100vh] bg flex flex-col justify-between items-center '>
    <div className="w-full relative h-[30vh]  ">
      <motion.span 
       transition={{ duration: 2, repeat:Infinity, repeatType:'loop',  ease: "easeInOut"}}
       animate={{
           x: [0, -10, 0, -10, 0], 
           y: [0, -10, 0, -10, 0],
         }}
      
          className=" w-[8rem] h-[8rem]  md:w-[12rem] md:h-[12rem] bg3 absolute  rounded-full z-40 left-[-1rem] top-[-1.5rem] md:left-[-3rem] md:top-[-2rem] transision-all duration-600 ease-in-out"></ motion.span>
      <motion.span 
      initial={{x:0, y:0}}
      transition={{ duration: 2, repeat:Infinity, repeatType:'loop',  ease: "easeInOut"}}
       animate={{
           x: [0, -10, 0, -10, 0],
           y: [0, -10, 0, -10, 0], 
         }}
      
          className=" w-[4.5rem] h-[4.5rem] md:w-[6rem] md:h-[6rem]  bg4 absolute left-[8rem] bottom-[.3rem] md:left-[6rem] md:top-[13rem] rounded-full z-40 transision-all duration-600 ease "></motion.span>
     < motion.span 
     initial={{x:0, y:0}}
     transition={{ duration: 2, repeat:Infinity, repeatType:'loop',  ease: "easeInOut"}}
       animate={{
           x: [10, 0, 0, 0, 10],
           y: [10, 0, 0, 0, 10], 
         }}
      
     className=" w-[2.2rem] h-[2.2rem] bg5 absolute right-[3.8rem] top-[3rem] md:left-[26rem] md:top-[3rem] rounded-full z-40 transision-all duration-600 ease "></motion.span>
      <span className=" border-[#aeb8ac] border-[.2rem] border w-[35vh] h-[35vh] md:w-[50vh] md:h-[50vh] rounded-full absolute left-[4.5rem] top-[-5rem] md:left-[5rem] md:top-[-4rem]" ></span>
    
    </div>


    <div className='p-5 rounded-xl bg-[#fdfdfdcb] mb-[1.5rem]  flex flex-col md:w-[50%] w-[90%]'>
        {
            review.map((detail)=>(
                <>
               <span 
                  key={detail.id} 
                  className="shadow-xl items-center rounded flex h-30   mb-3 ">
                  <label className=" ml-4 w-[28%] text-gray-400">{detail.title}</label>
                  <input type="text" value={detail.value} onChange={detail.change} className="bg-transparent outline-none rounded w-full p-3"  />
              </span>
            </>
            ))
        }
      <Link to='/Complain'>
      
          <p className=" text-right m-2 cursor-pointer text-gray-500">Complain?</p>
      </Link>
      <button onClick={handleSubmit} className="p-3 rounded bg-[#586c55;] text-white mt-4">Submit</button>
    </div>
  </div>
  )
}

export default Review
