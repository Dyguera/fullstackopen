import React from 'react';

export const SearchFilter = ({ inputFilter, handleFilterChange }) => {
  return (
    <div>
      <p>filter shown with
        <input
          value={inputFilter}
          onChange={handleFilterChange}
        />
      </p>
    </div>
  );
};