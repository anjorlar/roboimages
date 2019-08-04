import React from 'react';

const Search = ({ searchChange }) => {
  return (
    <div className='pd'>
      <input type='search' placeholder='search image' onChange={searchChange} />
    </div>
  )
}

export default Search