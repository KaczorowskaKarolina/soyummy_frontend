import { Routes, Route } from 'react-router-dom';

// import { StartPage } from '../pages/startPage/StartPage.jsx';
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
        {/* <Route path="/soyummy_frontend" element={<StartPage />} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
};
