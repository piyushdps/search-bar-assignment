import React, { useState } from 'react'
import { motion } from "framer-motion"

const Card = ({ thumbnail, title, description,  index }) => {


const [expand, setExpand] = useState(false)

// Each Card loading transition from left or Right 
  const itemVariants = {
    initial: { x: index % 2 === 0 ? "+100vw" : "-100vw", opacity: 0.5 },
    animate: { x: 0, opacity: 1 },
  };

// Using Framer Motion for rendering cards one after the other 
  return (
    <motion.div
      variants={itemVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.6, delay: index * 0.07, type: "tween" }}>
      <div className="p-5 lg:mx-44 ">
        <div className=" w-full lg:max-w-full lg:flex border-b   p-2 lg:border-gray-100 cards-text">
          <div className=" text-center overflow-hidden flex justify-center min-w-three" >
            <img
              src={thumbnail || `/Images/notfound.png`} //If Src returns undefined renders a Fallback Image 
              alt="Book Thumbnail"
              height={140}
              width={130}
              className='m-2 max-h-60'
              onError={({ currentTarget }) => { // Fallback Image if get request fails
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = 'Images/notfound.png'; 
              }}
            />
          </div>
          <div className=" p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8 ">
              <p className="text-sm text-gray-600 flex items-center">
              </p>
              <div className="text-gray-700 animate-color_change font-semibold text-xl mb-2 ">Title:</div> 
              <div className="text-gray-600 animate-color_change font-medium text-lg mb-2 ">{title}</div> 
              <div className="text-gray-700 animate-color_change font-semibold text-xl mb-2 ">Description:</div> 
              {description?.length>500?
              !expand ?<>
              <p className="text-gray-700 text-base animate-color_change"> {description?.substring(0, 500)+'...'} </p>
              <p onClick={_=>setExpand(expand=>!expand)} className="cursor-pointer text-xs ">Read More </p>
              <br/>
              </>
              :
              <>
              <p className="text-gray-700 text-base animate-color_change"> {description} </p>
              <p onClick={_=>setExpand(expand=>!expand)} className="cursor-pointer text-xs">Read Less </p>
              <br/>
              </>
              :<p className="text-gray-700 text-base animate-color_change"> {description} </p>}
            </div>
            <div className="flex items-center">
              <div className="text-sm">
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Card
