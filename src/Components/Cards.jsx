import React, { useContext } from 'react'
import SearchContext from '../Context/SearchContext'
import Card from './Card'
import LoadingSpinner from './Spinner'

const Cards = () => {
    // State Imports from context 
    const { data, noOfCards, setNumberOfCards, loading } = useContext(SearchContext)

    // Handles the number of cards displayed on the screen 
    const increaseNoOfCards = () => {
        setNumberOfCards((cards) => cards + 5)
    }

    // Render the card if not in Loading State 
    if (!loading) {
        return (
            <>
                {// eslint-disable-next-line
                    data && data?.map((o, i) => {
                        if (i < noOfCards) {
                            return <Card key={i} thumbnail={o.volumeInfo?.imageLinks?.thumbnail}
                                title={o?.volumeInfo?.title}
                                description={o?.volumeInfo?.description || "Description Not Available "}
                                authors={o?.volumeInfo?.authors}
                                index={i} />
                        }
                    })
                }

                <div className='w-full flex justify-center'>
                    {noOfCards <= 25 && data?.length > noOfCards && <button onClick={increaseNoOfCards} className="w-3/5 p-2 rounded-lg text-xl capitalize text-white font-semibold m-20 bg-blue-500 mx-auto">
                        Load More
                    </button>}
                </div>
            </>


        )
    }

    else {
        // Load Spinner if in Loading State 
        return <LoadingSpinner />
    }
}

export default Cards