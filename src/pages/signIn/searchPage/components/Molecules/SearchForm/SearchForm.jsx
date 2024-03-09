import React, { useState } from 'react';

import styles from './SearchForm.module.css';

//Future import { useTheme }? (Dark Theme) and styles in the code to be replaced

const SearchForm = ({ onSearch }) => {
  // const { theme } = useTheme();
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    const queryValue = e.target.value;
    setSearchParams({ query: queryValue });
  };

  return (
    <form
      className={styles.searchForm}
      //className={`${styles.searchForm} ${
      // theme === 'dark' ? styles.darkTheme : ''
      // }`}
      onSubmit={handleSubmit}
    >
      <input
        className={styles.input}
        // className={`${styles.input} ${
        // theme === 'dark' ? styles.darkTheme : ''
        // }`}
        type="text"
        autoComplete="off"
        autoFocus
        required
        minLength={3}
        placeholder="Search..."
        name="query"
        value={query}
        onChange={handleQueryChange}
      ></input>
      <button type="submit" className={styles.buttonSearch}>
        Search
      </button>
    </form>
  );
};

export { SearchForm };
