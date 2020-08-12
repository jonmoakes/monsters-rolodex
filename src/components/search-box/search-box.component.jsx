import React from 'react';

import { SearchInput } from "./search-box.styles";

const SearchBox = ({ placeholder, handleChange }) => ( // received placeholder and handleChange from app.js in the imported searchbox component.
    <SearchInput
        type='search'  
        placeholder={placeholder}  // giving the search input a placeholder and handleChange that gives the values from the searchbox in app.js.
        onChange={handleChange}    // can have multiple search boxes in app.js using these two things.You would give each searchbox its respective code in theapp.js searxh
    />
);

export default SearchBox;