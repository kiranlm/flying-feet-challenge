import React, { useState } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './Routes';
import Header from './Components/Header';

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
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
