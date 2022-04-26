// Library
import axios from 'axios'
import React, { useCallback, useMemo, useState } from 'react'
import SearchContext from '../SearchContext'


// Utils
import DEFAULT_DATA from '../../utils/default'
import debounce from '../../utils/debounce'
import { searchCachedData, SetCacheData } from '../../utils/caching'
import { consoleGroups } from '../../utils/consoleGroups'

const SearchContextProvider = ({ children }) => {

    // State 
    const [inputSearch, setInputSearch] = useState("");
    const [data, setData] = useState(DEFAULT_DATA)
    const [noOfCards, setNumberOfCards] = useState(5)
    const [loading, setLoading] = useState(false)


    //Use Memo Hook to Reset the number of cards  
    useMemo(() => {
        setNumberOfCards(5)
        // eslint-disable-next-line
    }, [data])


    // Looks out for Cached Data if data is stale calls the API 
    const getQueriedData = async (value) => {
        let cachedValue = searchCachedData(value)
        if (cachedValue.value == null) {
            const apiResp = await handleApiRequest(value)
            SetCacheData(value, apiResp)
        } else {
            consoleGroups("RESULTS SOURCE" , ["Query Found In The Cache"])
            setData(searchCachedData(value).value)
        }
    }


    // Calls the API for new Data 
    const handleApiRequest = async (value) => {
        try {
            setLoading(true)
            const response = await axios.get(`${process.env.REACT_APP_BASE_API}/volumes?maxResults=30&q=${value}`)
            if (response?.data.items === []) {
                consoleGroups("RESULTS SOURCE" , ["Api Request Failed Loading Default Data"])
                setData(DEFAULT_DATA)
                return
            }
            setData(response.data.items)
            return response.data.items
        } catch (error) {
            setData(DEFAULT_DATA)
        } finally {
            setLoading(false)
        }
    }
    const optimizedDataQuery = useCallback(debounce(getQueriedData), [])
    return (
        <SearchContext.Provider value={{
            getQueriedData, 
            optimizedDataQuery, 
            setInputSearch, 
            setData, 
            setNumberOfCards,
            setLoading,
            data,
            inputSearch,
            noOfCards,
            loading


        }}>
            {children}
        </SearchContext.Provider>
 
    )
}

export default SearchContextProvider