import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from './Organisms/PrivateRoute/PrivateRoute.jsx';
import { RestrictedRoute } from './Organisms/RestrictedRoute/RestrictedRoute.jsx';

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
        <Route path="/soyummy_frontend" element={<StartPage />} />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/recipes" component={<SignIn />} />
          }
        />
        <Route
          path="/registration"
          element={
            <RestrictedRoute
              redirectTo="/recipes"
              component={<Registration />}
            />
          }
        />

        {/* Below is a testing component that I've created to check how the loggin in and registration works. */}
        {/* Btw. this is how all the other croutes should look like! */}
        <Route
          path="/recipe"
          element={
            <PrivateRoute
              redirectTo="/soyummy_frontend"
              component={
                <div>
                  Testing of an app in progress. Please stay allert and follow
                  as on facebook, instagram, snapchat, linkedin, tiktok,
                  nasza-klasa or read the newspapers like Super Express or The
                  Times to be updated and to know about newest realeses and
                  functions of our app. Thank you for beeing patient, it means
                  nothing to us. Sincerly, group 1 from NYB.
                </div>
              }
            />
          }
        />
      </Routes>
    </div>
  );
};

// sth
