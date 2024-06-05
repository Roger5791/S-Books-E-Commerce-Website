import React from 'react'
import './Search.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Search = ({search, setSearch}) => {
    const handleclick = () =>{
      document.getElementById("searchInput").value=''
        setSearch('')
    }

  return (
    <div className='search-container container'>
      <form onSubmit={e=>{e.preventDefault();}}>
        <input onChange={(e) => setSearch(e.target.value)} type="text" id='searchInput' placeholder='Search Books...' />
        <Link onClick={handleclick} className='search-remove'>X</Link>
      </form>
    </div>
  )
}

export default Search
