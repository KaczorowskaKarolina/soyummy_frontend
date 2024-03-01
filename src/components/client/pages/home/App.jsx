import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
/* import your page component here and uncomment appropriate route below */

const App = () => {
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
      <HomePage />
      {/* <Routes>
        <Route path="/soyummy_frontend" element={<StartPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
            path="/categories/:categoryName"
            element={<CategoriesPage />}
          />
          <Route path="/add" element={<AddRecipesPage />} />
          <Route path="/my" element={<MyRecipesPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/shopping-list" element={<ShoppingListPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes> */}
    </div>
  );
};

export { App };
