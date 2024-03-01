import { Routes, Route } from 'react-router-dom';

import { StartPage } from '../pages/startPage/StartPage.jsx';

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
        <Route path="/soyummy_frontend" element={<StartPage />} />
        {/* <Route path="/signin" />
        <Route path="/registration" /> */}
      </Routes>
    </div>
  );
};

// sth
