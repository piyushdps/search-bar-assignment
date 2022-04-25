import React, { useContext } from 'react'
import SearchContext from '../Context/SearchContext'
import Card from './Card'

const Cards = () => {
  const {data} = useContext(SearchContext)
  
    return (
   <>
   {data.map((o,i)=><Card key={i}  thumbnail={o.volumeInfo.imageLinks.thumbnail} title={o.volumeInfo.title} description={o.volumeInfo.description} authors={o.volumeInfo.authors}     index={i}       />)}
   </>
  )
}

export default Cards