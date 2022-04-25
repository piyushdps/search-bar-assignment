import React from 'react'
import { motion } from "framer-motion"

const Card = ({ thumbnail, title, description, authors,index }) => {

  const itemVariants = {
    initial: { x: "-100vw", opacity: 0.5 },
    animate: { x: 0, opacity: 1 },
};
  return (
    <motion.div
      variants={itemVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5, delay: index * 0.27, type: 'just' }}>
      <div className="p-5">

        <div className=" w-full lg:max-w-full lg:flex shadow-lg border rounded-sm p-2 lg:border-gray-400">
          <div className=" text-center overflow-hidden flex justify-center min-w-three" title="Mountain">
            <img 
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = `/Images/logo.png`;
          }}
            src={thumbnail}  className='m-2 h-64 max-w-sm lg:w-full ' />{/* volumeinfo.imageLinks.thumbnail */}
          </div>
          <div className=" p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8 ">
              <p className="text-sm text-gray-600 flex items-center">
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2 ">{title}</div> {/* volumeInfo.title */}
              <p className="text-gray-700 text-base">{description} {/*volumeInfo.description */}</p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-900 text-lg leading-none">{authors.length > 1 ? "Author Names" : "Author Name"}</p>
                {authors.map((o, i) => {
                  return <p className="text-gray-600 " key={i}>{o}</p>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Card
