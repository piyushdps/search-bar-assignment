import axios from 'axios'
import React, { useCallback, useMemo, useState } from 'react'
import SearchContext from '../SearchContext'
import DEFAULT_DATA from '../../utils/default'
import debounce from '../../utils/debounce'



const SearchContextProvider = ({ children }) => {
    const [inputSearch, setInputSearch] = useState("");
    const [data, setData] = useState(DEFAULT_DATA)
    const [noOfCards, setNumberOfCards] = useState(5)
    const [loading, setLoading] = useState(false)
    useMemo(() => {
        setNumberOfCards(5)
        // eslint-disable-next-line
    }, [data])

    const getQueriedData = async (value) => {
        if (value.length<3) return 
        try {
            setLoading(true)
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=30`)
            if (response?.data.items === []) {
                setData(DEFAULT_DATA)
                return
            }
            setData(response.data.items)
        return
        } catch (error) {
            setData(DEFAULT_DATA)
        }finally{
            setLoading(false)
        }
    }

    const optimizedDataQuery = useCallback(debounce(getQueriedData), [inputSearch])
    return (
        <SearchContext.Provider value={{

            getQueriedData, optimizedDataQuery, setInputSearch, setData,  setNumberOfCards, setLoading, data, inputSearch, noOfCards, loading
        }}>
            {children}
        </SearchContext.Provider>

    )
}

export default SearchContextProvider