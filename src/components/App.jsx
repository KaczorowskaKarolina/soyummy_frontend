import { Routes, Route } from 'react-router-dom';

import { StartPage } from '../pages/startPage/StartPage.jsx';
import { SignIn } from '../pages/signIn/SignIn.jsx';
import { Registration } from '../pages/registration/Registration.jsx';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        {/* <Route path="/soyummy_frontend" element={<StartPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<SharedLayout />}> */}
        <Route path="/main" element={<HomePage />} />
        <Route path="/categories/:categoryName" element={<CategoriesPage />} />
        {/* <Route path="/add" element={<AddRecipesPage />} />
          <Route path="/my" element={<MyRecipesPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/shopping-list" element={<ShoppingListPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
          <Route path="*" element={<Page404 />} />
        </Route> */}
      </Routes>
    </div>
  );
};

export { App };
