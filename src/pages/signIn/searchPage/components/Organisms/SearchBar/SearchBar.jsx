//import { useDispatch } from 'react-redux';

import styles from './SearchBar.module.css';
import { SearchForm } from '../../Molecules/SearchForm/SearchForm.jsx';
//import { SearchTypeSelector } from '#pages/searchPage/Atoms/SearchTypeSelector/SearchTypeSelector.jsx';


// Future backened implementation
// import { searchRecipesByName } from '#redux/reducers/search/actions.js';

//const SearchBar = () => {
  //const dispatch = useDispatch();
 // const handleSearch = query => {
  //  dispatch(searchRecipesByName(query));
  //};

  return (
    <div className={styles.searchBar}>
      <SearchForm onSearch={handleSearch} />
      <SearchTypeSelector />
    </div>
  );
//};

export { SearchBar };
