import { Routes, Route, Link } from 'react-router-dom';

import { PrivateRoute } from './Organisms/PrivateRoute/PrivateRoute.jsx';
import { RestrictedRoute } from './Organisms/RestrictedRoute/RestrictedRoute.jsx';

import { StartPage } from '../pages/startPage/StartPage.jsx';
import { SignIn } from '../pages/signIn/SignIn.jsx';
import { Registration } from '../pages/registration/Registration.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from '../redux/auth/operations.js';
import { useAuth } from '../hooks/index.js';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return isRefreshing ? (
    <div>Refreshing...</div>
  ) : (
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
        <Route
          path="/soyummy_frontend"
          element={
            <RestrictedRoute redirectTo="/recipe" component={<StartPage />} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/recipe" component={<SignIn />} />
          }
        />
        <Route
          path="/registration"
          element={
            <RestrictedRoute
              redirectTo="/recipe"
              component={<Registration />}
            />
          }
        />
        <Route path="/verifyEmail" element={<VerifiedEmail />} />

        {/* Below is a testing component that I've created to check how the loggin in and registration works. */}
        {/* Btw. this is how all the other routes should look like! */}
        <Route
          path="/recipe"
          element={
            <PrivateRoute
              redirectTo="/soyummy_frontend"
              component={
                <div>
                  Testing of an app in progress. Please stay allert and follow
                  us on facebook, instagram, snapchat, linkedin, tiktok,
                  nasza-klasa or read the newspapers like Super Express or The
                  Times to be updated and to know about newest realeses and
                  functions of our app. Thank you for beeing patient, it means
                  nothing to us. Sincerly, group 1 from NYB (Not Your Businnes).
                </div>
              }
            />
          }
        />
      </Routes>
    </div>
  );
};

const VerifiedEmail = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const data = JSON.parse(decodeURIComponent(queryParams.get('status')));
  return (
    <div>
      {data === 200 && (
        <p>
          Your email has been sucesfully verified. You can now{' '}
          <Link to={'/signin'}> log in</Link>
        </p>
      )}
      {data === 400 && <p>Invalid token, please contact Customer Service.</p>}
      {data === 404 && <p>User not found, please contact Customer Service.</p>}
      {!data && <p>You shouldn't be here you little shit. Go away!!!!</p>}
      {data === 500 && (
        <p>You shouldn't be here you little shit. Go away!!!!</p>
      )}
      {data !== 200 && data !== 400 && data !== 404 && data !== 500 && (
        <p>Something went wrong. Please contact our Costumer Service.</p>
      )}
    </div>
  );
};
