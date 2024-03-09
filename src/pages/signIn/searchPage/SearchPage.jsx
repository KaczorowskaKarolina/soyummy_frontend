import { useSelector } from 'react-redux';
import { SearchBar } from '../searchPage/components/Organisms/SearchBar/SearchBar.jsx';
import { SearchedRecipesList } from '../searchPage/components/Templates/SearchedRecipesList/SearchedRecipesList.jsx';

const SearchPage = () => {
  const searchResults = useSelector(state => state.search.recipes);

  return (
    <div>
      <SearchBar />
      <SearchedRecipesList recipes={searchResults} />
    </div>
  );
};

export { SearchPage };
