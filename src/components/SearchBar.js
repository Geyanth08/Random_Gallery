import React, { useState } from 'react'

function SearchBar({ searchText }) {

    const [searchItem, setSearchItem] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(searchItem);
        
        document.querySelector('.search').reset();
    }

    return (
        <div className="mt-8" >
            <form onSubmit={onSubmit} className="search flex flex-auto w-full justify-center items-center">
                <input onChange={(e) => setSearchItem(e.target.value)} type="text" name="img" id="img" placeholder="Enter image name" autoComplete="off" className="p-1 mr-3 focus:outline-none border-b border-lime-700 text-green-700 font-semibold"/>
                <button type="submit" className="bg-lime-500 hover:bg-lime-400 active:bg-lime-600 focus:outline-none focus:ring focus:ring-lime-300 text-white font-mono px-2 py-1 rounded-md ">Submit</button>
            </form>
        </div>
    )
}

export default SearchBar