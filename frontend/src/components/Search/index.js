import React, { useState } from 'react';
import {useSearchContext} from '../../context/searchcontext';

const Search = () => {
  const {searchTem, setSearchTerm} = useSearchContext();
  const [term, setTerm] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(term)
  }
  return (
    <div className='flex items-center'>
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center py-2">
        <input onChange={e => setTerm(e.target.value)} className="rounded-sm bg-white border-none w-full text-gray-700 mr-3 py-1 px-2 focus: outline-none" type="text" placeholder="Search Project Term..." />
        <button className="bg-red-400 py-1 px-2 text-white" type="submit">
      Search
      </button>
      </div>
      </form>
  </div>
  )
}

export default Search;
