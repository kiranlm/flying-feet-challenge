import React, { useState, useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './Routes';
import Header from './Components/Header';
import protectedRoutes from './Routes/ProtectedRoutes';
import * as firebase from 'firebase';
import { firebaseConfig } from './Config/firebase.config';
import ProtectedRouteHoc from './Routes/ProtectedRouteHoc';

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  function readSession() {
    const user = window.sessionStorage.getItem(
      `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
    );
    if (user) setLoggedIn(true);
  }
  useEffect(() => {
    readSession();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <div className="ms-Grid" dir="ltr">
        <Router>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12">
              <Header />
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12">
              <Switch>
                {protectedRoutes.map((route) => (
                  <ProtectedRouteHoc
                    key={route.path}
                    isLoggedIn={isLoggedIn}
                    path={route.path}
                    component={route.main}
                    exact={route.exact}
                    public={route.public}
                  />
                ))}
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
