import React, { useState, useContext } from 'react'
import { FiSearch } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5"
import SearchContext from '../Context/SearchContext';
const Search = () => {

    const { inputSearch, setInputSearch, optimizedDataQuery } = useContext(SearchContext)
    const [showinfomessage, setshowinfomessage] = useState(false);

    const clearinput = () => {
        setInputSearch("");
    }

    const changeserachinput = async (value) => {
        setInputSearch(value)
        optimizedDataQuery(value)
    }
    return (
        <div className='Searchoptions flex md:flex-row flex-col mt-5  md:justify-between md:mx-44 md:mt-16 '>
            <div className="switchers  flex justify-center md:block">
                <button id="1" onClick={(event) => { }} className={"border-b-2 border-blue-500 text-blue-500"}>Search Books</button>
            </div>
            <div className='Searchinput  flex items-center justify-center mt-7 border-gray-600 p-3 mx-5 md:mt-0  md:p-0 relative'>
                <div className='flex items-center'>
                    <FiSearch className='w-10 text-gray-600 font-semibold' />
                    <input value={inputSearch} onBlur={() => setshowinfomessage(false)} onChange={(event) => changeserachinput(event.target.value)} className='p-1 outline-none w-72' maxLength={20} type="text" placeholder={`Try "Amish"`} onFocus={_ => { setshowinfomessage(true) }} /> 
                    <span ><IoCloseSharp onClick={clearinput} className='text-xl cursor-pointer' />
                    </span>
                </div>

                <div className={`${showinfomessage ? "block" : "hidden"}   Infomessage absolute lg:top-10 top-14  w-80 bg-white p-3 rounded-lg z-50 `} >
                    <h6 className='font-semibold text-md  text-gray-800'>
                        Type atleast 3 characters
                        <br />
                        to start searching
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default Search