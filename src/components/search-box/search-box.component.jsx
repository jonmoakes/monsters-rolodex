import React from 'react';

import { SearchInput } from "./search-box.styles";

const SearchBox = ({ placeholder, handleChange }) => ( 
    <SearchInput
        type='search'  
        placeholder={placeholder}  
        onChange={handleChange}   
    />
);

export default SearchBox;