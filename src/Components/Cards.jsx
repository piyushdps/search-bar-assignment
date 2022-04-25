import React, { useContext } from 'react'
import SearchContext from '../Context/SearchContext'
import Card from './Card'
import LoadingSpinner from './Spinner'

const Cards = () => {
  const {data,noOfCards,setNumberOfCards ,loading} = useContext(SearchContext)
  
  const increaseNoOfCards = () =>{
      setNumberOfCards((cards) => cards+5)
  }


  if (!loading){

    return (
   <>
   {// eslint-disable-next-line
       data && data?.map((o,i)=>   { 
       if(i<noOfCards){return <Card key={i}  thumbnail={o.volumeInfo?.imageLinks?.thumbnail} 
       title={o?.volumeInfo?.title} 
       description={o?.volumeInfo?.description} 
       authors={o?.volumeInfo?.authors} 
       index={i}/>}
    })
   }

<div className='w-full flex justify-center'>
   {noOfCards<=25&& data?.length>noOfCards  &&<button onClick={increaseNoOfCards} className="w-3/5 p-2 rounded-lg text-xl capitalize text-white font-semibold m-20 bg-blue-500 mx-auto">
       Load More
   </button>}
   </div>
  </>
  
  
  )
}
else{
    return <LoadingSpinner/>
}}

export default Cards