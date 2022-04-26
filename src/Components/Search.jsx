import React, { useState, useContext } from 'react'
import { FiSearch } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5"
import SearchContext from '../Context/SearchContext';
const Search = () => {

    // States
    const { inputSearch, setInputSearch, optimizedDataQuery,clearinput } = useContext(SearchContext)
    const [showInfo, setShowInfo] = useState(false);

   
    
    // Checks if the entered data is more than 3 characters , Trims extra spaces from search , Calls the Query ,Toggle Info display
    const changeSearchInputHandler = async (value) => {
        setInputSearch(value)  
        if (value.length < 3) return setShowInfo(true)
        value = value.trim()
        setShowInfo(false)
        optimizedDataQuery(value)
    }


    return (
        <div className='Searchoptions flex md:flex-row flex-col mt-5  md:justify-between md:mx-44 md:mt-16 '>
            <div className="switchers  flex justify-center md:block">
                <button id="1" onClick={_ => { }} className={"border-b-2 pb-2 border-blue-500 text-blue-500"}>Search Books</button>
            </div>
            <div className='Searchinput  flex items-center justify-center mt-7 border-gray-400 p-3 mx-5 md:mt-0  md:p-0 relative'>
                <div className='flex items-center'>
                    <FiSearch className='w-10 text-gray-600 font-semibold' />
                    <input value={inputSearch} onBlur={() => setShowInfo(false)} onChange={(event) => changeSearchInputHandler(event.target.value)} className='p-1 outline-none w-72' maxLength={20} type="text" placeholder={`Try "Amish"`} 
                    onFocus={_ => { setShowInfo(true) }} /> 
                    <span ><IoCloseSharp onClick={clearinput} className='text-xl cursor-pointer' />
                    </span>
                </div>

                <div className={`${showInfo ? "block" : "hidden"}   Infomessage absolute lg:top-10 top-14  w-96 bg-white p-3 rounded-lg z-50 `} >
                    <h6 className='font-semibold text-md  text-gray-800'>
                        Type 3 characters to get going!
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default Search