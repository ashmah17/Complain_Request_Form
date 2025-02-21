import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const Complaining = ({complain,User,setUser,setMobile, setComplainMessage,setEmail, ComplainMessage, Email, Mobile}) => {

  const handleSubmit=()=>{
    if(ComplainMessage && User &&  Email && Mobile){
      const complaindata = {ComplainMessage,User, Email, Mobile}

      let storedComplain = JSON.parse(localStorage.getItem('complain'));

        if(!Array.isArray(storedComplain)){
         storedComplain =[]
        }
        storedComplain.push(complaindata);
      localStorage.setItem('complain', JSON.stringify(storedComplain));

      alert(`${User} Your Complain will be reviewed`)
      setUser('')
      setMobile('')
      setComplainMessage('')
      setEmail('')


    }else{
      alert('Submit your Complain')
    }
  }
    
  return (
    <div className=' w-full h-[100vh] bg flex flex-col justify-between items-center '>
      <div className="w-full relative h-[30vh]  ">
      <span className=" bg2 w-[48vh] h-[48vh] md:w-[70vh] md:h-[70vh] rounded-full absolute md:left-[-8rem] md:top-[-12rem]  left-[-5rem] top-[-7rem]"></span>
        <motion.span 
         transition={{ duration: 2, repeat:Infinity, repeatType:'loop',  ease: "easeInOut"}}
         animate={{
             x: [0, -10, 0, -10, 0], 
             y: [0, -10, 0, -10, 0],
           }}
        
            className=" w-[8rem] h-[8rem]  md:w-[12rem] md:h-[12rem] bg3 absolute  rounded-full z-40 left-[1px] top-[-1rem] md:left-[-3rem] md:top-[-2rem] transision-all duration-600 ease-in-out"></ motion.span>
        <motion.span 
        initial={{x:0, y:0}}
        transition={{ duration: 2, repeat:Infinity, repeatType:'loop',  ease: "easeInOut"}}
         animate={{
             x: [0, -10, 0, -10, 0],
             y: [0, -10, 0, -10, 0], 
           }}
        
            className=" w-[4.5rem] h-[4.5rem] md:w-[6rem] md:h-[6rem]  bg4 absolute left-[8rem] bottom-[1rem] md:left-[6rem] md:top-[13rem] rounded-full z-40 transision-all duration-600 ease "></motion.span>
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


      <div className='p-5 rounded-xl bg-[#fdfdfdcb] mb-[4rem]  flex flex-col md:w-[50%] w-[90%]'>
             {
                 complain.map((detail)=>(
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
           <Link to='/review'>
           
               <p className=" text-right m-2 cursor-pointer text-gray-500">Review?</p>
           </Link>
           <button onClick={handleSubmit} className="p-3 rounded bg-[#586c55;] text-white mt-4">Submit</button>
      </div>
    </div>
  )
}

export default Complaining
