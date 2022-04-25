import axios from 'axios'
import React, { useState } from 'react'
import SearchContext from '../SearchContext'
import DEFAULT_DATA from '../../utils/default'
const SearchContextProvider = ({children}) => {
    const [inputSearch, setInputSearch] = useState("");
    const [data,setData] = useState(DEFAULT_DATA)
    const getQueriedData = async(value) => {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=25`)
        return response.data.items
    }

  
    return (
    <SearchContext.Provider value={{

        getQueriedData, setInputSearch,setData,setInputSearch,data,inputSearch 
    }}>
        {children}
    </SearchContext.Provider>
    
  )
}

export default SearchContextProvider