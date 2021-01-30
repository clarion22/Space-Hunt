import { createContext, useState, useContext, useEffect } from 'react';
export const SearchContext = createContext();

export function useSearchContext() {
  return useContext(SearchContext);
}

export function SearchProvider(props) {
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {

  }, [searchTerm]);
  return (
    <SearchContext.Provider value={{searchTerm, setSearchTerm}}>
      {props.children}
    </SearchContext.Provider>
  )
}
