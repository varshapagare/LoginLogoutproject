import React, { useState } from 'react';

const SearchProduct = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Products"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchProduct;