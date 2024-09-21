import React from 'react';

const SearchBar = ({ onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search Pokémon..."
      style={styles.searchBar}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

const styles = {
  searchBar: {
    padding: '8px',
    margin: '16px',
    width: '300px',
    fontSize: '16px',
    display: 'fixed',
  },
};

export default SearchBar;
